import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../store/useAuth";
import authApi from "../services/api-auth";
import { useDebounce } from "../hooks/useDebounce";

// Define ticket status types
type TicketStatus = "upcoming" | "completed" | "cancelled";

// Define ticket interface
interface ITicket {
  id: string;
  movieName: string;
  posterUrl: string;
  theater: string;
  auditorium: string;
  date: string;
  time: string;
  seats: string[];
  bookingCode: string;
  totalPrice: number;
  status: TicketStatus;
}

// Sidebar menu items
const menuItems = [
  { id: "account", icon: "person", label: "Tài khoản", path: "/profile" },
  {
    id: "history",
    icon: "confirmation_number",
    label: "Lịch sử đặt vé",
    path: "/booking-history",
    active: true,
  },
  {
    id: "membership",
    icon: "loyalty",
    label: "Thẻ thành viên",
    path: "/membership",
  },
  {
    id: "favorites",
    icon: "favorite",
    label: "Phim yêu thích",
    path: "/favorites",
  },
];

// Mock data for tickets
const mockTickets: ITicket[] = [
  {
    id: "1",
    movieName: "Avatar: Dòng Chảy Của Nước",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    theater: "CGV Vincom Đồng Khởi",
    auditorium: "Rạp 3",
    date: "15/10/2023",
    time: "19:30",
    seats: ["F5", "F6"],
    bookingCode: "#BOOK123456",
    totalPrice: 250000,
    status: "upcoming",
  },
  {
    id: "2",
    movieName: "Oppenheimer",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    theater: "Galaxy Nguyễn Du",
    auditorium: "Rạp 1",
    date: "10/08/2023",
    time: "20:00",
    seats: ["H12", "H13"],
    bookingCode: "#BOOK987654",
    totalPrice: 220000,
    status: "completed",
  },
  {
    id: "3",
    movieName: "Barbie",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    theater: "CGV Landmark 81",
    auditorium: "Rạp IMAX",
    date: "25/07/2023",
    time: "18:15",
    seats: ["K5"],
    bookingCode: "#BOOK554433",
    totalPrice: 110000,
    status: "completed",
  },
  {
    id: "4",
    movieName: "The Marvels",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    theater: "Lotte Cinema Gò Vấp",
    auditorium: "Rạp 2",
    date: "05/06/2023",
    time: "14:00",
    seats: ["C1", "C2"],
    bookingCode: "#BOOK112233",
    totalPrice: 180000,
    status: "cancelled",
  },
];

