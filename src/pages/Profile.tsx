import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../store/useAuth";
import authApi from "../services/api-auth";

// Define the menu items for the sidebar
type MenuItem = {
  id: string;
  icon: string;
  label: string;
  path?: string;
  isLogout?: boolean;
};

const menuItems: MenuItem[] = [
  {
    id: "profile",
    icon: "person",
    label: "Thông tin cá nhân",
    path: "/profile",
  },
  {
    id: "password",
    icon: "lock",
    label: "Đổi mật khẩu",
    path: "/profile/password",
  },
  {
    id: "tickets",
    icon: "confirmation_number",
    label: "Lịch sử đặt vé",
    path: "/profile/tickets",
  },
  {
    id: "payment",
    icon: "credit_card",
    label: "Phương thức thanh toán",
    path: "/profile/payment",
  },
];

const Profile: React.FC = () => {
  const { user, authenticated, clearUser } = useAuth();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("profile");

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "male",
    city: "hcm",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authenticated || !user) {
      navigate("/login");
    } else {
      // Initialize form with user data
      setFormData({
        fullName: user.username || "",
        email: user.email || "",
        phone: "",
        birthDate: "",
        gender: "male",
        city: "hcm",
      });
    }
  }, [authenticated, user, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      // TODO: Implement API call to update user profile
      // await userApi.updateProfile(formData);
      setMessage({ type: "success", text: "Cập nhật thông tin thành công!" });
    } catch (error) {
      console.error("Update profile error:", error);
      setMessage({
        type: "error",
        text: "Có lỗi xảy ra khi cập nhật thông tin.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleCancel = () => {
    // Reset form to original user data
    if (user) {
      setFormData({
        fullName: user.username || "",
        email: user.email || "",
        phone: "",
        birthDate: "",
        gender: "male",
        city: "hcm",
      });
    }
    setMessage(null);
  };

  if (!authenticated || !user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 shrink-0 flex flex-col gap-6">
        {/* Mobile User Card */}
        <div className="bg-[#2f161a] rounded-xl p-6 border border-[#482329] flex items-center gap-4 md:hidden">
          <div className="size-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold overflow-hidden">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.username}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xl">
                {user.username?.charAt(0).toUpperCase() || "U"}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-white font-bold">{user.username}</h3>
            <span className="text-[#c9929b] text-sm">{user.email}</span>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-[#2f161a] rounded-xl p-4 border border-[#482329] shadow-sm">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path || "#"}
                onClick={() => setActiveMenu(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeMenu === item.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-[#c9929b] hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}

            <div className="h-px bg-[#482329] my-2"></div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all w-full text-left"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Đăng xuất</span>
            </button>
          </div>
        </div>

        {/* Promotional Banner */}
        <div
          className="hidden md:flex flex-col relative overflow-hidden rounded-xl h-48 bg-cover bg-center group cursor-pointer"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=400&q=80")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-5 flex flex-col justify-end">
            <p className="text-white font-bold text-lg leading-tight">
              Nâng cấp VIP
            </p>
            <p className="text-gray-300 text-xs mt-1">
              Nhận ưu đãi bỏng nước miễn phí!
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            Hồ sơ của tôi
          </h1>
          <p className="text-[#c9929b]">
            Quản lý thông tin tài khoản và bảo mật
          </p>
        </div>

        <div className="bg-[#2f161a] rounded-xl border border-[#482329] overflow-hidden shadow-sm">
          {/* Profile Header Section */}
          <div className="p-6 md:p-8 border-b border-[#482329] bg-gradient-to-r from-[#2f161a] to-[#3a2026]">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="relative group">
                <div className="size-28 md:size-32 rounded-full bg-primary/20 border-4 border-[#2f161a] shadow-xl flex items-center justify-center text-primary font-bold overflow-hidden">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl">
                      {user.username?.charAt(0).toUpperCase() || "U"}
                    </span>
                  )}
                </div>
                <button
                  className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                  title="Đổi ảnh đại diện"
                >
                  <span className="material-symbols-outlined text-[20px] block">
                    photo_camera
                  </span>
                </button>
              </div>

              <div className="flex-1 text-center md:text-left pt-2">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
                  <h2 className="text-2xl font-bold text-white">
                    {user.username}
                  </h2>
                  <span className="bg-primary/20 text-primary border border-primary/30 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider self-center md:self-auto">
                    Thành viên VIP
                  </span>
                </div>
                <p className="text-[#c9929b] mb-1">{user.email}</p>
                <p className="text-[#c9929b] text-sm">
                  Thành viên từ tháng 8, 2023
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-6 justify-center md:justify-start">
                  <div>
                    <p className="text-white font-bold text-lg">24</p>
                    <p className="text-xs text-[#c9929b] uppercase tracking-wider">
                      Vé đã mua
                    </p>
                  </div>
                  <div className="w-px h-8 bg-[#482329]"></div>
                  <div>
                    <p className="text-white font-bold text-lg">1,200</p>
                    <p className="text-xs text-[#c9929b] uppercase tracking-wider">
                      Điểm thưởng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 md:p-8">
            {/* Success/Error Message */}
            {message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  message.type === "success"
                    ? "bg-green-500/10 border border-green-500/30 text-green-400"
                    : "bg-red-500/10 border border-red-500/30 text-red-400"
                }`}
              >
                <span className="material-symbols-outlined">
                  {message.type === "success" ? "check_circle" : "error"}
                </span>
                <span className="text-sm">{message.text}</span>
              </div>
            )}

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">
                    Họ và tên
                  </span>
                  <div className="relative">
                    <input
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#33191e] border border-[#67323b] text-white text-sm rounded-lg h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-[#c9929b]/50"
                    />
                  </div>
                </label>

                {/* Email (Read-only) */}
                <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">Email</span>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      disabled
                      readOnly
                      className="w-full bg-[#33191e]/50 border border-[#67323b]/50 text-[#c9929b] text-sm rounded-lg h-12 px-4 cursor-not-allowed"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#c9929b]/50 material-symbols-outlined text-lg">
                      lock
                    </span>
                  </div>
                </label>

                {/* Phone Number */}
                <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">
                    Số điện thoại
                  </span>
                  <div className="relative">
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Nhập số điện thoại"
                      className="w-full bg-[#33191e] border border-[#67323b] text-white text-sm rounded-lg h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-[#c9929b]/50"
                    />
                  </div>
                </label>

                {/* Date of Birth */}
                <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">
                    Ngày sinh
                  </span>
                  <div className="relative">
                    <input
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="w-full bg-[#33191e] border border-[#67323b] text-white text-sm rounded-lg h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-[#c9929b]/50 [color-scheme:dark]"
                    />
                  </div>
                </label>

                {/* Gender */}
                <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">
                    Giới tính
                  </span>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full bg-[#33191e] border border-[#67323b] text-white text-sm rounded-lg h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c9929b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5rem",
                    }}
                  >
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </label>

                {/* City */}
                <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">
                    Thành phố
                  </span>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#33191e] border border-[#67323b] text-white text-sm rounded-lg h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c9929b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5rem",
                    }}
                  >
                    <option value="hcm">TP. Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                    <option value="dn">Đà Nẵng</option>
                  </select>
                </label>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#482329] my-2"></div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 h-11 rounded-lg border border-[#482329] text-white font-medium hover:bg-white/5 transition-colors text-sm"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 h-11 rounded-lg bg-primary text-white font-bold hover:bg-red-600 transition-all shadow-lg shadow-primary/25 text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
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
                      <span>Đang lưu...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">
                        save
                      </span>
                      <span>Lưu thay đổi</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Link / Promo Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#2f161a] border border-[#482329] rounded-xl p-5 flex items-start gap-4 hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1 group-hover:text-primary transition-colors">
                Bảo mật tài khoản
              </h3>
              <p className="text-[#c9929b] text-sm leading-relaxed">
                Kích hoạt xác thực 2 bước để bảo vệ tài khoản của bạn tốt hơn.
              </p>
            </div>
          </div>

          <div className="bg-[#2f161a] border border-[#482329] rounded-xl p-5 flex items-start gap-4 hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1 group-hover:text-primary transition-colors">
                Cài đặt thông báo
              </h3>
              <p className="text-[#c9929b] text-sm leading-relaxed">
                Nhận thông báo về phim mới ra rạp và các khuyến mãi đặc biệt.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
