const Theater: React.FC = () => {
  return (
    <main className="flex-1 px-4 py-8 md:px-10 lg:px-40">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        {/* Page Heading & Search Section */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Hệ thống rạp chiếu
            </h1>
            <p className="text-[#c9929b] text-base font-normal">
              Tìm rạp gần bạn, xem lịch chiếu và đặt vé ngay
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <label className="flex h-12 w-full items-center overflow-hidden rounded-xl bg-[#482329] ring-1 ring-white/5 focus-within:ring-primary/50 transition-all">
                <div className="flex h-full w-12 items-center justify-center text-[#c9929b]">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="h-full w-full border-none bg-transparent px-2 text-white placeholder-[#c9929b]/70 focus:ring-0 focus:outline-none text-base"
                  placeholder="Tìm kiếm rạp theo tên..."
                />
              </label>
            </div>

            {/* Toggle Map View Button */}
            <button className="flex h-12 items-center gap-2 rounded-xl bg-[#482329] px-6 text-white hover:bg-[#5a2d35] ring-1 ring-white/5 transition-colors">
              <span className="material-symbols-outlined text-[20px]">map</span>
              <span className="font-medium text-sm whitespace-nowrap">
                Bản đồ
              </span>
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4">
            {/* Location Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-sm font-bold text-[#c9929b]">
                Khu vực:
              </span>
              <button className="group flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-white ring-1 ring-white/10 transition-all">
                <span className="text-sm font-bold">Tất cả</span>
              </button>
              <button className="group flex h-9 items-center gap-2 rounded-lg bg-[#482329] px-4 text-white ring-1 ring-white/5 hover:bg-[#5a2d35] transition-all">
                <span className="text-sm font-medium">Hà Nội</span>
              </button>
              <button className="group flex h-9 items-center gap-2 rounded-lg bg-[#482329] px-4 text-white ring-1 ring-white/5 hover:bg-[#5a2d35] transition-all">
                <span className="text-sm font-medium">TP. Hồ Chí Minh</span>
              </button>
              <button className="group flex h-9 items-center gap-2 rounded-lg bg-[#482329] px-4 text-white ring-1 ring-white/5 hover:bg-[#5a2d35] transition-all">
                <span className="text-sm font-medium">Đà Nẵng</span>
              </button>
              <button className="group flex h-9 items-center gap-2 rounded-lg bg-[#482329] px-4 text-white ring-1 ring-white/5 hover:bg-[#5a2d35] transition-all">
                <span className="text-sm font-medium">Cần Thơ</span>
              </button>
            </div>

            {/* Brand Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-sm font-bold text-[#c9929b]">
                Hệ thống:
              </span>
              <button className="flex h-9 items-center rounded-lg bg-primary/10 border border-primary/40 px-4 text-primary transition-all">
                <span className="text-sm font-bold">CGV Cinemas</span>
              </button>
              <button className="flex h-9 items-center rounded-lg bg-[#482329] px-4 text-[#c9929b] hover:text-white hover:bg-[#5a2d35] transition-all">
                <span className="text-sm font-medium">Lotte Cinema</span>
              </button>
              <button className="flex h-9 items-center rounded-lg bg-[#482329] px-4 text-[#c9929b] hover:text-white hover:bg-[#5a2d35] transition-all">
                <span className="text-sm font-medium">Galaxy Cinema</span>
              </button>
              <button className="flex h-9 items-center rounded-lg bg-[#482329] px-4 text-[#c9929b] hover:text-white hover:bg-[#5a2d35] transition-all">
                <span className="text-sm font-medium">BHD Star</span>
              </button>
            </div>
          </div>
        </section>

        {/* Cinema List Grid */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {/* Card 1 - CGV Vincom Đồng Khởi */}
          <article className="group flex flex-col overflow-hidden rounded-2xl bg-[#2a171a] border border-[#482329] hover:border-primary/50 transition-all shadow-xl">
            {/* Cinema Header */}
            <div className="flex items-start justify-between gap-4 p-5">
              <div className="flex gap-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-xl bg-white p-1">
                  <img
                    alt="CGV Logo"
                    className="h-full w-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2rXgOFhh_1FbA9sketLetIqBiuDmeDpu6fasicFhsNd-HpJxAnxVrjB8qI28G_A2Lmx-KFAXdUE3bt38h-aJG9xMmEsIe6HOSJV6zOtelwKUlnCc2Swl1CyLubaBTKKO2jpPSVWEnfZtqVQJaV9MtCOSPo1jhW0qauTcvp_TDuCPie1iXO3v9TIExh6xBi9UXIG82ry9825abs1Td5vu8Twxou5SubjrAC88zWi3NRjtNBNx-oDplf0CUgwWWOw_hh93qN8xbHJw"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                    CGV Vincom Đồng Khởi
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#c9929b]">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    <p className="text-sm font-medium line-clamp-1">
                      Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, P. Bến
                      Nghé, Q.1
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1 rounded bg-[#3a1d21] px-2 py-0.5 text-xs font-medium text-primary">
                      <span className="material-symbols-outlined text-[12px]">
                        near_me
                      </span>{" "}
                      1.2 km
                    </span>
                    <div className="flex gap-0.5">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star_half
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="hidden sm:flex size-10 items-center justify-center rounded-full bg-[#482329] text-white hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">
                  favorite_border
                </span>
              </button>
            </div>

            <div className="h-px bg-[#482329] mx-5"></div>

            {/* Now Showing Section */}
            <div className="flex flex-col gap-3 p-5 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#c9929b]">
                Suất chiếu sắp tới
              </h4>

              {/* Movie Item 1 */}
              <div className="flex gap-4">
                <div className="w-16 shrink-0 overflow-hidden rounded-lg aspect-[2/3]">
                  <img
                    alt="Dune Movie Poster"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc4vcqa2ChZTkA1XbnUW3_M6t_NW44moDCjPUq1_JMbjUYPbqK0ttMxjIU-J4QBZiFYx3vlm88e0u6Lttz4vf58dWj5g7idPzPpKBYMUSZ2qkS7omD9PWwDnxyYVmZL8TL1xyC0jUu4TYdQPpAkVcIqT49fDYxoFU5Pxr7QJhTMXXNoNNFBMJukTU0jl52c6HmW6agOVWeXcJBuLSLiUX3urnJh1mvOd-N627Qqrz6hSqi3vngwFmoat5gUFK7XUD6KMV4_n2WTZ8"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h5 className="text-base font-bold text-white">
                    Dune: Hành Tinh Cát - Phần 2
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      19:30
                    </button>
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      20:15
                    </button>
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      21:45
                    </button>
                  </div>
                </div>
              </div>

              {/* Movie Item 2 */}
              <div className="flex gap-4 mt-2">
                <div className="w-16 shrink-0 overflow-hidden rounded-lg aspect-[2/3]">
                  <img
                    alt="Kung Fu Panda Poster"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfX4RJPN7sSIzf9CfYZq2fEljwSDq-HMFXCcCoRj_pW3xfMeHG-v7zablYaFUrRr4sXLMt6OPvZci_uUxqPEPCAGgBW0DJMnz4pHgEnNJatLLf9urP145LL1nnH66WHmg6fTeeYk5YxHIjj091uJnOAHpAYbWVoP2Hk3m01l9FM7qWUVIEzMKE86Z42d2OcaSj7zGv28WCL25XNSPq7mp-Nq25w-zwizwsDBDkCzf21HyINKKCvcX3WdUe-BwGTFa-W6oxVYBAQPU"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h5 className="text-base font-bold text-white">
                    Kung Fu Panda 4
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      18:45
                    </button>
                    <button className="rounded px-3 py-1.5 border border-[#482329] text-sm font-medium text-[#c9929b]/50 cursor-not-allowed">
                      20:00 (Hết)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-auto flex items-center justify-between border-t border-[#482329] bg-[#221114]/50 px-5 py-3">
              <a
                className="text-sm font-medium text-[#c9929b] hover:text-white transition-colors"
                href="#"
              >
                Xem bản đồ
              </a>
              <button className="flex items-center gap-1 text-sm font-bold text-primary hover:text-red-400 transition-colors">
                Xem chi tiết rạp{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>

          {/* Card 2 - Lotte Cinema Diamond */}
          <article className="group flex flex-col overflow-hidden rounded-2xl bg-[#2a171a] border border-[#482329] hover:border-primary/50 transition-all shadow-xl">
            {/* Cinema Header */}
            <div className="flex items-start justify-between gap-4 p-5">
              <div className="flex gap-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-xl bg-white p-1">
                  <img
                    alt="Lotte Logo"
                    className="h-full w-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5andnBUYsyS5rVcxf8suZ514bhdpYUQty7eUdWmP6FEf_inIdki9a6vqY6dogmSBZkB6FNnXx0uVyvTA9kpXOi5dyY6SnttA9DQHlETFJ1SEqIfi4Azq4Ag351MvlO0Q2O9dO2Z9g3QQUeVTiPQN6SWI_LyHfmiztpW-Dto-vbXn40AnGtMXqAkvsknCax0QZoGyjkwi0b7SHezpwd2y51TuVzGZJxCosOaOi9mBjxMnNTVyDZgjZX0uoIv6eXwiUXlRKtqywbpk"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                    Lotte Cinema Diamond
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#c9929b]">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    <p className="text-sm font-medium line-clamp-1">
                      Tầng 13, Diamond Plaza, 34 Lê Duẩn, Q.1
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1 rounded bg-[#3a1d21] px-2 py-0.5 text-xs font-medium text-primary">
                      <span className="material-symbols-outlined text-[12px]">
                        near_me
                      </span>{" "}
                      2.5 km
                    </span>
                    <div className="flex gap-0.5">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-[#482329]">
                        star
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="hidden sm:flex size-10 items-center justify-center rounded-full bg-[#482329] text-white hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">
                  favorite_border
                </span>
              </button>
            </div>

            <div className="h-px bg-[#482329] mx-5"></div>

            {/* Now Showing Section */}
            <div className="flex flex-col gap-3 p-5 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#c9929b]">
                Suất chiếu sắp tới
              </h4>

              {/* Movie Item 1 */}
              <div className="flex gap-4">
                <div className="w-16 shrink-0 overflow-hidden rounded-lg aspect-[2/3]">
                  <img
                    alt="Mai Movie Poster"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoTPDS2PVrlqxdQN_agvdLJxImG78iphGscxF07cO4ETrU5waCG5fg-LJ00yjzQ26GDm7KX9cH1_VzIGBUIu0e452SObb0sKUbWBl9egSYI0g4O8m05aGivjFzQ8lPOyROEsdTqyn5nLl5t5DzwX6l-0iMsd4Qre845kk1-FxM25L05-Ds1oivWvulo6zHZjbBfgmSHfyLPgMhtO3MN9F-ofg9K5-a6FCrPCiLCxVJ1qkrx0OOjmF-1VBOcq2P74ww2FSXCPOtNv0"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h5 className="text-base font-bold text-white">Mai</h5>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      19:00
                    </button>
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      21:30
                    </button>
                  </div>
                </div>
              </div>

              {/* Movie Item 2 */}
              <div className="flex gap-4 mt-2">
                <div className="w-16 shrink-0 overflow-hidden rounded-lg aspect-[2/3]">
                  <img
                    alt="Ghostbusters Poster"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFHgdEhBgc3n8Gv-Fnddj1oIUl6I8fvUAml_eP3ecn7HXiPSXq8mylleTReZK7Y10EvQDgoLWainJFlLozjjDcZWRBfpDzXBo8jNb-A5ovHzhXby3NN6obcLVpIlpYrePY1urrVxFOsCtRMf-n9bDq6y9DRPobALJ9lQZMbpxqp5WnwuyM5qHf0jvBmWQCv3gvB878nQwrZAWM1-7eRfXLNKl4eSyhq0_0uvfMYPTY6SQg810ribIlIJmRWomngpyjzModoYpvjOk"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h5 className="text-base font-bold text-white">
                    Biệt Đội Săn Ma
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      20:45
                    </button>
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      23:00
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-auto flex items-center justify-between border-t border-[#482329] bg-[#221114]/50 px-5 py-3">
              <a
                className="text-sm font-medium text-[#c9929b] hover:text-white transition-colors"
                href="#"
              >
                Xem bản đồ
              </a>
              <button className="flex items-center gap-1 text-sm font-bold text-primary hover:text-red-400 transition-colors">
                Xem chi tiết rạp{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>

          {/* Card 3 - Galaxy Nguyễn Du */}
          <article className="group flex flex-col overflow-hidden rounded-2xl bg-[#2a171a] border border-[#482329] hover:border-primary/50 transition-all shadow-xl">
            {/* Cinema Header */}
            <div className="flex items-start justify-between gap-4 p-5">
              <div className="flex gap-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-xl bg-white p-1">
                  <img
                    alt="Galaxy Logo"
                    className="h-full w-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWaThBYpQPeMTqHdtt7OW51ZTYIGIfcg2v04qsdzFVQ3bOE-er1Uv27uIdwFhpnJ8puy_cjr4JkbCyvPL-OWcQDmLnasj_CUh0W4zzgj9Y8WoZoCq_odtwTQ5MVZO661KVvMeQtLvf7xc-l3-6ks1OLYXcvIjCG_EMKEPLYUlOtb6wtcJ0B9NaC35Dy-O22QCQxntnIXtKfvV5v598wrQfMqEqX06UKadhe4fBQ31gSY4PxnOOHIfXc_5UVMEPMVh7UYQDvSzho-w"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                    Galaxy Nguyễn Du
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#c9929b]">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    <p className="text-sm font-medium line-clamp-1">
                      116 Nguyễn Du, Quận 1, TP.HCM
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1 rounded bg-[#3a1d21] px-2 py-0.5 text-xs font-medium text-primary">
                      <span className="material-symbols-outlined text-[12px]">
                        near_me
                      </span>{" "}
                      0.8 km
                    </span>
                    <div className="flex gap-0.5">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="hidden sm:flex size-10 items-center justify-center rounded-full bg-[#482329] text-white hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">
                  favorite_border
                </span>
              </button>
            </div>

            <div className="h-px bg-[#482329] mx-5"></div>

            {/* Now Showing Section */}
            <div className="flex flex-col gap-3 p-5 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#c9929b]">
                Suất chiếu sắp tới
              </h4>

              {/* Movie Item 1 */}
              <div className="flex gap-4">
                <div className="w-16 shrink-0 overflow-hidden rounded-lg aspect-[2/3]">
                  <img
                    alt="Godzilla Poster"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBShLhWORVmjIOiI8q5_ul8LWlaUCrpN-XWdkTikmjsvRHA7QGy79f2NVG9Z0_z6_UQLxEIm7AIZ6vVBKJkIOWV01Yq6VHDiXxutFu86-nUYh_mbG0RtxalQAAFSlCWUV3gLnZO8_nyz7Emh5_mfQ6Mal7gJQyFDgKPC0Qm3F1o5TlMFq4xaBvUkzAohmx_tysp9ZV6KKHMURIHeRXKqoS4XJZ24xXFiJBUhCX96ae-2Aqdb91ljDb-9ma53X567NCBkQrZO2yMp9U"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h5 className="text-base font-bold text-white">
                    Godzilla x Kong: Đế Chế Mới
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      18:15
                    </button>
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      20:30
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-auto flex items-center justify-between border-t border-[#482329] bg-[#221114]/50 px-5 py-3">
              <a
                className="text-sm font-medium text-[#c9929b] hover:text-white transition-colors"
                href="#"
              >
                Xem bản đồ
              </a>
              <button className="flex items-center gap-1 text-sm font-bold text-primary hover:text-red-400 transition-colors">
                Xem chi tiết rạp{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>

          {/* Card 4 - BHD Star Bitexco */}
          <article className="group flex flex-col overflow-hidden rounded-2xl bg-[#2a171a] border border-[#482329] hover:border-primary/50 transition-all shadow-xl">
            {/* Cinema Header */}
            <div className="flex items-start justify-between gap-4 p-5">
              <div className="flex gap-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-xl bg-white p-1">
                  <img
                    alt="BHD Star Logo"
                    className="h-full w-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVa4f-8zmJHKq6ilLzIyTE0Horv85SmST40gwKtbtpxnp5bAPln3rXuxxvzH36Q9Kao6dTumZT2H7EJ0fvETI9hg37uSepqaveja7zadBLnUTKu4-W1WbZ40SMv12F8faDodjHtp7FtEvtYsrbqg5HLTBLrAZBUZNK79ZWrknjxyEcM-HX7dqE_axnJqn8YDnTpZS_snUCWOCNHjY8y2KQe3wYFfEKqb7_NLPmxZxe0Pn7Asbb6b-3Ok0qiTmHPa4CNXNW0D7CeJU"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                    BHD Star Bitexco
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#c9929b]">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    <p className="text-sm font-medium line-clamp-1">
                      Tầng 3 &amp; 4, Bitexco ICON 68, 2 Hải Triều, Q.1
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1 rounded bg-[#3a1d21] px-2 py-0.5 text-xs font-medium text-primary">
                      <span className="material-symbols-outlined text-[12px]">
                        near_me
                      </span>{" "}
                      1.5 km
                    </span>
                    <div className="flex gap-0.5">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-yellow-500">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-[#482329]">
                        star
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="hidden sm:flex size-10 items-center justify-center rounded-full bg-[#482329] text-white hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">
                  favorite_border
                </span>
              </button>
            </div>

            <div className="h-px bg-[#482329] mx-5"></div>

            {/* Now Showing Section */}
            <div className="flex flex-col gap-3 p-5 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#c9929b]">
                Suất chiếu sắp tới
              </h4>

              {/* Movie Item 1 */}
              <div className="flex gap-4">
                <div className="w-16 shrink-0 overflow-hidden rounded-lg aspect-[2/3]">
                  <img
                    alt="Exhuma Poster"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj8ueu_BImKs1qBMzSKB_3jlUay7690fDP6wGKiOoSl-iix-57N38fNXC5y1E_ycOWw7_4KxTDfOUEpuj_4LwpYhZOQogmMm51xO0HHA-z7PRuUTM46oRcQpCbw7bz9mXwnLDi7IAPfk82pxgN0KhCUBOVlQJYZXe2uMUTfyru9gr2dVUgUAqwmTakz7Fo3_1tDXN3XMiZTdxnGlMoA0o_HocrP-IcsxZPCjUSVdrUaQJoT4WfF6eMPX-GTakyUutPOLFBIPWz24o"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h5 className="text-base font-bold text-white">
                    Quật Mộ Trùng Ma
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      19:10
                    </button>
                    <button className="rounded px-3 py-1.5 bg-[#482329] text-sm font-medium text-white hover:bg-primary transition-colors">
                      21:50
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-auto flex items-center justify-between border-t border-[#482329] bg-[#221114]/50 px-5 py-3">
              <a
                className="text-sm font-medium text-[#c9929b] hover:text-white transition-colors"
                href="#"
              >
                Xem bản đồ
              </a>
              <button className="flex items-center gap-1 text-sm font-bold text-primary hover:text-red-400 transition-colors">
                Xem chi tiết rạp{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        </section>

        {/* Pagination / Load More */}
        <div className="flex justify-center py-4">
          <button className="flex items-center gap-2 rounded-xl bg-[#482329] px-8 py-3 text-white transition-colors hover:bg-[#5a2d35]">
            <span className="font-bold">Xem thêm 4 rạp khác</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Theater;
