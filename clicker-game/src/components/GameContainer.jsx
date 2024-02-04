import { useEffect, useState } from "react";
import Clicker from "./Clicker";
import ShopModal, { ShopButton } from "./ShopModal";
import { chocolateSVG } from "../constants/assets";

function GameContainer()
{
    const [chocolates, setChocolates] = useState(0);
    const [chocolatesPerClick, setChocolatesPerClick] = useState(1);
    const [chocolatesPerSecond, setChocolatesPerSecond] = useState(0);


    useEffect(() =>
    {
        const interval = setInterval(() => setChocolates(chocolates + chocolatesPerSecond), 1000);

        return () => clearInterval(interval);
    }, [chocolatesPerSecond, chocolates]);

    return (
        <div className="flex flex-col items-center h-[100vh] justify-between max-w-2xl mx-auto py-6 border-8 border-violet rounded-xl">


            <div className="grid grid-cols-3 gap-2 text-brown">

                <div className="flex flex-row gap-4 justify-between items-center p-2 rounded-xl border-4 border-brown">
                    <div className="flex flex-row gap-1 items-end">
                        <img src={chocolateSVG} alt="chocolate" className="w-8" />
                        <span className="text-xs font-bold">/sec</span>
                    </div>
                    <span className="text-4xl font-bold wonka-font">{chocolatesPerSecond}</span>
                </div>
                <div className="flex flex-row gap-4 justify-between items-center p-2 rounded-xl border-4 border-brown">
                    <div className="flex flex-row gap-1 items-end">
                        <img src={chocolateSVG} alt="chocolate" className="w-8" />
                        <span className="text-xs font-bold">/click</span>
                    </div>
                    <span className="text-4xl font-bold wonka-font">{chocolatesPerClick}</span>
                </div>

                <div className="flex flex-row gap-4 justify-between items-center p-2 rounded-xl border-4 border-brown">
                    <img src={chocolateSVG} alt="chocolate" className="w-8" />
                    <span className="text-4xl font-bold wonka-font">{chocolates}</span>
                </div>
            </div>
            <h1 className="text-6xl font-bold text-center w-[20rem] wonka-font text-pink">Wonka's Chocolate Factory</h1>


            <Clicker onClick={() => setChocolates(chocolates + chocolatesPerClick)} />
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <ShopButton />
            <ShopModal
                setChocolates={setChocolates}
                setChocolatesPerClick={setChocolatesPerClick}
                setChocolatesPerSecond={setChocolatesPerSecond}
                chocolates={chocolates} />
        </div>
    );
}

export default GameContainer;