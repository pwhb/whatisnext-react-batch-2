import { useState } from "react";
import Clicker from "./Clicker";
import ShopModal, { ShopButton } from "./ShopModal";

function GameContainer()
{
    const [count, setCount] = useState(0);


    return (
        <div className="flex flex-col items-center h-[100vh] justify-around max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-center w-[20rem] wonka-font text-pink">Wonka's Chocolate Factory</h1>

            <p className="text-xl font-bold wonka-yellow">Chocolates: {count}</p>
            <Clicker onClick={() => setCount(count + 1)} />
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <ShopButton />
            <ShopModal />
        </div>
    );
}

export default GameContainer;