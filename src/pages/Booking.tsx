import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";

// Types
interface Cinema {
  id: string;
  name: string;
  address: string;
  showtimes: string[];
}

interface Seat {
  id: string;
  row: string;
  number: number;
  type: "standard" | "vip";
  status: "available" | "sold" | "selected";
}

// Mock data
const mockCinemas: Cinema[] = [
  {
    id: "1",
    name: "CGV Vincom Đồng Khởi",
    address: "72 Lê Thánh Tôn, Bến Nghé, Quận 1",
    showtimes: ["19:30", "21:15", "23:00"],
  },
  {
    id: "2",
    name: "Galaxy Nguyễn Du",
    address: "116 Nguyễn Du, Quận 1",
    showtimes: ["18:45", "20:30"],
  },
  {
    id: "3",
    name: "BHD Star Bitexco",
    address: "Tầng 3, 4 TTTM ICON 68, 2 Hải Triều",
    showtimes: ["19:00", "22:15"],
  },
];

const regions = [
  { id: "hcm", name: "TP. Hồ Chí Minh", count: 12 },
  { id: "hn", name: "Hà Nội", count: 8 },
  { id: "dn", name: "Đà Nẵng", count: 3 },
];

// Generate initial seat map
const generateSeats = (): Seat[] => {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const vipRows = ["F", "G"];
  const soldSeats = ["B3", "B4", "B5"];
  const seats: Seat[] = [];

  rows.forEach((row) => {
    for (let i = 1; i <= 10; i++) {
      const id = `${row}${i}`;
      seats.push({
        id,
        row,
        number: i,
        type: vipRows.includes(row) ? "vip" : "standard",
        status: soldSeats.includes(id) ? "sold" : "available",
      });
    }
  });

  return seats;
};

