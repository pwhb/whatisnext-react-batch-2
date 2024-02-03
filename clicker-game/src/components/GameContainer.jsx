import ShopModal, { ShopButton } from "./ShopModal";

function GameContainer()
{
    return (
        <div className="flex flex-col items-center h-[100vh] justify-around max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-center w-[20rem] wonka-font">Wonka's Chocolate Factory</h1>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <ShopButton />
            <ShopModal />
        </div>
    );
}

export default GameContainer;