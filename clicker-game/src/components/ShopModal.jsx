import ShopItem from "./ShopItem";

function ShopModal()
{
    const shopItems = [
        {
            image: "https://picsum.photos/200",
            name: "Upgrade 1",
            price: 100,
            quantity: 1
        },
        {
            image: "https://picsum.photos/200",
            name: "Upgrade 1",
            price: 100,
            quantity: 1
        }
    ];
    return <dialog id="my_modal_1" className="modal">
        <div className="flex flex-col items-center modal-box">
            <h3 className="text-lg font-bold">Upgrades</h3>
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
    return <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>;
}

export default ShopModal;