const Booking: React.FC = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState("hcm");
  const [selectedCinema, setSelectedCinema] = useState<Cinema | null>(
    mockCinemas[0]
  );
  const [selectedShowtime, setSelectedShowtime] = useState<string | null>(
    "19:30"
  );
  const [seats, setSeats] = useState<Seat[]>(generateSeats());
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds

  // Movie info (mock data - would come from API based on movieId)
  const movieInfo = {
    title: "Avengers: Endgame",
    format: "2D Phụ đề",
    duration: "181 phút",
    genres: "Hành động, Viễn tưởng",
  };

  // Price per ticket
  const standardPrice = 90000;
  const vipPrice = 110000;

  // Get selected seats
  const selectedSeats = seats.filter((seat) => seat.status === "selected");

  // Calculate total price
  const totalPrice = selectedSeats.reduce((total, seat) => {
    return total + (seat.type === "vip" ? vipPrice : standardPrice);
  }, 0);

  // Timer countdown
  useEffect(() => {
    if (selectedSeats.length === 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          // Reset selection when time runs out
          setSeats(generateSeats());
          return 300;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedSeats.length]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle seat click
  const handleSeatClick = (seatId: string) => {
    setSeats((prev) =>
      prev.map((seat) => {
        if (seat.id === seatId && seat.status !== "sold") {
          return {
            ...seat,
            status: seat.status === "selected" ? "available" : "selected",
          };
        }
        return seat;
      })
    );
  };

  // Handle cinema selection
  const handleCinemaSelect = (cinema: Cinema) => {
    setSelectedCinema(cinema);
    setSelectedShowtime(cinema.showtimes[0]);
  };

  // Handle payment
  const handlePayment = () => {
    if (selectedSeats.length === 0) return;
    navigate("/payment", {
      state: {
        movie: movieInfo,
        cinema: selectedCinema,
        showtime: selectedShowtime,
        seats: selectedSeats,
        totalPrice,
      },
    });
  };

  // Group seats by row for rendering
  const seatsByRow = seats.reduce(
    (acc, seat) => {
      if (!acc[seat.row]) acc[seat.row] = [];
      acc[seat.row].push(seat);
      return acc;
    },
    {} as Record<string, Seat[]>
  );

  // Render seat button
  const renderSeat = (seat: Seat) => {
    const baseClasses =
      "size-8 md:size-9 rounded-t-lg rounded-b-md transition-all focus:outline-none";

    if (seat.status === "sold") {
      return (
        <button
          key={seat.id}
          disabled
          className={`${baseClasses} bg-gray-800/40 cursor-not-allowed border border-transparent opacity-50 flex items-center justify-center text-white/20`}
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      );
    }

    if (seat.status === "selected") {
      return (
        <button
          key={seat.id}
          onClick={() => handleSeatClick(seat.id)}
          className={`${baseClasses} bg-primary border-2 border-primary text-white text-xs font-bold shadow-[0_0_15px_rgba(236,19,55,0.6)] scale-110 relative z-10`}
        >
          {seat.id}
        </button>
      );
    }

    if (seat.type === "vip") {
      return (
        <button
          key={seat.id}
          onClick={() => handleSeatClick(seat.id)}
          className={`${baseClasses} border-2 border-[#d4af37] bg-[#3a3020] hover:bg-primary hover:border-primary hover:scale-105`}
        />
      );
    }

    return (
      <button
        key={seat.id}
        onClick={() => handleSeatClick(seat.id)}
        className={`${baseClasses} bg-gray-700 hover:bg-primary hover:scale-105`}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-[#221013]">
      {/* Breadcrumbs */}
      <div className="w-full bg-[#221114]/50 border-b border-[#482329]/50">
        <div className="container mx-auto px-4 lg:px-6 py-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              className="text-[#c9929b] hover:text-primary transition-colors"
              to="/"
            >
              Trang chủ
            </Link>
            <span className="text-[#c9929b]">/</span>
            <Link
              className="text-[#c9929b] hover:text-primary transition-colors"
              to="/movie"
            >
              Đặt vé
            </Link>
            <span className="text-[#c9929b]">/</span>
            <span className="text-white font-medium">{movieInfo.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-6 py-6 lg:py-8">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] mb-2">
              Đặt vé: {movieInfo.title}
            </h1>
            <p className="text-[#c9929b] text-base">
              {movieInfo.format} • {movieInfo.duration} • {movieInfo.genres}
            </p>
          </div>
          {selectedSeats.length > 0 && (
            <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
              <span className="material-symbols-outlined">timer</span>
              <span>Thời gian giữ ghế: {formatTime(timeRemaining)}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Filters & Cinema Selection */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Region Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-bold uppercase tracking-wider">
                Khu vực
              </label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full h-12 rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#67323b] bg-[#33191e] px-4 appearance-none cursor-pointer"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name} ({region.count})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#c9929b] pointer-events-none">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            {/* Cinema List */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-bold uppercase tracking-wider">
                Chọn Rạp
              </label>
              <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                {mockCinemas.map((cinema) => (
                  <div
                    key={cinema.id}
                    onClick={() => handleCinemaSelect(cinema)}
                    className={`p-4 rounded-xl border cursor-pointer group transition-all ${
                      selectedCinema?.id === cinema.id
                        ? "border-primary bg-[#3a1c21]"
                        : "border-[#67323b] bg-[#33191e]/50 hover:bg-[#33191e] hover:border-[#c9929b]"
                    }`}
                  >
                    <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {cinema.name}
                    </h3>
                    <p className="text-xs text-[#c9929b] mb-3 truncate">
                      {cinema.address}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cinema.showtimes.map((time) => (
                        <button
                          key={time}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCinema(cinema);
                            setSelectedShowtime(time);
                          }}
                          className={`h-8 px-3 rounded text-xs font-medium transition-all ${
                            selectedCinema?.id === cinema.id &&
                            selectedShowtime === time
                              ? "bg-primary text-white font-bold shadow-lg shadow-primary/20"
                              : "bg-[#33191e] border border-[#67323b] text-[#c9929b] hover:border-primary hover:text-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Seat Map */}
          <div className="lg:col-span-6 bg-[#221114] rounded-2xl p-6 border border-[#482329] flex flex-col items-center">
            {/* Screen Visual */}
            <div className="w-full flex flex-col items-center mb-12">
              <div className="h-1.5 w-3/4 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full shadow-[0_10px_30px_-5px_rgba(255,255,255,0.4)] mb-2"></div>
              <p className="text-[#c9929b] text-xs uppercase tracking-[0.2em]">
                Màn hình
              </p>
            </div>

            {/* Seat Grid */}
            <div className="w-full max-w-lg mx-auto">
              {/* Standard Rows (A-E) */}
              <div className="flex flex-col gap-3 mb-6">
                {["A", "B", "C", "D", "E"].map((row) => (
                  <div key={row} className="flex justify-center gap-2 md:gap-3">
                    <span className="w-6 flex items-center justify-center text-[#c9929b] text-xs font-bold">
                      {row}
                    </span>
                    {seatsByRow[row]?.slice(0, 3).map(renderSeat)}
                    <span className="w-4"></span>
                    {seatsByRow[row]?.slice(3, 7).map(renderSeat)}
                    <span className="w-4"></span>
                    {seatsByRow[row]?.slice(7, 10).map(renderSeat)}
                  </div>
                ))}
              </div>

              {/* VIP Rows (F-G) */}
              <div className="flex flex-col gap-3 mb-8">
                {["F", "G"].map((row) => (
                  <div key={row} className="flex justify-center gap-2 md:gap-3">
                    <span className="w-6 flex items-center justify-center text-[#c9929b] text-xs font-bold">
                      {row}
                    </span>
                    {seatsByRow[row]?.slice(0, 3).map(renderSeat)}
                    <span className="w-4"></span>
                    {seatsByRow[row]?.slice(3, 7).map(renderSeat)}
                    <span className="w-4"></span>
                    {seatsByRow[row]?.slice(7, 10).map(renderSeat)}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-auto pt-6 border-t border-[#482329] w-full">
              <div className="flex items-center gap-3">
                <div className="size-5 rounded bg-gray-700"></div>
                <span className="text-sm text-[#c9929b]">Ghế thường</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-5 rounded border-2 border-[#d4af37] bg-[#3a3020]"></div>
                <span className="text-sm text-[#c9929b]">Ghế VIP</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-5 rounded bg-primary shadow-[0_0_10px_rgba(236,19,55,0.4)]"></div>
                <span className="text-sm text-[#c9929b]">Đang chọn</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-5 rounded bg-gray-800 opacity-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px] text-white">
                    close
                  </span>
                </div>
                <span className="text-sm text-[#c9929b]">Đã bán</span>
              </div>
            </div>
          </div>

          {/* Right Column: Summary Sticky */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 bg-[#221114] rounded-2xl border border-[#482329] overflow-hidden">
              {/* Movie Header with gradient placeholder */}
              <div className="relative h-48 w-full bg-gradient-to-tr from-gray-900 via-[#3a1c21] to-black">
                <div className="absolute inset-0 flex items-center justify-center text-white/10">
                  <span className="material-symbols-outlined !text-8xl">
                    movie
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white text-lg font-bold truncate">
                    {movieInfo.title}
                  </h3>
                  <p className="text-sm text-[#c9929b]">{movieInfo.format}</p>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-4">
                {/* Cinema Info */}
                <div className="pb-4 border-b border-[#482329] border-dashed">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                      location_on
                    </span>
                    <div>
                      <p className="text-white text-sm font-bold">
                        {selectedCinema?.name || "Chưa chọn rạp"}
                      </p>
                      <p className="text-[#c9929b] text-xs">Rạp 5</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                      calendar_today
                    </span>
                    <div>
                      <p className="text-white text-sm font-bold">
                        Thứ 6, 24/05/2024
                      </p>
                      <p className="text-[#c9929b] text-xs">
                        Suất: {selectedShowtime || "--:--"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Seats & Price */}
                <div className="flex justify-between items-start pb-4 border-b border-[#482329] border-dashed">
                  <div>
                    <p className="text-[#c9929b] text-xs mb-1">Ghế đã chọn:</p>
                    <div className="flex gap-1 flex-wrap">
                      {selectedSeats.length > 0 ? (
                        selectedSeats.map((seat) => (
                          <span
                            key={seat.id}
                            className="text-white text-sm font-bold bg-gray-800 px-2 py-0.5 rounded border border-gray-700"
                          >
                            {seat.id}
                          </span>
                        ))
                      ) : (
                        <span className="text-[#c9929b] text-sm">
                          Chưa chọn ghế
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#c9929b] text-xs mb-1">Đơn giá:</p>
                    <p className="text-white text-sm">
                      {vipPrice.toLocaleString()}đ/vé
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[#c9929b] text-sm">Tổng cộng</span>
                  <span className="text-primary text-2xl font-black">
                    {totalPrice.toLocaleString()}đ
                  </span>
                </div>

                {/* Buttons */}
                <button
                  onClick={handlePayment}
                  disabled={selectedSeats.length === 0}
                  className="w-full h-12 rounded-lg bg-primary hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
                >
                  Thanh toán
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #33191e;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #67323b;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ec1337;
        }
      `}</style>
    </div>
  );
};

export default Booking;
