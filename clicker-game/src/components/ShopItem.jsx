import { chocolateSVG } from "../constants/assets";

function ShopItem({ image, name, price, description, onBuy, isAvailable })
{
    return <li className="">
        <div className="flex flex-row justify-around items-center my-4">
            <img src={image} alt={name} className="w-24 h-24" />
            <div className="w-1/2">
                <p className="font-semibold text-blue">{name}</p>
                <div className="flex flex-row gap-2">Price:
                    <span className="wonka-font">
                        {price}
                    </span>
                    <img src={chocolateSVG} className="w-4" alt="chocolate" />
                </div>
                <p>Description: {description}</p>
            </div>
            <button className="text-white btn bg-blue" disabled={!isAvailable} onClick={onBuy}>Buy</button>
        </div>
    </li>;
}

export default ShopItem;