const BookingHistory: React.FC = () => {
  const { user, authenticated, isLoading, clearUser } = useAuth();
  const navigate = useNavigate();

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | TicketStatus>("all");
  const [dateFilter, setDateFilter] = useState("30days");
  const [currentPage, setCurrentPage] = useState(1);
  const [tickets, setTickets] = useState<ITicket[]>(mockTickets);

  // Debounce search query
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Redirect if not authenticated (only after loading is complete)
  useEffect(() => {
    if (!isLoading && (!authenticated || !user)) {
      navigate("/login");
    }
  }, [isLoading, authenticated, user, navigate]);

  // Filter tickets based on search and filters
  useEffect(() => {
    let filtered = [...mockTickets];

    // Filter by search
    if (debouncedSearch.trim()) {
      filtered = filtered.filter((ticket) =>
        ticket.movieName.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((ticket) => ticket.status === statusFilter);
    }

    setTickets(filtered);
    setCurrentPage(1);
  }, [debouncedSearch, statusFilter, dateFilter]);

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      clearUser();
      navigate("/");
    }
  };

  // Format price to Vietnamese currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  // Get status badge
  const getStatusBadge = (status: TicketStatus) => {
    switch (status) {
      case "upcoming":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Sắp chiếu
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">
              check_circle
            </span>
            Đã xem
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">cancel</span>
            Đã hủy
          </span>
        );
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-64px)] bg-background-dark">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="animate-spin h-12 w-12 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-[#c9929b] text-sm">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!authenticated || !user) {
    return null;
  }

  return (
    <div className="flex flex-1 overflow-hidden relative min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col justify-between bg-[#221114] border-r border-[#482329] p-4 z-10">
        <div className="flex flex-col gap-6">
          {/* User Mini Profile */}
          <div className="flex items-center gap-3 pb-6 border-b border-[#482329]">
            <div className="size-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold overflow-hidden shadow-sm">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-lg">
                  {user.username?.charAt(0).toUpperCase() || "U"}
                </span>
              )}
            </div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-white text-sm font-bold truncate">
                {user.username}
              </h1>
              <p className="text-[#c9929b] text-xs font-medium flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-yellow-500"
                  style={{
                    fontSize: "14px",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>
                Thành viên Gold
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                  item.active
                    ? "bg-primary/20 text-primary border border-transparent"
                    : "text-slate-300 hover:bg-[#482329]"
                }`}
              >
                <span
                  className={`material-symbols-outlined ${item.active ? "" : "group-hover:text-primary"} transition-colors`}
                  style={
                    item.active ? { fontVariationSettings: "'FILL' 1" } : {}
                  }
                >
                  {item.icon}
                </span>
                <p
                  className={`text-sm ${item.active ? "font-bold" : "font-medium"}`}
                >
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-[#482329] pt-4">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#482329] transition-all group"
          >
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">
              settings
            </span>
            <p className="text-sm font-medium">Cài đặt</p>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-900/20 transition-all w-full text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Đăng xuất</p>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-background-dark scroll-smooth">
        <div className="max-w-5xl mx-auto px-6 py-8 md:px-12 md:py-10 flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#482329] pb-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Lịch sử đặt vé
              </h1>
              <p className="text-[#c9929b] text-base">
                Quản lý và xem lại danh sách vé xem phim của bạn.
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-red-400 transition-colors">
              <span className="material-symbols-outlined">download</span>
              Xuất lịch sử (PDF)
            </button>
          </div>

          {/* Filters */}
          <div className="bg-[#2a1519] rounded-xl p-4 shadow-sm border border-[#482329] flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c9929b]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background-dark border border-[#482329] rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-400 text-sm font-medium"
                placeholder="Tìm kiếm theo tên phim..."
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative min-w-[160px] flex-1 md:flex-none">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c9929b]">
                  filter_list
                </span>
                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value as "all" | TicketStatus)
                  }
                  className="w-full appearance-none bg-background-dark border border-[#482329] rounded-lg py-3 pl-10 pr-8 text-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-medium cursor-pointer"
                >
                  <option value="all">Tất cả trạng thái</option>
                  <option value="upcoming">Sắp chiếu</option>
                  <option value="completed">Đã xem</option>
                  <option value="cancelled">Đã hủy</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">
                  expand_more
                </span>
              </div>
              <div className="relative min-w-[160px] flex-1 md:flex-none">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c9929b]">
                  calendar_today
                </span>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full appearance-none bg-background-dark border border-[#482329] rounded-lg py-3 pl-10 pr-8 text-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-medium cursor-pointer"
                >
                  <option value="30days">30 ngày qua</option>
                  <option value="thisMonth">Tháng này</option>
                  <option value="thisYear">Năm nay</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Ticket List */}
          <div className="flex flex-col gap-4">
            {tickets.length === 0 ? (
              <div className="bg-[#2a1519] border border-[#482329] rounded-xl p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-[#c9929b] mb-4 block">
                  confirmation_number
                </span>
                <h3 className="text-white text-lg font-bold mb-2">
                  Không tìm thấy vé nào
                </h3>
                <p className="text-[#c9929b] text-sm">
                  Thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác.
                </p>
              </div>
            ) : (
              tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className={`group bg-[#2a1519] border border-[#482329] rounded-xl p-4 flex flex-col md:flex-row gap-5 transition-all shadow-sm hover:shadow-md ${
                    ticket.status === "upcoming"
                      ? "hover:border-primary/50"
                      : ticket.status === "cancelled"
                        ? "opacity-75 hover:opacity-100 bg-[#1a0e10]"
                        : "opacity-90 hover:opacity-100 hover:border-gray-600"
                  }`}
                >
                  {/* Poster */}
                  <div
                    className={`shrink-0 w-full md:w-[100px] aspect-[2/3] rounded-lg bg-cover bg-center shadow-inner relative overflow-hidden ${
                      ticket.status === "cancelled"
                        ? "grayscale"
                        : ticket.status === "completed"
                          ? "grayscale group-hover:grayscale-0 transition-all duration-300"
                          : ""
                    }`}
                    style={{ backgroundImage: `url("${ticket.posterUrl}")` }}
                  >
                    {ticket.status === "upcoming" && (
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3
                          className={`text-xl font-bold transition-colors ${
                            ticket.status === "cancelled"
                              ? "text-slate-400 line-through decoration-2"
                              : ticket.status === "upcoming"
                                ? "text-white group-hover:text-primary"
                                : "text-white"
                          }`}
                        >
                          {ticket.movieName}
                        </h3>
                        {getStatusBadge(ticket.status)}
                      </div>
                      <div
                        className={`grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm mt-3 ${
                          ticket.status === "cancelled"
                            ? "text-slate-500"
                            : "text-[#c9929b]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">
                            location_on
                          </span>
                          <span>
                            {ticket.theater} -{" "}
                            {ticket.status !== "cancelled" && (
                              <span className="text-white font-medium">
                                {ticket.auditorium}
                              </span>
                            )}
                            {ticket.status === "cancelled" && ticket.auditorium}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">
                            schedule
                          </span>
                          <span>
                            {ticket.time} -{" "}
                            {ticket.status !== "cancelled" && (
                              <span className="text-white font-medium">
                                {ticket.date}
                              </span>
                            )}
                            {ticket.status === "cancelled" && ticket.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">
                            event_seat
                          </span>
                          <span>
                            Ghế:{" "}
                            {ticket.status !== "cancelled" && (
                              <span className="text-white font-bold">
                                {ticket.seats.join(", ")}
                              </span>
                            )}
                            {ticket.status === "cancelled" &&
                              ticket.seats.join(", ")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">
                            receipt_long
                          </span>
                          <span>
                            Mã vé:{" "}
                            {ticket.status !== "cancelled" && (
                              <span className="text-white font-mono">
                                {ticket.bookingCode}
                              </span>
                            )}
                            {ticket.status === "cancelled" &&
                              ticket.bookingCode}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-[#482329]">
                      <div className="flex flex-col">
                        <span
                          className={`text-xs ${
                            ticket.status === "cancelled"
                              ? "text-slate-500"
                              : "text-[#c9929b]"
                          }`}
                        >
                          {ticket.status === "cancelled"
                            ? "Hoàn tiền"
                            : "Tổng tiền"}
                        </span>
                        <span
                          className={`text-lg font-bold ${
                            ticket.status === "upcoming"
                              ? "text-primary"
                              : ticket.status === "cancelled"
                                ? "text-slate-500 line-through"
                                : "text-slate-300"
                          }`}
                        >
                          {formatPrice(ticket.totalPrice)}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        {ticket.status === "upcoming" && (
                          <>
                            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#482329] text-white hover:bg-white/5 text-sm font-medium transition-colors">
                              <span className="material-symbols-outlined text-lg">
                                qr_code_2
                              </span>
                              Mã QR
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary hover:bg-red-600 text-white text-sm font-bold shadow-lg shadow-primary/30 transition-all transform active:scale-95">
                              Chi tiết vé
                              <span className="material-symbols-outlined text-lg">
                                arrow_forward
                              </span>
                            </button>
                          </>
                        )}
                        {ticket.status === "completed" && (
                          <>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary hover:bg-primary/5 text-sm font-medium transition-colors">
                              <span className="material-symbols-outlined text-lg">
                                rate_review
                              </span>
                              Đánh giá
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-white text-sm font-medium transition-colors">
                              Đặt vé lại
                            </button>
                          </>
                        )}
                        {ticket.status === "cancelled" && (
                          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors">
                            Xem chi tiết
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {tickets.length > 0 && (
            <div className="flex justify-center py-6">
              <nav className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#482329] text-[#c9929b] hover:bg-[#2a1519] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md"
                        : "border border-[#482329] text-[#c9929b] hover:bg-[#2a1519]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#482329] text-[#c9929b] hover:bg-[#2a1519] transition-colors"
                >
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BookingHistory;
