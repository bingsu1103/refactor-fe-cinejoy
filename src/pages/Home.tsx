const Home: React.FC = () => {
  return (
    <>
      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col items-center">
        {/* Breadcrumbs & Hero Area */}
        <div className="w-full relative">
          {/* Backdrop Image */}
          <div className="absolute inset-0 h-[500px] md:h-[600px] w-full overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-background-dark/40 z-10"></div>
            <img
              className="w-full h-full object-cover opacity-60 blur-sm"
              alt="Dark moody movie scene with red lighting abstract"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA6b9suL4nftborhsxovc3R3hVESZtMq1DK83-E66tCsUHKcMrIUVjmUvUNX_XeuBKenW3rA4cHUTapW20nxCM5cpBm1ilzr37gFBYhsiS50MTm7V9aSRMh_Hqamr5vgHrDxQ6cFQ8IHbseINxXaCWIofpLFz3KgfA_aBUuLS0gi9_i42vVoKMa0XLsMsxVco5_iT75O_Unh-kQ5pPiFjn1h0J8osfCfB5oWbgtmUjKGfEnEQOOTa0XmQmU7rOpqXLNdW4bgiVVnQ"
            />
          </div>

          <div className="layout-content-container max-w-[1200px] w-full mx-auto px-4 md:px-10 relative z-20 pt-4">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 py-4 mb-4">
              <a
                className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                href="#"
              >
                Trang chủ
              </a>
              <span className="text-gray-500 text-sm font-medium">/</span>
              <a
                className="text-gray-300 text-sm font-medium hover:text-white transition-colors"
                href="#"
              >
                Phim đang chiếu
              </a>
              <span className="text-gray-500 text-sm font-medium">/</span>
              <span className="text-white text-sm font-medium">The Batman</span>
            </div>

            {/* Hero Content: Poster & Info */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start pb-10">
              {/* Poster */}
              <div className="shrink-0 mx-auto md:mx-0 w-[240px] lg:w-[300px] aspect-[2/3] rounded-xl shadow-2xl overflow-hidden border border-white/10 group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Movie poster for The Batman showing a masked figure in rain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm333q6vyhagBlgDUIUGqhyrSnOsDKdIlHv4mbJy339wAm63LyPb6SwYVELW0Wy7CAqcWVzq0G7yNdVLULVvdbsg-9anfyF_-DbLO214OH_iCrVwJedcFn3tCSHVOPbuNWAskvZZxCQFK06RociiOMRlkLygDPIwUsMFEujtnCVcwWUvYwBZf-EDCmandkUVv15qKfcTU7UDb5en2PM9ZzR4Qv2yyN0McmtgJGIYxxUYwsOeSi_0fISDfOfIBKbbE80fXtR6oDD2c"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 pt-2 text-center md:text-left">
                <h1 className="text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight mb-4">
                  The Batman (2022)
                </h1>

                {/* Chips */}
                <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-white/10 bg-white/5 pl-4 pr-4 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      movie
                    </span>
                    <p className="text-white text-xs md:text-sm font-medium">
                      Hành động
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-white/10 bg-white/5 pl-4 pr-4 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      local_police
                    </span>
                    <p className="text-white text-xs md:text-sm font-medium">
                      Tội phạm
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-white/10 bg-white/5 pl-4 pr-4 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      schedule
                    </span>
                    <p className="text-white text-xs md:text-sm font-medium">
                      2h 55m
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-white/10 bg-white/5 pl-4 pr-4 backdrop-blur-sm">
                    <p className="text-white text-xs md:text-sm font-bold">
                      2D
                    </p>
                  </div>
                </div>

                {/* Rating & Actions */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="relative size-16 flex items-center justify-center rounded-full bg-surface-dark border-4 border-primary">
                      <span className="text-xl font-bold text-white">8.5</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-0.5 text-primary">
                        <span className="material-symbols-outlined text-[20px]">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px]">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px]">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px]">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[20px]">
                          star_half
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">12.5k đánh giá</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 h-12 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20 backdrop-blur-md">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                      Trailer
                    </button>
                    <button className="flex items-center gap-2 px-8 h-12 rounded-lg bg-primary hover:bg-red-600 text-white font-bold shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                      <span className="material-symbols-outlined">
                        confirmation_number
                      </span>
                      Đặt vé ngay
                    </button>
                  </div>
                </div>

                {/* Short Description for Hero */}
                <p className="text-gray-300 leading-relaxed max-w-2xl hidden md:block">
                  Batman mạo hiểm vào thế giới ngầm của Thành phố Gotham khi một
                  kẻ giết người tàn bạo để lại một dấu vết của các manh mối bí
                  ẩn. Khi bằng chứng bắt đầu dẫn đến gần nhà hơn và quy mô của
                  kế hoạch của thủ phạm trở nên rõ ràng, anh ta phải tạo ra các
                  mối quan hệ mới, vạch mặt kẻ thù và mang lại công lý.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="layout-content-container max-w-[1200px] w-full mx-auto px-4 md:px-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column (Main) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Synopsis */}
              <section>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2 border-l-4 border-primary pl-3">
                  Nội dung phim
                </h3>
                <div className="bg-surface-dark/50 p-6 rounded-xl border border-white/5">
                  <p className="text-gray-300 leading-7 text-justify">
                    Hai năm rình rập trên đường phố với tư cách là Người Dơi,
                    gieo rắc nỗi sợ hãi vào trái tim tội phạm, đã dẫn Bruce
                    Wayne sâu vào bóng tối của Thành phố Gotham. Với chỉ một vài
                    đồng minh đáng tin cậy - Alfred Pennyworth, Trung úy James
                    Gordon - giữa mạng lưới quan chức và những nhân vật cấp cao
                    thối nát của thành phố, người cảnh vệ đơn độc đã tự khẳng
                    định mình là hiện thân duy nhất của sự trả thù giữa đồng bào
                    của mình.
                    <br />
                    <br />
                    Khi một kẻ giết người nhắm vào giới thượng lưu của Gotham
                    bằng một loạt các âm mưu tàn bạo, một dấu vết của các manh
                    mối khó hiểu gửi Thám tử vĩ đại nhất thế giới vào một cuộc
                    điều tra vào thế giới ngầm, nơi anh gặp các nhân vật như
                    Selina Kyle / hay còn gọi là Catwoman, Oswald Cobblepot /
                    hay còn gọi là Penguin, Carmine Falcone và Edward Nashton /
                    hay còn gọi là The Riddler.
                  </p>
                </div>
              </section>

              {/* Cast & Crew */}
              <section>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2 border-l-4 border-primary pl-3">
                  Diễn viên
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Actor 1 */}
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface-dark/30 hover:bg-surface-dark transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
                    <div className="size-20 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <img
                        className="w-full h-full object-cover"
                        alt="Robert Pattinson headshot"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxOWdfIMjMt4GUJMf1E0U3DVpH521QC9syzKd26V02HqR2V7dDoo9ydZfcb_-Rdjpq6aH76KbGR58afEzNdLZ1cGmGJ33yhNcm3fkQnSEHcPJF8rIwNgoP6awgsgIzF7JY8wHIkQIJq9RgkGn1Z8CVEy2-T0RUtK3Rl2ItpQz-O0U8Zy3apXaM_C0TuGG6Ehc7UY6wHec3i08-vdhMNAXkGi9VMEt7lujfQVKmsmT9A3wOzRDYhjR7jVhH7fCIbuMxd3PUGkyFSyU"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium text-sm">
                        Robert Pattinson
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Bruce Wayne
                      </p>
                    </div>
                  </div>

                  {/* Actor 2 */}
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface-dark/30 hover:bg-surface-dark transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
                    <div className="size-20 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <img
                        className="w-full h-full object-cover"
                        alt="Zoe Kravitz headshot"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqtvRrKkXEi77dfSLpNtmn40IZ0huZpVl6kOvlkYvZzHXLtrXwc9GOY6AAeG4f1OOaVgeRX7RZciPGBrPoPe-VhfXdJXfoyzsm0tf2V8ED_Q7DV1bDHf_zMDvxqtpk18_ZEah2FWl-xbZG0zGPilCYCSBLlGMz0IGqUzeh6zseURrSY1-msFSN_QwaZCVgCo4uyVE07lwWR1z2wrXM3eGrwE8l0HWTqu6MoiugHR2Cg1h0aV9fmzfHszW8FXmfnSSq_unEitOSmeo"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium text-sm">
                        Zoë Kravitz
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Selina Kyle
                      </p>
                    </div>
                  </div>

                  {/* Actor 3 */}
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface-dark/30 hover:bg-surface-dark transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
                    <div className="size-20 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <img
                        className="w-full h-full object-cover"
                        alt="Paul Dano headshot"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBReKQMXiORkbms8J48ALCWjM8OqEV-mn2-OexOuJgF0JA0H2cdGzi1_0gi3AyhM9DG8Ca8GVDyfxrlhxEygqW0hd4AqODFWl5brC7n-KNqH8nOwCL02I68MBnOAMzWT_U0wy5w43ML6qjxzO8Upw_d88jzU0iczat4IhRdLYTJensJklDXu43giNNEf96bEUxYTTz8rmeK5UvFVWvUPZEhx609qpXi2dGQrOZnAXjNBe98s5_pesczHfSjewUWMXEWIfujgR3VU3g"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium text-sm">
                        Paul Dano
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        The Riddler
                      </p>
                    </div>
                  </div>

                  {/* Actor 4 */}
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface-dark/30 hover:bg-surface-dark transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
                    <div className="size-20 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <img
                        className="w-full h-full object-cover"
                        alt="Jeffrey Wright headshot"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT317Cil0VlPHBjYve32tdF7m5_bKbdwHyw1unbJE3lUoN1tg_bKKVvncp5mSeNofhrBTY4c7L34ceZ-dKrCfxQryxj4nZ4Wdhagh9XyoyGg4dGqAqVfx0UDlQ6RdLPlqzbz4wRKingajmZU3sfzLl_Uixs0G8ib3cB4kJPqUKIk4g64teQrUqCC5ic2tKhv1AfQUoaUG5fxK5fcKjExQVO5qYOMF2CmmO4FDXyV0OPXLkuM1LjhSxbpUCD1ecnA2T_yg0ci_-mNU"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium text-sm">
                        Jeffrey Wright
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        James Gordon
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Trailer */}
              <section>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2 border-l-4 border-primary pl-3">
                  Trailer
                </h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black relative group cursor-pointer">
                  <img
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                    alt="Trailer thumbnail showing batman in rain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAynl8-xmlktKETy2afeSSmgl6JWxL8Jq6NkwKBf4ix-c-0I6pFxtYO68laGVRwkZWFtmSVHLxsyTQO1yIHUp-5VEzRmytcDRJ8Nt5hJsB21-wTwsPtsQsVlcuT58dlQ3Mo4S3jA4ufFMUhaAZjNzMCBmug9bmzq_nEg0O2_WTGWrTg3D6m0VvXlCHMc6nvZ9jT72Nl1dgDGedZLm6-gZ9-0-knGmjkqBdKLxKDNencP6Rr7fKKjU-c57GPmdD_6MlFESBPQunTF98"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column (Sidebar Info) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Movie Details Card */}
              <div className="bg-surface-dark p-6 rounded-xl border border-white/5 flex flex-col gap-5">
                <h4 className="text-white text-lg font-bold border-b border-white/10 pb-2">
                  Thông tin chi tiết
                </h4>
                <div className="grid grid-cols-[100px_1fr] gap-y-4 text-sm">
                  <span className="text-gray-400 font-medium">Đạo diễn</span>
                  <span className="text-white font-medium hover:text-primary cursor-pointer">
                    Matt Reeves
                  </span>

                  <span className="text-gray-400 font-medium">Kịch bản</span>
                  <span className="text-white font-medium">
                    Matt Reeves, Peter Craig
                  </span>

                  <span className="text-gray-400 font-medium">Khởi chiếu</span>
                  <span className="text-white font-medium">04/03/2022</span>

                  <span className="text-gray-400 font-medium">Quốc gia</span>
                  <span className="text-white font-medium">Mỹ</span>

                  <span className="text-gray-400 font-medium">Ngôn ngữ</span>
                  <span className="text-white font-medium">Tiếng Anh</span>

                  <span className="text-gray-400 font-medium">Box Office</span>
                  <span className="text-white font-medium">$770.8 Triệu</span>
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="bg-surface-dark p-6 rounded-xl border border-white/5 flex flex-col gap-5">
                <h4 className="text-white text-lg font-bold border-b border-white/10 pb-2">
                  Đánh giá cộng đồng
                </h4>
                <div className="grid grid-cols-[20px_1fr_40px] items-center gap-y-3">
                  <p className="text-white text-sm font-normal leading-normal">
                    5
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#67323b]">
                    <div
                      className="rounded-full bg-[#ec1337]"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <p className="text-[#c9929b] text-sm font-normal leading-normal text-right">
                    65%
                  </p>

                  <p className="text-white text-sm font-normal leading-normal">
                    4
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#67323b]">
                    <div
                      className="rounded-full bg-[#ec1337]"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                  <p className="text-[#c9929b] text-sm font-normal leading-normal text-right">
                    20%
                  </p>

                  <p className="text-white text-sm font-normal leading-normal">
                    3
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#67323b]">
                    <div
                      className="rounded-full bg-[#ec1337]"
                      style={{ width: "8%" }}
                    ></div>
                  </div>
                  <p className="text-[#c9929b] text-sm font-normal leading-normal text-right">
                    8%
                  </p>

                  <p className="text-white text-sm font-normal leading-normal">
                    2
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#67323b]">
                    <div
                      className="rounded-full bg-[#ec1337]"
                      style={{ width: "2%" }}
                    ></div>
                  </div>
                  <p className="text-[#c9929b] text-sm font-normal leading-normal text-right">
                    2%
                  </p>

                  <p className="text-white text-sm font-normal leading-normal">
                    1
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#67323b]">
                    <div
                      className="rounded-full bg-[#ec1337]"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                  <p className="text-[#c9929b] text-sm font-normal leading-normal text-right">
                    5%
                  </p>
                </div>
                <button className="w-full mt-2 py-2.5 rounded-lg border border-primary/50 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
                  Viết đánh giá
                </button>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div
            className="mt-16 w-full bg-[#1a0e10] border border-white/5 rounded-2xl overflow-hidden"
            id="booking"
          >
            {/* Header with Tabs */}
            <div className="p-6 md:p-8 bg-[#2f161a] border-b border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  calendar_month
                </span>
                Lịch chiếu
              </h2>

              {/* Date Selector Scroll */}
              <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
                {/* Active Date */}
                <button className="flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-xl bg-primary text-white shadow-lg shadow-primary/20 shrink-0 transition-transform hover:scale-105">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Hôm nay
                  </span>
                  <span className="text-2xl font-bold">14</span>
                  <span className="text-xs opacity-80">T4</span>
                </button>

                {/* Inactive Dates */}
                <button className="flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-xl bg-[#482329] text-gray-400 hover:text-white hover:bg-[#5a2c33] shrink-0 transition-colors">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Tháng 10
                  </span>
                  <span className="text-2xl font-bold">15</span>
                  <span className="text-xs opacity-80">T5</span>
                </button>
                <button className="flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-xl bg-[#482329] text-gray-400 hover:text-white hover:bg-[#5a2c33] shrink-0 transition-colors">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Tháng 10
                  </span>
                  <span className="text-2xl font-bold">16</span>
                  <span className="text-xs opacity-80">T6</span>
                </button>
                <button className="flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-xl bg-[#482329] text-gray-400 hover:text-white hover:bg-[#5a2c33] shrink-0 transition-colors">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Tháng 10
                  </span>
                  <span className="text-2xl font-bold">17</span>
                  <span className="text-xs opacity-80">T7</span>
                </button>
                <button className="flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-xl bg-[#482329] text-gray-400 hover:text-white hover:bg-[#5a2c33] shrink-0 transition-colors">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Tháng 10
                  </span>
                  <span className="text-2xl font-bold">18</span>
                  <span className="text-xs opacity-80">CN</span>
                </button>
              </div>
            </div>

            {/* Cinema List */}
            <div className="flex flex-col divide-y divide-white/5">
              {/* Cinema Item 1 */}
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 hover:bg-white/5 transition-colors">
                <div className="flex items-start gap-4 md:w-[250px] shrink-0">
                  <div className="size-12 rounded-lg bg-white p-1 shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      alt="CGV Logo placeholder"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNOaQGv_v-_PVXnixx7_9bquyNJz9QPAcpPoJfVF9F7wKVoLcRUcEqYAI_OLEYqBD0Ce1gM9H6lzNttwENZbYKUM3ZTSgwxYfVjRS05enHUQQ5G2feBnQ8Krn4siH2FQeQYNeYvwEhwaMyZYZmq81PQ8P4jmCF3jbTRoeE66m01gejlFCNxdKbwO9sU__me119JDBpzC2iJZT1c0oOEdPQGv0hgFggVz13-rHSLzVz3Pq53d1I5MChAjGxN2ZZK5J2yALEmAXAMHg"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">CGV Vincom</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      L3-Vincom Center, 72 Lê Thánh Tôn, Q.1
                    </p>
                    <a
                      className="text-primary text-xs font-medium mt-2 inline-block hover:underline"
                      href="#"
                    >
                      Bản đồ
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-3 font-medium">
                    2D Phụ đề
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                      <span className="block text-white font-bold text-lg group-hover:text-primary">
                        09:30
                      </span>
                      <span className="text-[10px] text-gray-500 block text-center">
                        ~12:25
                      </span>
                    </button>
                    <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                      <span className="block text-white font-bold text-lg group-hover:text-primary">
                        11:15
                      </span>
                      <span className="text-[10px] text-gray-500 block text-center">
                        ~14:10
                      </span>
                    </button>
                    <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                      <span className="block text-white font-bold text-lg group-hover:text-primary">
                        13:45
                      </span>
                      <span className="text-[10px] text-gray-500 block text-center">
                        ~16:40
                      </span>
                    </button>
                    <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                      <span className="block text-white font-bold text-lg group-hover:text-primary">
                        19:20
                      </span>
                      <span className="text-[10px] text-gray-500 block text-center">
                        ~22:15
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Cinema Item 2 */}
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 hover:bg-white/5 transition-colors">
                <div className="flex items-start gap-4 md:w-[250px] shrink-0">
                  <div className="size-12 rounded-lg bg-white p-1 shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      alt="Lotte Cinema Logo placeholder"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkDgoPPaz5nLH_thmRKHdaBiGUM2dOQwh5veK0ciYKSEH9Thl_FimNoDXbZwaZm4_byZas2IV9r58NL95ll2x7cPvcDRXwbKZloaDkdbKMe-HbtYI3eRZ9HsL-SxUR5cjhB8wYlWDdP5vnrR5rvBwHmNIQ7Kk4ddzSfBZfXFvcHH-0YFUI99UZpJ6yNsEZvNLeldneK8pHBnZ0FRiWiBkcOJ032QMR_rdcahCCDugBgEYOBQf1EKtA4lxIPaCJ0r-WTYRnntSbbDY"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Lotte Cinema Nowzone
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Tầng 5, TTTM Nowzone, 235 Nguyễn Văn Cừ, Q.1
                    </p>
                    <a
                      className="text-primary text-xs font-medium mt-2 inline-block hover:underline"
                      href="#"
                    >
                      Bản đồ
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-3 font-medium">
                    2D Phụ đề
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                      <span className="block text-white font-bold text-lg group-hover:text-primary">
                        10:00
                      </span>
                      <span className="text-[10px] text-gray-500 block text-center">
                        ~12:55
                      </span>
                    </button>
                    <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                      <span className="block text-white font-bold text-lg group-hover:text-primary">
                        14:30
                      </span>
                      <span className="text-[10px] text-gray-500 block text-center">
                        ~17:25
                      </span>
                    </button>
                    <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                      <span className="block text-white font-bold text-lg group-hover:text-primary">
                        21:00
                      </span>
                      <span className="text-[10px] text-gray-500 block text-center">
                        ~23:55
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Cinema Item 3 */}
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 hover:bg-white/5 transition-colors">
                <div className="flex items-start gap-4 md:w-[250px] shrink-0">
                  <div className="size-12 rounded-lg bg-white p-1 shrink-0">
                    <img
                      className="w-full h-full object-contain"
                      alt="BHD Star Logo placeholder"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoWxjUU5wTF8znveENCAw67JYWJp4ihDYybdTP58K5mPwbB6s7XC-wU1c_vI5YPqyacmPa_Oz6417jPBzKi3M0zmHgwZBqhd0AkDfyGyemAsY0s_R9YrjClBTqAhuArGWwbW9nMuIedW6-wGhMCPoXrdXYxANyKNc73kMdWhJZsxES4JvTF4yAwZ8h7hPPyQCe-oBJG7PJPQvcCDR9H1wr3dLBMsby_4O5r_iXr7MNjZW0s3QfRaTQcZNSNS1QnL7Cet1-lKd1mIg"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      BHD Star Bitexco
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Lầu 3 &amp; 4, TTTM ICON 68, 2 Hải Triều, Q.1
                    </p>
                    <a
                      className="text-primary text-xs font-medium mt-2 inline-block hover:underline"
                      href="#"
                    >
                      Bản đồ
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  {/* IMAX Row */}
                  <div className="mb-4">
                    <p className="text-primary text-sm mb-3 font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">
                        theaters
                      </span>
                      IMAX 3D
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button className="group relative px-6 py-2 rounded-lg border border-primary/30 bg-[#2f161a] hover:bg-primary transition-all">
                        <span className="block text-white font-bold text-lg">
                          19:00
                        </span>
                        <span className="text-[10px] text-primary group-hover:text-white block text-center">
                          ~21:55
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Standard Row */}
                  <div>
                    <p className="text-gray-400 text-sm mb-3 font-medium">
                      2D Lồng tiếng
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button className="group relative px-6 py-2 rounded-lg border border-gray-700 bg-[#221114] hover:border-primary hover:bg-[#2f161a] transition-all">
                        <span className="block text-white font-bold text-lg group-hover:text-primary">
                          16:15
                        </span>
                        <span className="text-[10px] text-gray-500 block text-center">
                          ~19:10
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
