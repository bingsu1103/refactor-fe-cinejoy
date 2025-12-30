const Movie: React.FC = () => {
  return (
    <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-10 py-6 space-y-10">
      {/* Filters (Chips) */}
      <section className="w-full">
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2">
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/25 transition-transform active:scale-95">
            Tất cả
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#482329] text-gray-200 hover:bg-[#5a2d35] text-sm font-medium transition-colors">
            Hành động
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#482329] text-gray-200 hover:bg-[#5a2d35] text-sm font-medium transition-colors">
            Tình cảm
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#482329] text-gray-200 hover:bg-[#5a2d35] text-sm font-medium transition-colors">
            Kinh dị
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#482329] text-gray-200 hover:bg-[#5a2d35] text-sm font-medium transition-colors">
            Hoạt hình
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#482329] text-gray-200 hover:bg-[#5a2d35] text-sm font-medium transition-colors">
            Khoa học viễn tưởng
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#482329] text-gray-200 hover:bg-[#5a2d35] text-sm font-medium transition-colors">
            Tài liệu
          </button>
        </div>
      </section>

      {/* Section 1: Phim đang chiếu */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            Phim đang chiếu
          </h2>
          <a
            className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center gap-1"
            href="#"
          >
            Xem tất cả{" "}
            <span className="material-symbols-outlined text-lg">
              chevron_right
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {/* Movie Card 1 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBifscle3J7bc41HHGvsX-PJhh4179LG6lcNO_AjKqaCLlrEx9xu8dXkQbuN6k-DoTfwn7wI9NKPYUkXoD4rm2irx1IySIzMl3UbELoDaOHeG5SA7qHAAbddGsi2A7392rWQEOijQBOfyehsaNAj-vU5jExlwa8_Z3RWlSW17xwv8b6rwhaUfA2Zx1b2y6HgH1BaRMUkyIfr6NGeaZaS5VUk9hvUxuPZrUk5V7oaLgqTPeclI1Ime8GvIS-8w0kVIh7WYmDYNOOhE8')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                8.5
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Dune: Hành tinh cát
              </h3>
              <p className="text-[#c9929b] text-sm">2024 • 2h 46m</p>
            </div>
          </div>

          {/* Movie Card 2 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRTVVGOB--v7ojkR0G_QgybCH0mSgGtTkdzoOEFgFI7kDZMFsx4Zck5TfP_prfF-O4hbTLleJYio2V90Kh7s7KB8o3ERNODhBaabiXFR2Yxp2u-YTSVQYVbYH31sH-zwyT4_EzyrsaokaSI1bqn4HQ5Zp1jAVk07N4ivmU1DjocsCapQcEs-7mVqJmDQjOh2UgjrdKteZumF-iXjM-aSkjrMmUFtIll2yG7t5wETdwzUifNGLw-WUOdC7YbBu1whEnL6j8ZiITbjo')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                9.0
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Oppenheimer
              </h3>
              <p className="text-[#c9929b] text-sm">2023 • 3h 00m</p>
            </div>
          </div>

          {/* Movie Card 3 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUbdfsw-JfzZW4-PFQe9IBOeqEeIPj3mLgOecDE7Q6VFsOmef_mxwYYR8DYhoZS08mauGf6GMxsUSblVMLwSE2ahPt-uFYvx9RRvMyKMUau3w3Q2GOCvIjCHnfGK5OVT3oaf4rpvQxTpYrMCS9OdwSmo8Kq9GJyam6Aqm5__sJp5l_DSONCQUMjA0SZ5cka3N07NBuAKCW4IC6QWSe_isKdMDpUuH6lD_bGUgvOhhJUT2NsrtelPkmikGObm8n3Ok2XN3vxIPGijM')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                7.2
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Mai
              </h3>
              <p className="text-[#c9929b] text-sm">2024 • 2h 11m</p>
            </div>
          </div>

          {/* Movie Card 4 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5NJlM0WyqjYN6uVzMgM1tkuCQnjSJnvVtbp9QU5HLzEEJjpFz9xpgmmVayimRj_yF1QEUlv_N7gjl0NcCenClexwbNyIOerZnJxkxie1DQQbORbwnYO65QJE4ZA6mTLzIxCKdBI0sxopmC8Q2Z4PIJqcEkSJ5UZ2X33QlUs3eCS-CYq2hieaNSvwExh3R4qa14fxY3aBZMAU0q9PQuoOx4OGSh9K-H7XFj-lLAHprD2hmJ0sDkVeRgAMA3jwprhZKXBZXokPLvFU')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                8.8
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Đào, Phở và Piano
              </h3>
              <p className="text-[#c9929b] text-sm">2024 • 1h 40m</p>
            </div>
          </div>

          {/* Movie Card 5 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7wmMRzBlqLIdI_HADsw8K1PSmWVZisN-XCobxZM913C1lv3_Kdnob-H9GhuFtDmS0HwnIZkORuV4JzXS_-ChJwYvlivmP4W93tf_uQ271eK2Oxm5rfYogLXIQm19L-6tllrIS3YTmTjxF00yykTUY7KUxHN-EBoaXnzHlOvZiUoVxVm-R_QEATsKmMaGMbkLZ0Zd-41CiAm9HfbEYdkgX9Z3mstB_ch3WdatCCKAk9tHNHre7LewF0Cxa05NSCqp2_AQ1WPe6rPY')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                6.5
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Godzilla x Kong
              </h3>
              <p className="text-[#c9929b] text-sm">2024 • 1h 55m</p>
            </div>
          </div>

          {/* Movie Card 6 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDunSz3IyH2_w2wvsQwhq1DEUtPaLudZ1Ms8HxTkoxXCHpZ_osdynByUHBMvufee_gGuum_vpu54egUqAASrGuUiA2H2Rj23tRgUCbPocDKEHZz1xGk5LjvsUIZNOtycsnbzu9PM_jwPQSD_wh61iCkVcNuTumalVZ7qoyAIdur1nJOY2NMja6p_lz4G3pgFKLIduYr66mGGw_ddktvGqNRi-z73HXSRo4VXs61Qu2X5xPvU7vK7LyonicjkaP8xbRvLvrPXBINxoM')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                7.0
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Kung Fu Panda 4
              </h3>
              <p className="text-[#c9929b] text-sm">2024 • 1h 34m</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Phim sắp chiếu */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            Phim sắp chiếu
          </h2>
          <a
            className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center gap-1"
            href="#"
          >
            Xem tất cả{" "}
            <span className="material-symbols-outlined text-lg">
              chevron_right
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {/* Upcoming Card 1 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent group-hover:border-primary/50 transition-colors">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmrTZzMpWzSU_9rQbEPn15aZMQofenq9P-XvLLU1IwgZ5zJYEPDOrbdaXdCwDLffwBwh-haFMVAdqe3JqHpWcnaOGU4FaJuggr4Dy5hKpjxKrezAbhBKBpUQWCuRIGIVjLeK5RiW2m_VS7aZfhMjYw_Ex3kxkjYL9m3sJmHG8Fvn5E2ppBwVGfXnyeJc9fMTtHSCxoPQnso5k7sKtEm8pc1Xs0YGbMEm7ltcDJM8Xc8wAby14jjLkc0FgaJ1GDkUJ3luSHgadMD_k')",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                  Coming Soon
                </p>
                <p className="text-white font-bold text-sm">12/05/2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Spider-Man: Beyond
              </h3>
              <p className="text-[#c9929b] text-sm">Hành động</p>
            </div>
          </div>

          {/* Upcoming Card 2 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent group-hover:border-primary/50 transition-colors">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsOwEp1TXL_belNPB2tLi84Uksd3tQO61KpNwtr7RWNTF-V15LzubRZNW1-SH2ljkIwMPSZZ_S3dWyNUgKShJ6cyS5yxEL4Z_6OhcVffRlokkIT_6aowrvJ_DL_NOIv1_x7hom2_sjbjVj_u1qdDzfW6aPbYrWweqVVRdtQo2kDjw71sjpspuzOoeR2_xO64uOg77sDxfJhqz3NBH0PCsZ3luMXGoBOERLNVb8HHSdE-hcoGVoB05ghZqPM-7qBRcdv11gQSwjYNo')",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                  Coming Soon
                </p>
                <p className="text-white font-bold text-sm">20/05/2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Deadpool 3
              </h3>
              <p className="text-[#c9929b] text-sm">Hài, Hành động</p>
            </div>
          </div>

          {/* Upcoming Card 3 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent group-hover:border-primary/50 transition-colors">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlZoa24OKmql0xR49hn3_VQCi5Ue1A7e1xeqDLMTx3eS_AADzlF4e_OjXxps6U_WEG7dIp6Hgr1vJtzmB_KB9oaZyIir_yERltbmSY-uUAZ3Q8hgHX99BE2pEn6uxmzyyJ56dJDnTbHGgk6MJdG_EYrdZvQOCpnC1PA-CKDa8gDu5ylTV0tMqSk1sKCw0cNeY1fd4J86_PBLZK7fQNVfYrJ9G_dT4LdnqfsLnk3flQTEhqAEy2Mqt9BFFES4CO6j9F56XGQ7cFrtM')",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                  Coming Soon
                </p>
                <p className="text-white font-bold text-sm">01/06/2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                The Watchers
              </h3>
              <p className="text-[#c9929b] text-sm">Kinh dị, Bí ẩn</p>
            </div>
          </div>

          {/* Upcoming Card 4 */}
          <div className="group relative flex flex-col gap-3 cursor-pointer">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent group-hover:border-primary/50 transition-colors">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBb313OWBOZkjaiEHm7IrwN-jsKUslqrKwQmMBWMmwpSJXdyivHqma70Blg8WQo82Nto9oG2qi7oGmQU2E8w1hJvAWhW2z_I9oR5DCsTIuWYzArdnn7Iob1ehR1xbKzBk_lKyMIpogibmeUXXrM0qdRHyVFLJtk6JVqmu5uWw8A_vRCQj8G43XlGXji6RzAPNzJVBh5XnTUns1qvYVJDzJgiXA2GI6tBF22Y42vMmmfKuM4gDXafLd6vbU3tCNg29sUqxA0_M2hei0')",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                  Coming Soon
                </p>
                <p className="text-white font-bold text-sm">15/06/2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
                Furiosa
              </h3>
              <p className="text-[#c9929b] text-sm">Hành động</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Phim Hot (Featured Layout) */}
      <section className="pb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            Phim Hot Tuần Này
          </h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-400">
              <span className="material-symbols-outlined text-lg">
                chevron_left
              </span>
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-gray-400">
              <span className="material-symbols-outlined text-lg">
                chevron_right
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hot Movie Wide Card 1 */}
          <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-64 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPk9_QbtCeJYJm-695dpb40S4AC0VMZSk9c4hYsXVgBIfvs-9XY9ch4mC4Sr5N4SatxLKaEYqHdraFPyOjOfDGCh6De34P-rJGNC1mzvK2Bin-2d42c-ttiQB-N8w2en-YUyjnArS0jHMRKhdjZqjATZ4m6sWFcuhih211aoXsSO2rnT6NuIs6qtMfvC1G6Aa2XHy9q7RognXeb7Dg6Q9dRbFyyNDKWl8S6fG_mvAOb1fY_ITwnKYpG8cHDJIQByUpi91_Y5wr6qQ')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Top 1
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-3/4">
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                Exhuma: Quật Mộ
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                Một gia đình giàu có nhờ hai pháp sư trẻ giải cứu đứa con mới
                sinh khỏi một thế lực tà ác...
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-yellow-500">
                    star
                  </span>{" "}
                  9.2
                </span>
                <span>Horror, Mystery</span>
                <span>2024</span>
              </div>
            </div>
          </div>

          {/* Hot Movie Wide Card 2 */}
          <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-64 group cursor-pointer hidden md:block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUXfrgySy30pb5vUgnKqlJDDHIMHUOq_edUG7HVA9ftd1rHjq5eORlLgC5EKjJ94PlCVW5C9WwNFjOiV3h_OxuwLUIBsm2D62bfHL_N43P2CQWnAnF2pTC8pw6eDnf0uvsbAOLRKnkwwc_whxlQCFUvL9x_9DzDNXi1pqGlcMya34cxrTeTXYJWxMaE7imsZ0Inw_GQwzzgLiogG3XAw_5xPQbFOBOu1jFrg90jl3Pkdf5NDshQ7sr59ZRFkWIEdmhHzGB6_8Cjco')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Top 2
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-3/4">
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                House of Dragon
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                Phần tiền truyện của Game of Thrones, xoay quanh sự sụp đổ của
                nhà Targaryen...
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-yellow-500">
                    star
                  </span>{" "}
                  8.9
                </span>
                <span>Fantasy, Drama</span>
                <span>2023</span>
              </div>
            </div>
          </div>

          {/* Hot Movie Wide Card 3 */}
          <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-64 group cursor-pointer hidden lg:block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiaAIo8r5ak2XOdS9ue_XclhMs3ppFLx62iW17-aOYtwjSblAgjnWTxvx42qM81GCcOG7KF2Wcg2NZaaxM_o4zanZr6uLQZtq9uEXuECrIKc21CgnkW2aqiXnmUpg9FSVHaz8nNwDpokwZ4P7CBU4snuHW3YavsYpdejGZEa_0ZwhZcpQG2oMqZsnrAIpCQ2SP8IVth5_B5r6Jsi2b8lpOZ9DrxErKg7txMEomzvzNSAeaFFmc3RDB9wvdqs3mcqSyKWZFZN_ceE8')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Top 3
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-3/4">
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                Poor Things
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                Câu chuyện về sự tiến hóa kỳ diệu của Bella Baxter, một phụ nữ
                trẻ được hồi sinh...
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-yellow-500">
                    star
                  </span>{" "}
                  8.4
                </span>
                <span>Comedy, Sci-Fi</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Movie;
