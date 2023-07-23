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
                <div className="border container mx-auto flex justify-between gap-10 text-white mt-10">
                    <div className="flex gap-10 w-1/2"> 
                        {/* LEFT ACCORDION */}
                        <div id="accordion-flush" className="w-1/2" data-accordion="collapse" data-active-classes="bg-green-950 text-green-400" data-inactive-classes="text-white">
                            <h2 id="accordion-flush-heading-1">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-green-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-1" aria-expanded={true} aria-controls="accordion-flush-body-1">
                                    <span>What is Flowbite?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-2">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded={false} aria-controls="accordion-flush-body-2">
                                    <span>Is there a Figma file available?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-3">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded={false} aria-controls="accordion-flush-body-3">
                                    <span>What are the differences?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT ACCORDION A REVOIR, CA TRIGGER LES MEMES TRUCS QUE LE LEFT ACCORDION */}
                        <div id="accordion-flush" className="w-1/2" data-accordion="collapse" data-active-classes="bg-green-950 text-green-400" data-inactive-classes="text-white">
                            <h2 id="accordion-flush-heading-1">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-green-500 border-b border-gray-200" data-accordion-target="#accordion-flush-body-1" aria-expanded={true} aria-controls="accordion-flush-body-1">
                                    <span>What is Flowbite?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-2">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded={false} aria-controls="accordion-flush-body-2">
                                    <span>Is there a Figma file available?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-3">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded={false} aria-controls="accordion-flush-body-3">
                                    <span>What are the differences between Flowbite and Tailwind UI?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
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