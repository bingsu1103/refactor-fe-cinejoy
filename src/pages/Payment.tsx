import { Link } from "react-router";

const Payment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#221013] text-white">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#67323b] px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <svg
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
              />
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
            CinemaPlus
          </h2>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-[#c9929b]">
            <span className="text-primary">1. Tài khoản</span>
            <span className="material-symbols-outlined text-base">
              chevron_right
            </span>
            <span className="text-white">2. Thanh toán</span>
            <span className="material-symbols-outlined text-base">
              chevron_right
            </span>
            <span>3. Hoàn tất</span>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-[#c9929b] hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            <span>Quay lại</span>
          </Link>
          <div className="flex items-center justify-center size-8 rounded-full bg-[#33191e]/50 text-white">
            <span className="material-symbols-outlined text-lg">lock</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Payment Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-white">
                Thông tin thanh toán
              </h1>
              <p className="text-[#c9929b] text-base">
                Vui lòng kiểm tra kỹ thông tin trước khi xác nhận.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs font-bold">
                  1
                </span>
                Thông tin cá nhân
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#c9929b]">
                    Họ và tên
                  </span>
                  <div className="relative">
                    <input
                      className="w-full h-12 rounded-lg border border-[#67323b] bg-[#33191e] px-4 pl-11 text-white placeholder-slate-400 focus:border-primary focus:ring-primary"
                      placeholder="Nhập họ và tên"
                      type="text"
                      defaultValue="Nguyễn Văn A"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c9929b]">
                      person
                    </span>
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#c9929b]">
                    Email nhận vé
                  </span>
                  <div className="relative">
                    <input
                      className="w-full h-12 rounded-lg border border-[#67323b] bg-[#33191e] px-4 pl-11 text-white placeholder-slate-400 focus:border-primary focus:ring-primary"
                      placeholder="Nhập email"
                      type="email"
                      defaultValue="nguyenvana@gmail.com"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c9929b]">
                      mail
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs font-bold">
                  2
                </span>
                Phương thức thanh toán
              </h3>
              <div className="flex flex-col gap-3">
                {/* VNPay Option */}
                <label className="group relative flex items-center gap-4 rounded-xl border border-[#67323b] bg-[#33191e] p-4 cursor-pointer hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                  <input
                    defaultChecked
                    className="h-5 w-5 border-slate-600 text-primary focus:ring-primary bg-transparent"
                    name="payment_method"
                    type="radio"
                  />
                  <div className="flex items-center justify-center size-12 rounded-lg bg-white p-1 border border-slate-100">
                    <img
                      alt="VNPay Logo"
                      className="w-full h-auto object-contain"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJF52FG9-X2BPBTTT8w20Jhh2XFPI1JwZUA7lpbKoVjd7Q425nxO98d18vWVU1sisMudkWBUV4ii-Yt4ZuSept2LCyxNSYc5P7k7lAFfU3rD0l_sSozzDa93Jr90Lws6-HZl0f9GmxZUwWe-nC4yEx_T38IGk3X1qlaXHP4ZNedV69aORg21BikgqPYxPYEyClC0K9KYMbFUh0SlJ3pkqI-a0GVloVlRDj7blbI-R_pCHTdhkYgdE77TLGqvQhXQlSwvSfyug1ZgA"
                    />
                  </div>
                  <div className="flex grow flex-col">
                    <div className="flex justify-between items-center w-full">
                      <p className="text-white font-bold leading-normal">
                        VNPay QR / Ngân hàng
                      </p>
                      <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">
                        Miễn phí
                      </span>
                    </div>
                    <p className="text-[#c9929b] text-sm font-normal leading-normal">
                      Quét mã qua ứng dụng ngân hàng hoặc ví VNPay
                    </p>
                  </div>
                </label>

                {/* ZaloPay Option */}
                <label className="group relative flex items-center gap-4 rounded-xl border border-[#67323b] bg-[#33191e] p-4 cursor-pointer hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                  <input
                    className="h-5 w-5 border-slate-600 text-primary focus:ring-primary bg-transparent"
                    name="payment_method"
                    type="radio"
                  />
                  <div className="flex items-center justify-center size-12 rounded-lg bg-white p-1 border border-slate-100">
                    <img
                      alt="ZaloPay Logo"
                      className="w-full h-auto object-contain"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnC0Nj8u3l64vPn0mJbNgiiIjbjPLqC34anIds1j2S61H4zYIljMQPVjAbmNF4hFwV-8rwzrCar99TxaAaECHiTKhfbBlPooZSaqmYKTyQbxi_5gUjLJXCppw0lhtrl8EBEs1WA-o2rfDr5CrLo4kewFRG_qE1mNSTyqw03RYdURJ3L5JzQikXeyMF8_yWuBYkrm1FBaVLo6R6z3sOJAnZcSh7ez3bh3cgKhp4P4ubX14jUYkfY_U75kNOJ5K--dwi_iN69Cp7gIk"
                    />
                  </div>
                  <div className="flex grow flex-col">
                    <p className="text-white font-bold leading-normal">
                      Ví điện tử ZaloPay
                    </p>
                    <p className="text-[#c9929b] text-sm font-normal leading-normal">
                      Thanh toán nhanh chóng qua ví ZaloPay
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-[#c9929b]">
              <span className="material-symbols-outlined text-lg text-green-500">
                lock
              </span>
              <span>
                Thông tin thanh toán của bạn được mã hóa và bảo mật tuyệt đối.
              </span>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 rounded-2xl border border-[#67323b] bg-[#33191e] overflow-hidden shadow-xl">
              {/* Movie/Plan Info */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#33191e] to-transparent opacity-90 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay z-10"></div>
                <img
                  alt="Rạp chiếu phim hiện đại với ánh sáng đỏ"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtbW0NVNYF2CEKi1QIOW1C_ghGxn1iQCxBKOnag_r2CXD8YoUC4UBEm3zYv8aS1BFahtzalNvkUR-_xR5uQTB74X8UWqVjCIn4jqBkeC7IWAswCAu_JLETL4DduSF8xKhT9WiaLtEpB4brpXoEXNy51jKeDwdoobwt1_OXOJMzpYc8a-mxkfjUZu0FmuPQU0MfP2oR5T6KTLUmykiaxb0GyRKhuQPs9Pek5rC5OrpJyxf_xhLhsS723vG_BTNZ_op0dX7xhfruJuo"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end gap-4">
                  <div className="h-24 w-16 shrink-0 overflow-hidden rounded-lg border border-white/20 shadow-lg">
                    <img
                      alt="Poster phim"
                      className="h-full w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyRzQ9Ieg34_ZOi6Rt_H40-Q78JcgHc151MxCcmAtcmt_cCz1cbQawwADj_drTuY4wUFvCiun6hYn0Uka-exw59S1V3YRGFnkmBPhwsXyt25mKelxowAjTx2omG0IiWDOOjdyuJoDmHgqpkLk7rgm5Myt68-VogKsWCwnpaqFkqe4SNJ1ngJWqb-1GbEtJKlK4rc1HtV25zE-AxgZeohCqKG8ZD24MsMkK2RceO2NS_T7RBbkgvakg9AxHo7MWNbK0k9QBaSIfqc"
                    />
                  </div>
                  <div className="flex flex-col pb-1">
                    <h4 className="text-white text-lg font-bold line-clamp-1">
                      Gói Premium 1 Tháng
                    </h4>
                    <p className="text-white/80 text-sm">Chất lượng 4K HDR</p>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-[#c9929b] text-sm">Đơn giá</span>
                  <span className="text-white font-medium">200.000đ</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-[#c9929b] text-sm">Thuế VAT (8%)</span>
                  <span className="text-white font-medium">16.000đ</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-[#c9929b] text-sm">Giảm giá</span>
                    <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                      PROMO
                    </span>
                  </div>
                  <span className="text-green-500 font-medium">-16.000đ</span>
                </div>
                {/* Total */}
                <div className="flex justify-between items-end pt-2">
                  <span className="text-white text-lg font-bold">
                    Tổng thanh toán
                  </span>
                  <span className="text-primary text-2xl font-black tracking-tight">
                    200.000đ
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex flex-col gap-3">
                <button className="flex w-full items-center justify-center rounded-lg bg-primary py-4 text-white font-bold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Thanh toán 200.000đ
                </button>
                <button className="flex w-full items-center justify-center rounded-lg bg-white/5 py-3 text-[#c9929b] font-medium text-sm hover:bg-white/10 transition-colors">
                  Hủy bỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Simple */}
      <footer className="mt-auto border-t border-[#67323b] py-8 px-6 bg-[#33191e]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#c9929b] text-sm">
            © 2024 CinemaPlus. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/terms"
              className="text-[#c9929b] hover:text-primary text-sm"
            >
              Điều khoản sử dụng
            </Link>
            <Link
              to="/privacy"
              className="text-[#c9929b] hover:text-primary text-sm"
            >
              Chính sách bảo mật
            </Link>
            <Link
              to="/support"
              className="text-[#c9929b] hover:text-primary text-sm"
            >
              Hỗ trợ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
