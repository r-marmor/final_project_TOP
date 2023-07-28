export default function Carousel() {
    return (
      <section className="bg-white w-full h-1/2 border"> 
        <div id="default-carousel" className="relative w-full" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* Item 1 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <div className="flex justify-around mt-14">
                    <div className="flex flex-col gap-5">
                      <span className="bg-green-400 font-bold text-4xl p-2 w-fit">Proud</span>
                      <p>to be FCA registered as a cryptoasset business</p>
                      <button type="button" className="w-fit text-green-900 bg-green-400 hover:bg-green-800 hover:text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Read more</button>
                    </div>
                    <div>
                      <img src="https://assets.bitstamp.net/widgets/s/widgets/widgets/img/uk-fca.173469dd.svg" width="350"  alt="flags"></img>
                    </div>
                  </div>
              </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="flex justify-around mt-14">
                <div className="flex flex-col gap-5">
                  <span className="bg-green-400 font-bold text-4xl p-2 w-fit">Rated Number 1</span>
                  <p>centralized crypto exchange</p>
                  <button type="button" className="w-fit text-green-900 bg-green-400 hover:bg-green-800 hover:text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Learn why</button>
                </div>
                <div>
                  <img src="https://assets.bitstamp.net/widgets/s/widgets/widgets/img/top-exchange-trophy.d091ea58.svg" width="250"  alt="flags"></img>
                </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="flex justify-around mt-14">
                <div className="flex flex-col gap-5">
                  <span className="bg-green-400 font-bold text-4xl p-2 w-fit">Bitstamp Pro</span>
                  <p>Built for pro traders and crypto experts</p>
                  <button type="button" className="w-fit text-green-900 bg-green-400 hover:bg-green-800 hover:text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Explore more</button>
                </div>
                <div>
                  <img src="https://assets.bitstamp.net/widgets/s/widgets/widgets/img/pro-dashboard.8c644ae4.png" width="400"  alt="flags"></img>
                </div>
            </div>
          </div>
      </div>
      
      {/* Slider controls */}
      <button type="button" className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
              <svg className="w-4 h-4 text-gray-800 hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span className="sr-only">Previous</span>
          </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
              <svg className="w-4 h-4 text-gray-800 hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="sr-only">Next</span>
          </span>
      </button>
        </div>
      </section>
    )
}