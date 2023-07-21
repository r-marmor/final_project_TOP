import facebookLogo from "../images/facebook.png"

export default function Footer() {
    return (
        <footer className="min-h-1/2 bg-green-950">
            <div className="container mx-auto py-12 border-4">
                <div className="flex gap-24 justify-between">
                    <div>
                        <h3 className="text-white font-bold mb-6">About</h3>
                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <a href="#" className="hover:underline">Who we are</a>
                            <a href="#" className="hover:underline">The Bitstamp way</a>
                            <a href="#" className="hover:underline">Careers</a>
                            <a href="#" className="hover:underline">Legal & Privacy</a>
                            <a href="#" className="hover:underline">Fee schedule</a>
                            <a href="#" className="hover:underline">FAQ</a>
                            <a href="#" className="hover:underline">Gaming</a>
                            <a href="#" className="hover:underline">Affiliates</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Products</h3>
                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <a href="#" className="hover:underline">Mobile Apps</a>
                            <a href="#" className="hover:underline">Tradeview</a>
                            <a href="#" className="hover:underline">Earn Stake</a>
                            <a href="#" className="hover:underline">Earn Lend</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Services</h3>
                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <a href="#" className="hover:underline">Institutions & Partners</a>
                            <a href="#" className="hover:underline">Bitstamp as a Service</a>
                            <a href="#" className="hover:underline">The Bitstamp Ecosystem</a>
                            <a href="#" className="hover:underline">Pro</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Ressources</h3>
                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <a href="#" className="hover:underline">API Documentation</a>
                            <a href="#" className="hover:underline">PGP Key</a>
                            <a href="#" className="hover:underline">Lightning Network</a>
                            <a href="#" className="hover:underline">Crypto Pulse</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Address</h3>
                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <p className="leading-loose">
                                Bitstamp Ltd 5 <br></br> 
                                New Street Square <br></br> 
                                London, EC4A 3TW <br></br> 
                                United Kingdom
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <a href="#" className="hover:underline">info@bitstamp.net</a>
                            <a href="#" className="hover:underline">press@bitstamp.net</a>
                            <a href="#" className="hover:underline">affiliates@bitstamp.net</a>
                            <a href="#" className="hover:underline">support@bitstamp.net</a>
                            <a href="#" className="hover:underline mb-5">complaints@bitstamp.net</a>
                            <p className="leading-normal">Customer support will be provided: <br></br> Mon - Sat: 6am CET to 10pm CET
                            </p>
                        </div>
                    </div>
                </div>

                {/* THE 3RD DIV ISNT WORKING PROPERLY (HIS WIDTH) NEED TO TRY WITH GRID INTEAD OF FLEX */}
                <div className="flex text-white mt-16 gap-20 justify-between">
                    <div className="flex gap-2 mr-20">
                        <a href="https://twitter.com/Bitstamp" className="w-7" target="_blank" rel="noopener noreferrer" alt="Bitstamp twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white">
                            <path d="M 16 0 a 16 16 0 1 0 16 16 A 16 16 0 0 0 16 0 Z m 6.39 13.51 v 0.43 A 9.35 9.35 0 0 1 8 21.81 a 6.65 6.65 0 0 0 4.87 -1.36 a 3.29 3.29 0 0 1 -3.07 -2.28 a 3.26 3.26 0 0 0 0.62 0.06 a 3.19 3.19 0 0 0 0.87 -0.12 a 3.29 3.29 0 0 1 -2.64 -3.22 a 3.29 3.29 0 0 0 1.49 0.41 a 3.29 3.29 0 0 1 -1 -4.39 a 9.34 9.34 0 0 0 6.78 3.44 a 3.29 3.29 0 0 1 5.6 -3 a 6.57 6.57 0 0 0 2.09 -0.8 a 3.29 3.29 0 0 1 -1.45 1.82 a 6.56 6.56 0 0 0 1.84 -0.56 a 6.66 6.66 0 0 1 -1.61 1.7 Z"></path>
                        </svg>
                        </a>
                        
                        <a href="https://www.linkedin.com/company/bitstamp/" className="w-7" target="_blank" rel="noopener noreferrer" alt="Bitstamp linkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white">
                            <path d="M 16 0 a 16 16 0 1 0 16 16 A 16 16 0 0 0 16 0 Z m -4.48 22.69 H 8.4 v -10 h 3.12 Z M 9.88 11.46 A 1.74 1.74 0 1 1 9.91 8 a 1.74 1.74 0 1 1 0 3.46 Z M 24 22.69 h -3.54 v -5.16 c 0 -1.35 -0.55 -2.27 -1.77 -2.27 A 1.79 1.79 0 0 0 17 16.48 a 2.3 2.3 0 0 0 -0.08 0.82 v 5.4 h -3.5 v -10 h 3.5 v 1.57 A 3.2 3.2 0 0 1 20 12.61 c 2.22 0 4 1.44 4 4.53 Z"></path>
                            </svg>
                        </a>
                        
                        <a href="https://www.facebook.com/Bitstamp" className="w-7" target="_blank" rel="noopener noreferrer" alt="Bitstamp facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white">
                            <path d="M 16 0 a 16 16 0 1 0 16 16 A 16 16 0 0 0 16 0 Z m 3.53 13.29 l -0.18 2.39 h -2.46 V 24 h -3.1 v -8.32 h -1.65 v -2.39 h 1.65 v -1.61 a 4.3 4.3 0 0 1 0.53 -2.48 A 2.94 2.94 0 0 1 16.89 8 a 10.4 10.4 0 0 1 3 0.3 l -0.41 2.45 a 5.59 5.59 0 0 0 -1.33 -0.2 c -0.64 0 -1.22 0.23 -1.22 0.87 v 1.87 Z"></path>
                            </svg>
                        </a>
                        
                        <a href="https://www.instagram.com/bitstampexchange/" className="w-7" target="_blank" rel="noopener noreferrer" alt="Bitstamp instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white">
                            <path d="M 19.772 8.403 c -0.984 -0.046 -1.28 -0.054 -3.772 -0.054 s -2.787 0.01 -3.771 0.054 c -2.532 0.116 -3.71 1.314 -3.826 3.826 c -0.044 0.984 -0.055 1.279 -0.055 3.771 s 0.011 2.787 0.055 3.772 c 0.116 2.505 1.289 3.711 3.826 3.827 c 0.983 0.044 1.279 0.054 3.771 0.054 c 2.493 0 2.788 -0.009 3.772 -0.054 c 2.532 -0.115 3.709 -1.318 3.827 -3.827 c 0.044 -0.984 0.053 -1.28 0.053 -3.772 s -0.009 -2.787 -0.053 -3.771 c -0.118 -2.51 -1.298 -3.71 -3.827 -3.826 Z M 16 20.793 a 4.792 4.792 0 1 1 -0.001 -9.585 A 4.792 4.792 0 0 1 16 20.793 Z m 4.983 -8.654 a 1.12 1.12 0 1 1 0 -2.24 a 1.12 1.12 0 0 1 0 2.24 Z M 19.111 16 a 3.111 3.111 0 1 1 -6.222 0 a 3.111 3.111 0 0 1 6.222 0 Z M 16 0 C 7.164 0 0 7.164 0 16 s 7.164 16 16 16 s 16 -7.164 16 -16 S 24.836 0 16 0 Z m 9.277 19.848 c -0.153 3.393 -2.042 5.273 -5.428 5.429 c -0.996 0.046 -1.314 0.056 -3.849 0.056 s -2.852 -0.01 -3.848 -0.056 c -3.392 -0.156 -5.273 -2.038 -5.429 -5.429 c -0.046 -0.995 -0.056 -1.313 -0.056 -3.848 s 0.01 -2.852 0.056 -3.848 c 0.156 -3.392 2.038 -5.273 5.429 -5.428 c 0.996 -0.047 1.313 -0.057 3.848 -0.057 s 2.853 0.01 3.849 0.057 c 3.394 0.156 5.276 2.043 5.428 5.428 c 0.046 0.996 0.056 1.313 0.056 3.848 s -0.01 2.853 -0.056 3.848 Z"></path>
                            </svg>
                        </a>
                        
                        <div className="w-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white">
                            <path d="M 16 0 a 16 16 0 1 0 16 16 A 16 16 0 0 0 16 0 Z m 7.63 10.4 c -0.05 0.65 -0.42 2.92 -0.79 5.37 L 21.69 23 s -0.09 1.06 -0.88 1.25 a 3.85 3.85 0 0 1 -2.31 -0.83 c -0.19 -0.14 -3.47 -2.22 -4.67 -3.24 a 0.87 0.87 0 0 1 0 -1.48 c 1.67 -1.53 3.66 -3.42 4.86 -4.63 c 0.55 -0.55 1.11 -1.85 -1.2 -0.27 L 11 18.22 a 2.74 2.74 0 0 1 -2.13 0.05 c -1.39 -0.42 -3 -1 -3 -1 s -1.11 -0.69 0.79 -1.43 l 10.77 -4.44 c 1.07 -0.4 4.67 -1.92 4.67 -1.92 s 1.67 -0.65 1.53 0.92 Z"></path>
                            </svg>
                        </div>
                        
                    </div>
                    <div className="flex gap-4">
                        <img src="https://assets.bitstamp.net/static/webapp/images/logos/visa-white.08b3dce7c5b5950e46478672c36d98292463d42e.svg" className="h-6" alt="visa logo"></img>
                        <img src="https://assets.bitstamp.net/static/webapp/images/logos/maestro-symbol.672238cbb6c89ff21a6159edfffeeeeff6000fd3.svg" className="h-6" alt="maestro logo"></img>
                        <img src="https://assets.bitstamp.net/static/webapp/images/logos/mastercard-symbol.cdb3b52e2fd9c4f67e5f4c62ea0977cd536c303a.svg" className="h-6" alt="mastercard logo"></img>
                        <img src="https://assets.bitstamp.net/static/webapp/images/logos/apple-pay.b7775c3a5aabbba00abb5ca01bfa9006cfccc127.svg" className="h-6" alt="apple pay logo"></img>
                        <img src="https://assets.bitstamp.net/static/webapp/images/logos/google-pay.f9d733e1f871260d81fcccdf4c9dc012cf96a3ea.svg" className="h-6" alt="google pay logo"></img>
                        <img src="https://assets.bitstamp.net/static/webapp/images/logos/paypal-white.8b5dc003d82a290e47257667b102779040fa18ab.svg" className="h-6" alt="paypal logo"></img>
                    </div>

                    <div className="border border-red-500 w-96">Bitstamp <br></br> Bitstamp USA, Inc. is licensed to engage in Virtual Currency Business Activity by the New York State Department of Financial Services.
                    All rights reserved © 2023 Bitstamp. NMLS #1905429</div>
                </div>
            </div>
        </footer>
    )
}