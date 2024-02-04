import { useState } from "react";
import { shoppingCartSVG } from "../constants/assets";
import ShopItem from "./ShopItem";

function ShopModal({ chocolates, setChocolatesPerSecond, setChocolatesPerClick, setChocolates })
{

    const [prices, setPrices] = useState([10, 100]);

    const shopItems = [
        {
            image: "/loader-svgrepo-com.svg",
            name: "Choco Loader",
            price: prices[0],
            onBuy: function ()
            {
                setChocolatesPerClick(v => v + 1);
                setChocolates(chocolates - prices[0]);
            }
        },
        {
            image: "/industrial-robot-robot-svgrepo-com.svg",
            name: "Choco Bot",
            price: prices[1],
            quantity: 1,
            onBuy: function ()
            {
                setChocolatesPerSecond(v => v + 1);
                setChocolates(chocolates - prices[1]);
            }
        },
    ];
    return <dialog id="shop-modal" className="modal">
        <div className="flex flex-col items-center modal-box">
            <h3 className="text-4xl font-medium wonka-font">Upgrades</h3>
            <ul className="w-full">
                {shopItems.map((item, idx) => <ShopItem key={`shop-item-${idx}`} {...item} />)}
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
        <img src={shoppingCartSVG} alt="buy" />
    </button>;
}

export default ShopModal;
