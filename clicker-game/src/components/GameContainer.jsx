import ShopModal, { ShopButton } from "./ShopModal";

function GameContainer()
{
    return (
        <div className="flex">
            <h1>Game</h1>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <ShopButton />
            <ShopModal />
        </div>
    );
}

export default GameContainer;