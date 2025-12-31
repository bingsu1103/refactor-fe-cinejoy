import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5dvgl_5TIycwn2te9WR7LSb7doNIeeEhUzaaK6lOZKTVj1E_8kKbqENuqQks0uBsOPP7lfBog2fPvaWaG2qyXroe-oNeJG_UVnvJULycxiTKDCroNEiVaYwhnWOzyyUvM0zMwYVJu890u9i9KTna4PzOLZxA-54Jojl-s8hvpRLE34kcLTBdhZOVH5f144UUrkQ3sm7n5R97InsArhguzXi-hKl3ehP_R_KHEHXqFRiiTyVvbmww0sKpu3pYqyh-D9hkZKWdjVEg')`,
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded">
                P (13+)
              </span>
              <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded border border-white/30">
                Hành động
              </span>
              <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded border border-white/30">
                Viễn tưởng
              </span>
              <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                <span className="material-symbols-outlined text-sm">star</span>{" "}
                9.2
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-lg">
              Godzilla x Kong: <br />
              <span className="text-primary">Đế Chế Mới</span>
            </h2>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-2 max-w-xl">
              Hai titan cổ đại Godzilla và Kong đụng độ trong một trận chiến
              hoành tráng khi con người làm sáng tỏ nguồn gốc của chúng và mối
              liên hệ với những bí ẩn của Đảo Đầu Lâu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="flex items-center justify-center gap-2 h-12 px-8 bg-primary hover:bg-red-700 text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1"
              >
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>
                Đặt vé ngay
              </Link>
              <button className="flex items-center justify-center gap-2 h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transition-all">
                <span className="material-symbols-outlined">play_circle</span>
                Xem Trailer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Movie Tabs Section */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 border-b border-gray-800 pb-2">
            <div className="flex gap-8">
              <button className="relative pb-4 text-xl sm:text-2xl font-bold text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-t-full transition-colors">
                Phim đang chiếu
              </button>
              <button className="relative pb-4 text-xl sm:text-2xl font-bold text-gray-400 hover:text-gray-200 transition-colors">
                Phim sắp chiếu
              </button>
            </div>
            <Link
              to="/movie"
              className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
            >
              Xem tất cả{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
            {/* Movie Card 1 */}
            <Link
              to="/movie/1"
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy8BkO1fU8oYLabC85AHygcH50qUX4-8JETDFicZaGMdZpcujAEBWzoYMCAiMZuqR2Tkulu_qyLdZ-cts2SBDjygHLv4RryCOpu8QVE5HwpHsLsMvvOf0noaoqTcieiYXHL_3qYE173VKk9IqmEIRA8JfMlDk2pPXMKFQnVxrzAECpvz38nx6YML7UQeaBCKmDSM1dFXEPacBbELI5c-88TITIflleVw2ZPtzkYnF5S1suW76FCKQvmXadIOsxr2A9L63VJBjPKPg')`,
                  }}
                ></div>
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded text-white text-xs font-bold border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] text-yellow-400">
                    star
                  </span>{" "}
                  8.9
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <button className="w-full py-2 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-colors mb-2 text-sm">
                    Mua vé
                  </button>
                  <button className="w-full py-2 bg-white/20 backdrop-blur text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm">
                    Chi tiết
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
                  Dune: Hành Tinh Cát 2
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">
                  Khoa học viễn tưởng
                </p>
              </div>
            </Link>

            {/* Movie Card 2 */}
            <Link
              to="/movie/2"
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXEcMbxEpf-3O37t7DAOsRwYBKK3XrwLISm48qN8ZVJOVqpiFA8HrKlGAMQXKsyRFgZYoIMACF1KopdH-ShYpE_vv9ytl572B57eYPtj57_4rK8UQTpdZ0J2j3Z5m69BbAgH_XoAvOKLIAyamQPfOwY6cOAgBydtgbU8mUjNAejjYHCHDVVeEMD98wNeoY58GjaVWymFE7Bw_jly7aa5VVbyz4InzPqyTdOboh5HGg8HWnflOKerXnY4tKncmsmuAcOE8gmxtyV6Y')`,
                  }}
                ></div>
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded text-white text-xs font-bold border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] text-yellow-400">
                    star
                  </span>{" "}
                  7.5
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <button className="w-full py-2 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-colors mb-2 text-sm">
                    Mua vé
                  </button>
                  <button className="w-full py-2 bg-white/20 backdrop-blur text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm">
                    Chi tiết
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
                  Kung Fu Panda 4
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">Hoạt hình, Hài</p>
              </div>
            </Link>

            {/* Movie Card 3 */}
            <Link
              to="/movie/3"
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtY_rIZI8KaW1YVuL5VMWq44KkDdNodUHm3V1UEJNxZgT2RAs7QINj5_BdbJ_1Ra4Cj4jByCLUUdSCccIWl1VZgXv5NJDxQpFZYVTI4J30D5EJuQo2J3iZkL4UcNBQosUB3LmSbiFoPxYYI6npOTuHvB9457Tuzx6gpK1j4Z4MWBdpgtOcNYnOarM7CZC8m1_SNnHzOp4OH3kx8HXvIO31fptf3AbfB8ygMhKyxElkXllLnsa51Z2wwS0t9zUPuUy7Jw9_XXGPc2U')`,
                  }}
                ></div>
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded text-white text-xs font-bold border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] text-yellow-400">
                    star
                  </span>{" "}
                  8.2
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <button className="w-full py-2 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-colors mb-2 text-sm">
                    Mua vé
                  </button>
                  <button className="w-full py-2 bg-white/20 backdrop-blur text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm">
                    Chi tiết
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
                  Mai
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">Tâm lý, Tình cảm</p>
              </div>
            </Link>

            {/* Movie Card 4 */}
            <Link
              to="/movie/4"
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsq1w4eOxu2wV625xQv5-N4edREAWFT0rYg6vOkMtYiVeIU-nV3S62omaDmjeAqXN3y8ONbUWP_U3-3jT68g-8aIQyJ9a_TInVOq8RNdm9Kdy3coxJWGd5Rw7BMUQy1Q60kvP99JloplY_NGsvoveN176bfI0KDiRWtqalLa1JymSLgDoNKuubYL1QTaze3XA7w-3cGlaBXD1Amvn-oEvSKfTP3DGcAADyCGzVh3R2mQ8lmeJYrBPBYOuhY31wNxMyNiakwhOgFTM')`,
                  }}
                ></div>
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded text-white text-xs font-bold border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] text-yellow-400">
                    star
                  </span>{" "}
                  7.8
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <button className="w-full py-2 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-colors mb-2 text-sm">
                    Mua vé
                  </button>
                  <button className="w-full py-2 bg-white/20 backdrop-blur text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm">
                    Chi tiết
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
                  Exhuma: Quật Mộ Trùng Ma
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">Kinh dị, Bí ẩn</p>
              </div>
            </Link>

            {/* Movie Card 5 */}
            <Link
              to="/movie/5"
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsY8zslSIy67Ox7svtGrUTwZQ8PjIkpJnh2MpZmYDC5TwXnob8XTc6z9xKILfp04V181OVX_H-HNqn508eyKXjB9NXS7iDjZwOWFsO50WRIqtJe1x93g5GBI_nH0wXU21UhAgSniWB3gQ8b3XXZZ0HW6fx9Ede8wx9RMfzxc14Lw4Kwf3pDitb3J2A8uwRT3d2I0cefETMmeUXBfwnllEtjzr_kL0J2gi8RobQzAqXL_06d4Tk69UCKNJGBebKXMLDiNa3JEM1wTQ')`,
                  }}
                ></div>
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded text-white text-xs font-bold border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] text-yellow-400">
                    star
                  </span>{" "}
                  6.9
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <button className="w-full py-2 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-colors mb-2 text-sm">
                    Mua vé
                  </button>
                  <button className="w-full py-2 bg-white/20 backdrop-blur text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm">
                    Chi tiết
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
                  Ghostbusters: Frozen Empire
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">Hài, Hành động</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Promotions Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl">
                local_activity
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Khuyến mãi &amp; Ưu đãi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Promo Card 1 */}
            <Link
              to="/promotion"
              className="group relative overflow-hidden rounded-xl bg-[#262626] shadow-md border border-gray-800 hover:border-primary/50 transition-all cursor-pointer"
            >
              <div
                className="w-full h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqbypn6sPcDYL-oAixgk2n8YuT1lhju7L5vGewJPQ0qHUBVv_AiQIsSLi66fMP1csr42wfMUeLmJr5amB47NP5ACa5AIYqNVENrJSMMrjC3MaQHJHDKVgAjMdp9zAcaRdgJoQqbYi1gjWWplL9P7qryLhOMhas4IYbWLTx_tmsFgVzhrvc10jbBleuzivwwBiYnwbNotyTuHLg2HGNjGQtNkl81It9uTWx6amN4qcaYaNwMOHg-W7R1FI4TUrME-CONb5mkHPuIog')`,
                }}
              ></div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Thành viên mới
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Giảm 50% Combo Bắp Nước
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Dành riêng cho khách hàng lần đầu đăng ký thành viên
                  CinemaHub.
                </p>
                <span className="text-xs font-medium text-gray-400">
                  Hết hạn: 31/12/2024
                </span>
              </div>
            </Link>

            {/* Promo Card 2 */}
            <Link
              to="/promotion"
              className="group relative overflow-hidden rounded-xl bg-[#262626] shadow-md border border-gray-800 hover:border-primary/50 transition-all cursor-pointer"
            >
              <div
                className="w-full h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGLj-r0saGIMjGr72W0xKGSlsBUDsagbLBqqwHLuK0DDM_ThMGp6ONNBmsmtG085egM246kQd8Im4Czw5xH3ULcFACkHXNh8CiJQbbukjzl4Qx3kLkqZgX5-MeKI9D-jo2Wi6AYnJglKIDtCI7xPBzhGpMA0hiCq9UpjccCLuk4z9gu2L-kDD7vbahjfd124BYj_WQVoyImlcjz1gKhTWtjf7ceZvwEmA1UsRdzojgGOh-inKNPg2JOG9K26YwuZlEJrEazoFGGsw')`,
                }}
              ></div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Happy Day
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Thứ 3 Vui Vẻ - Đồng Giá 50k
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Áp dụng cho mọi suất chiếu vào ngày thứ 3 hàng tuần tại mọi
                  cụm rạp.
                </p>
                <span className="text-xs font-medium text-gray-400">
                  Hàng tuần
                </span>
              </div>
            </Link>

            {/* Promo Card 3 */}
            <Link
              to="/promotion"
              className="group relative overflow-hidden rounded-xl bg-[#262626] shadow-md border border-gray-800 hover:border-primary/50 transition-all cursor-pointer"
            >
              <div
                className="w-full h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6DTwGyTmEX7ucSIev_PBKsYrMkJDOXaGG8i0KvQdffaNRvJd1lq9RjGYXPSfoqP98NK0MXgWRtjXwsqpYPCNWOqzNK5F8q2OzOnaTmx_A-QGCtxCgoiSGTQLy77BYX3YVF3WIt5OA5OUTTEU9CahYF-DCqwPrQ37NqhZL7YkF6t4WYPbFezts3QOrhbVLIql45Yc2ZcqnxvKU-kAfErDQmUUeFVwnRUx2KQ0ZmmizPa4fSdqdaKo3jPbAVe96H-N78V38O76__YQ')`,
                }}
              ></div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Học sinh - Sinh viên
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Ưu đãi U22 - Vé chỉ 45k
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Chương trình đặc biệt dành cho các bạn học sinh, sinh viên
                  dưới 22 tuổi.
                </p>
                <span className="text-xs font-medium text-gray-400">
                  Áp dụng T2 - T6
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* News / Blog Mini Section */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Tin Điện Ảnh</h2>
              <Link
                to="/news"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Xem tất cả
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {/* News Item 1 */}
              <Link
                to="/news"
                className="flex gap-4 group cursor-pointer items-start"
              >
                <div
                  className="w-32 h-20 sm:w-48 sm:h-28 rounded-lg bg-gray-800 bg-cover bg-center shrink-0 overflow-hidden"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeLNHis19sSdM92uOtUTNMiB57lkoRcnvvlTnN65gLySdSBxin8iOt-Udm8sJRusb9eOG-iXSR_Qs7GjPOXInwo7xyd9TLkcbMk6h3TYoFH3ItbEJVZYByo9iqfDvD38tSlabJrKdsfqx5LUz9Xq0gf99jz7fVjFYE1mcsLpw2r3qGDNDaC1bOn-5ocq2cqRkgfEW8nL96ypKNkLHwaXmfrHhDeI8sA6t5NEbF7WIOiy0_rM9LchigjN926p283PaR_025-E9-Tew')`,
                  }}
                ></div>
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    Review: Dune 2 - Kiệt tác điện ảnh không thể bỏ lỡ của năm
                    2024
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    Phần 2 của Dune không chỉ mở rộng quy mô câu chuyện mà còn
                    nâng tầm trải nghiệm thị giác lên một tầm cao mới...
                  </p>
                  <span className="text-xs text-gray-500 mt-2 block">
                    2 giờ trước
                  </span>
                </div>
              </Link>

              {/* News Item 2 */}
              <Link
                to="/news"
                className="flex gap-4 group cursor-pointer items-start"
              >
                <div
                  className="w-32 h-20 sm:w-48 sm:h-28 rounded-lg bg-gray-800 bg-cover bg-center shrink-0 overflow-hidden"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwvnofJcv9Tkr0kEMcNDSVWQBeLuMSWHWp5DpTV9wGQDFZXmrXlh0kBYXNFt2N0eYEoxj7SQc3CIjSUIqvAeSPX12ySHcPQIAr6tJ7UorfTAlVthfmSfHtb78-mGU9B5rN3z0ChV6Qq4J3OfbJe4sCHGA5ImyH5Hv6FQf4yp8zl51cqG8EDWjFpTZTOOnmTlvpuND8JkFQCi-_DiMHdf6lKieyFIYmgzhQ7vyBIDBA7dBzdW6NGiEGvt3KKquFnl7BsH9W7Z28RGg')`,
                  }}
                ></div>
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    Công bố dàn diễn viên chính thức cho dự án phim mới của
                    Marvel
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    Sau nhiều đồn đoán, cuối cùng Marvel Studios cũng đã chính
                    thức xác nhận những cái tên sẽ góp mặt...
                  </p>
                  <span className="text-xs text-gray-500 mt-2 block">
                    5 giờ trước
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Map/Location */}
          <div className="lg:col-span-1 bg-[#262626] rounded-xl p-6 border border-gray-800 h-fit">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>{" "}
              Tìm rạp gần bạn
            </h3>
            <div className="w-full h-40 bg-gray-700 rounded-lg mb-4 overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                300×300
              </div>
            </div>
            <select className="w-full bg-background-dark border-none rounded-lg text-sm text-white p-3 mb-3 focus:ring-1 focus:ring-primary">
              <option>TP. Hồ Chí Minh</option>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
            </select>
            <Link
              to="/theater"
              className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-colors text-sm flex items-center justify-center"
            >
              Tìm rạp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
