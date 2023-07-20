import img1 from "../images/ease-of-trading.webp"
import img2 from "../images/institutional-grade.webp"
import img3 from "../images/proven-reliability.webp"

export default function Section4() {
    return (
        <section className="h-auto bg-green-400">
            <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center gap-32 font-bold text-green-950 py-20">
                <div className="flex flex-col gap-4 w-full md:w-1/3 items-center md:items-start">
                    <img className="mb-6" src={img1} width="100px" alt="ease of trading"></img>
                    <h4 className="mb-10"><span className="bg-white px-2 py-1">Ease</span> of trading</h4>
                    <p className="border-b-2 w-full text-center md:text-left pb-6">Intuitive interface</p>
                    <p className="border-b-2 w-full text-center md:text-left pb-6">Instant deposit options</p>
                    <p>Cash out directly to your bank account</p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-1/3 items-center md:items-start">
                    <img className="mb-6" src={img2} width="60px" alt="ease of trading"></img>
                    <h4 className="mb-10"><span className="bg-white px-2 py-1">Institutional-grade</span> Security</h4>
                    <p className="border-b-2 w-full text-center md:text-left pb-6">95% of assets stored safely offline</p>
                    <p className="border-b-2 w-full text-center md:text-left pb-6">Highly encrypted personal data</p>
                    <p>Whitelisting and transaction confirmations</p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-1/3 items-center md:items-start">
                    <img className="mb-6" src={img3} width="60px" alt="ease of trading"></img>
                    <h4 className="mb-10"><span className="bg-white px-2 py-1">Proven</span> Reliability</h4>
                    <p className="border-b-2 w-full text-center md:text-left pb-6">Serving customers since 2011</p>
                    <p className="border-b-2 w-full text-center md:text-left pb-6">Live customer support</p>
                    <p>Industry-leading uptime</p>
                </div>
            </div>
      </section>
    )
}