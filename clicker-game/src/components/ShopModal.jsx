import ShopItem from "./ShopItem";

function ShopModal()
{
    const shopItems = [
        {
            image: "/industrial-robot-robot-svgrepo-com.svg",
            name: "Choco Bot",
            price: 100,
            quantity: 1
        },
        {
            image: "/loader-svgrepo-com.svg",
            name: "Choco Loader",
            price: 100,
            quantity: 1
        },
        {
            image: "/microchip-svgrepo-com.svg",
            name: "Choco AI",
            price: 100,
            quantity: 1
        }
    ];
    return <dialog id="shop-modal" className="modal">
        <div className="flex flex-col items-center modal-box">
            <h3 className="text-4xl font-medium wonka-font">Upgrades</h3>
            <ul className="w-full">
                {shopItems.map((item) => <ShopItem {...item} />)}
            </ul>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Back</button>
                </form>
            </div>
        </div>
    </dialog>;
}

export function ShopButton()
{
    return <button className="p-2 w-16 h-16 btn btn-square" onClick={() => document.getElementById('shop-modal').showModal()}>
        <img src="/shopping-cart-svgrepo-com.svg" alt="buy" />
    </button>;
}

export default ShopModal;
