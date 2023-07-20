import Carousel from "../components/Carousel";
import CryptoBoard from "../components/CryptoBoard";
import Section1 from "../components/Section1";
import Section4 from "../components/Section4";

export default function Home() {
    return (
        <>
            <Section1 />
            <Carousel />
            <CryptoBoard />
            <Section4 />
            <section className="h-1/2 w-full flex justify-center items-center font-bold text-3xl">
                An other section
            </section>
        </>
    )
}