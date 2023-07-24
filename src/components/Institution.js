export default function Institution() {
    return (
        <>
            <section className="bg-green-950 min-h-screen p-20">
                <div className="container mx-auto flex justify-between gap-10 pt-52 mb-38">
                    <div className="flex flex-col gap-6 w-1/2 text-white">
                        <p className="font-bold text-4xl mb-6"> The fiat-crypto exchange of choice for <span className="bg-green-200 leading-loose py-1 px-2 text-green-950">institutional traders</span></p>
                        <p className="text-xl">Execute your strategy on a time-proven trading venue with reliable trade execution, deep order books and industry-leading API connectivity.</p>
                        <button type="button" className="text-gray-900 w-fit bg-white border border-gray-300 focus:outline-none hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Contact us</button>
                    </div>
                    <div className="flex justify-center items-center w-1/2 font-bold text-white text-5xl border">Some fancy SVG here</div>
                </div>

                {/* BOTTOM PART OF 1ST SECTION */}
                <div className="accordion_titles container mx-auto flex justify-between gap-10 text-white mt-10">
                    <div className="flex gap-10 w-1/2"> 
                        {/* LEFT ACCORDION */}
                        <div id="accordion-flush" className="w-1/2" data-accordion="collapse" data-active-classes="bg-green-950 text-green-400" data-inactive-classes="text-white">
                            <h2 id="accordion-flush-heading-1">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-green-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-1" aria-expanded={false} aria-controls="accordion-flush-body-1">
                                    <span>Brokers</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-white">Access markets that never close. Expand your offering across top cryptocurrency assets with a partner who ensures regulatory clarity.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-2">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-2" aria-expanded={false} aria-controls="accordion-flush-body-2">
                                    <span>FinTechs</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                                <div className="py-5 border-b border-gray-200">
                                    <p className="mb-2 text-white">Create unique customer journeys with seamless crypto integration.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-3">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-3" aria-expanded={false} aria-controls="accordion-flush-body-3">
                                    <span>Hedge Funds</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                                <div className="py-5 border-b border-gray-200">
                                    <p className="mb-2 text-white">Expand your portfolio through leading crypto markets and execution services.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-4">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-4" aria-expanded={false} aria-controls="accordion-flush-body-4">
                                    <span>Family Offices</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                                <div className="py-5 border-b border-gray-200">
                                    <p className="mb-2 text-white">Get direct access to crypto markets through proven architecture featuring industry-leading security.</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT ACCORDION A REVOIR, CA TRIGGER LES MEMES TRUCS QUE LE LEFT ACCORDION */}
                        <div id="accordion-flush" className="w-1/2" data-accordion="collapse" data-active-classes="bg-green-950 text-green-400" data-inactive-classes="text-white">
                            <h2 id="accordion-flush-heading-5">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-green-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-5" aria-expanded={false} aria-controls="accordion-flush-body-5">
                                    <span>Neo banks</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-5" className="hidden" aria-labelledby="accordion-flush-heading-5">
                                <div className="py-5 border-b border-gray-200">
                                    <p className="mb-2 text-white">Leverage existing time-proven infrastructure to create your custom crypto offer. Eliminate barriers to entry into digital currency markets.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-6">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-6" aria-expanded={false} aria-controls="accordion-flush-body-6">
                                    <span>Banks</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-6" className="hidden" aria-labelledby="accordion-flush-heading-6">
                                <div className="py-5 border-b border-gray-200">
                                    <p className="mb-2 text-white">Allow your clients to safely participate in crypto with a customized solution. Profit from an emerging industry without high overheads and regulatory concerns.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-7">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-7" aria-expanded={false} aria-controls="accordion-flush-body-7">
                                    <span>Prop Traders</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-7" className="hidden" aria-labelledby="accordion-flush-heading-7">
                                <div className="py-5 border-b border-gray-200">
                                    <p className="mb-2 text-white">Put your experience to work on quickly growing markets that never close.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-8">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-8" aria-expanded={false} aria-controls="accordion-flush-body-8">
                                    <span>Aggregators</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-8" className="hidden" aria-labelledby="accordion-flush-heading-7">
                                <div className="py-5 border-b border-gray-200">
                                    <p className="mb-2 text-white">Connect through the fastest APIs in crypto and leverage our highly liquid markets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 border">
                        <p>Enabling crypto access for institutions across the globe.</p>
                    </div>
                </div>
            </section>


            <section className="flex items-center justify-center font-bold text-6xl h-screen bg-gray-200">Next div</section>
        </>
    )
}