import { useEffect } from "react";
import { useState } from "react";

export default function CryptoBoard() {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.bitstamp.net/api/v2/currencies/");
                let data = await response.json();
                
                const promises = data.slice(0,7).map(async (crypto, index) => {
                    try {
                        if (crypto.currency) {
                            const url = `https://www.bitstamp.net/api/v2/ticker/${crypto.currency.toLowerCase()}usd/`;
                            const priceResponse = await fetch(url);
                            if (!priceResponse.ok) {
                                console.log(`Error fetching price for ${crypto.currency}. Status: ${priceResponse.status}`);
                                return crypto;
                            }
                            const priceData = await priceResponse.json();
                            return { ...crypto, 
                                    price: priceData.last,
                                    change: priceData.percent_change_24 };
                        } else {
                            console.log(`Currency is undefined for the crypto at index ${index}`);
                            return crypto;
                        }
                    } catch (error) {
                        return crypto;
                    }
                });

                const cryptoWithPrices = await Promise.all(promises);
                setCryptoData(cryptoWithPrices);

            } catch(error) {
                console.log(`Error fetching price for ${crypto.currency}: `, error);
                return crypto;
            }
        }
        fetchData();  
    }, []);

    return (
        <section className="bg-gray-100 h-3/4 pt-20 w-full">
            <div className="container mx-auto w-2/3 flex gap-3 mb-5">
                <p className="h-10 pl-2 w-1/4 border-gray-500 border-b text-gray-400">Assets</p>
                <p className="h-10 text-right w-1/4 border-gray-500 border-b text-gray-400">Price</p>
                <p className="h-10 text-right w-1/4 border-gray-500 border-b text-gray-400">24h change</p>
                <p className="h-10 w-1/6 border-gray-500 border-b hidden md:block"></p>
            </div>

                {cryptoData.map((crypto, index) =>
                <div key={index} className="container mx-auto w-2/3 flex gap-3 mb-2">
                    <p className="flex pl-2 items-center gap-2 h-10 w-1/4 border-gray-500 border-b text-gray-400"><img width="25" src={crypto.logo} alt="currencyLogo"></img><span className="font-bold text-black">{crypto.name}</span>{crypto.currency}</p>
                    <p className="h-10 text-right w-1/4 border-gray-500 border-b">${crypto.price}</p>
                    <p className={`h-10 text-right w-1/4 border-gray-500 border-b ${crypto.change < 0 ? 'text-red-500' : 'text-green-500'}`}>{crypto.change < 0 ? crypto.change + "%" : "+" + crypto.change}</p>
                    <div className="h-10 w-1/6 border-gray-500 border-b text-gray-400 hidden md:block">
                        <button type="button" className="widthBtn py-1 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-green-700 hover:text-green-400">Buy {crypto.name}</button>
                    </div>
                </div>
             )}
        </section>       
    )
}