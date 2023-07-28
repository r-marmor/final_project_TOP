export default function Section1 () {
    return (
        <section className="pt-36 pb-10 bg-emerald-950 text-white min-h-screen h-1 w-full">
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-0 lg:flex-row w-full h-full">
          <div className="flex flex-col lg:w-1/2 pl-10">
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
              <button type="button" className="focus:outline-none text-green-900 bg-green-400 hover:bg-white focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-8 py-2.5 mt-6">Get started</button>
            </div>
            <div className="w-full pl-4 mt-4 flex gap-2 flex-wrap">
              <img src="https://assets.bitstamp.net/static/webapp/images/app-store.17d326cb7ee37a202be68daf91087f9e59d131eb.svg" width="135" height="4" alt="Apple Store app" className="cursor-pointer"></img> 
              <img src="https://assets.bitstamp.net/static/webapp/images/google-play.b5d4bf2604f09e2e08d9a745e8cd61f0c9ed0155.svg" width="135" height="4" alt="Google Play app" className="cursor-pointer"></img> 
              <img src="https://assets.bitstamp.net/static/webapp/images/huawei-store.6dc8a0167c602968e35b5d2ad948ca56e96366ae.svg" width="135" height="4" alt="Huawai Store app" className="cursor-pointer"></img>
            </div>
          </div>
          <div className="w-fit h-1/2 lg:h-full lg:w-1/4 flex items-center justify-center bg-green-100">
            ANIMATION HERE
          </div>
        </div>
      </section>
    )
}