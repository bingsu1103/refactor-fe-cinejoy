import { useState } from "react";
import { Link } from "react-router";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2i1BGpS0-tthdGzaNCbmJr-vN5OnZ3de-QXGfQKylFEtREfEEhP0nDu6okD0ej3xECR5e9IY1_E8Ev26jNxlkPtE8Y3cLG6SZmp5Mql8Swv-8lczUX861nFPekS0tSpWAvo0NXTz9DQ9cXwQQs4Zlua_eZS6SzKtXNnqVFbL0TtTpstdBdkXVuVaY6T3abFoBGo-LJRqk6TaLM5IfkzjZAk8uS9kiBqzu2YaI2-dVClMsNFUXLPD3gUJYhTQdeTVMzJfUTnr-Ccc')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#221013]/80 to-[#221013] z-10"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 lg:px-12">
          <Link
            to="/"
            className="flex items-center gap-3 text-primary hover:opacity-90 transition-opacity"
          >
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
            <span className="text-white text-2xl font-bold tracking-tight">
              CineMovie
            </span>
          </Link>
        </header>

        {/* Main Content: Login Form */}
        <main className="flex-1 flex items-center justify-center p-4 py-12">
          <div className="w-full max-w-[480px]">
            <div className="bg-[#221013]/85 backdrop-blur-xl border border-primary/10 rounded-2xl shadow-2xl p-8 md:p-10">
              {/* Headline */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Đăng nhập
                </h1>
                <p className="text-gray-400 text-sm">
                  Chào mừng trở lại! Vui lòng nhập thông tin của bạn.
                </p>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-5">
                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-white text-sm font-medium"
                    htmlFor="email"
                  >
                    Email hoặc số điện thoại
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-[#482329] border-transparent text-white placeholder-rose-200/50 focus:border-primary focus:bg-[#2d1519] focus:ring-1 focus:ring-primary transition-colors duration-200"
                    id="email"
                    placeholder="name@example.com"
                    type="text"
                  />
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-white text-sm font-medium"
                      htmlFor="password"
                    >
                      Mật khẩu
                    </label>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      className="w-full h-12 pl-4 pr-12 rounded-lg bg-[#482329] border-transparent text-white placeholder-rose-200/50 focus:border-primary focus:bg-[#2d1519] focus:ring-1 focus:ring-primary transition-colors duration-200"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      className="absolute right-0 top-0 h-full px-4 text-rose-300 hover:text-white transition-colors flex items-center justify-center"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="w-4 h-4 rounded border-rose-900 bg-[#482329] text-primary focus:ring-offset-[#221013] focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      Ghi nhớ đăng nhập
                    </span>
                  </label>
                  <a
                    className="text-primary hover:text-red-400 font-medium transition-colors"
                    href="#"
                  >
                    Quên mật khẩu?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full h-12 bg-primary hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2"
                  type="submit"
                >
                  <span>Đăng nhập</span>
                </button>

                {/* Social Login Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#482329]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-[#221013] px-4 text-gray-400">
                      Hoặc tiếp tục với
                    </span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className="flex items-center justify-center gap-2 h-11 bg-white hover:bg-gray-100 text-slate-900 rounded-lg transition-colors font-medium text-sm"
                    type="button"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 h-11 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-lg transition-colors font-medium text-sm"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </button>
                </div>
              </form>

              {/* Footer Sign Up Prompt */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Bạn chưa có tài khoản?
                  <Link
                    to="/register"
                    className="text-white hover:text-primary font-bold transition-colors ml-1"
                  >
                    Đăng ký ngay
                  </Link>
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-6 flex justify-center gap-6 text-xs text-gray-500">
              <a className="hover:text-gray-300" href="#">
                Trợ giúp
              </a>
              <a className="hover:text-gray-300" href="#">
                Quyền riêng tư
              </a>
              <a className="hover:text-gray-300" href="#">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
