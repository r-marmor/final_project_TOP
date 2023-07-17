import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="pt-36 px-60 bg-emerald-950 text-white min-h-screen">
        <div className="w-full h-full flex">
          <div className="flex flex-col w-1/2">
            <div className="leading-relaxed text-4xl xl:leading-relaxed xl:text-6xl font-bold">
              <span className="p-2 bg-green-400 text-green-900">Buy & trade</span>
              <br></br> 
              <p className="pl-4">on the original 
              <br></br>trusted crypto exchange.</p>
            </div>
            <p className="pl-4 mt-8">
              Bitstamp makes trading <span className="font-bold">easy, fast & reliable.</span>
              <br></br>
              With live customer support, staking and
              <br></br>
              bank-grade security & insurance.
              <br></br>
              <span className="font-bold">Trusted Crypto Exchange Since 2011.</span>
            </p>
            <div className="w-full pl-4 my-4">
              <button type="button" class="focus:outline-none text-green-900 bg-green-400 hover:bg-white focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-8 py-2.5 mt-6">Get started</button>
            </div>
            <div className="w-full pl-4 mt-4 flex gap-2 flex-wrap">
              <img src="https://assets.bitstamp.net/static/webapp/images/app-store.17d326cb7ee37a202be68daf91087f9e59d131eb.svg" width="135" height="4" alt="Apple Store app"></img> 
              <img src="https://assets.bitstamp.net/static/webapp/images/google-play.b5d4bf2604f09e2e08d9a745e8cd61f0c9ed0155.svg" width="135" height="4" alt="Google Play app"></img> 
              <img src="https://assets.bitstamp.net/static/webapp/images/huawei-store.6dc8a0167c602968e35b5d2ad948ca56e96366ae.svg" width="135" height="4" alt="Huawai Store app"></img>
            </div>
          </div>
          <div className="w-1/2 flex justify-start pl-10">
            ANIMATION HERE
          </div>
        </div>
      </section>
      <section className="bg-white h-1/4">
        
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
    {/* Carousel wrapper */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <p>Item 1</p>
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <p>Item 2</p>        
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <p>Item 3</p>        
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <p>Item 4</p>
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <p>Item 5</p>
        </div>
    </div>
     {/* Slider indicators */}
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* Slider controls */}
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


      </section>
    </>
  )
}

export default App;
