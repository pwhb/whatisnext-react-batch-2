function ShopItem({ image, name, price, quantity, onBuy })
{
    return <li className="">
        <div className="flex flex-row justify-around items-center my-4">
            <img src={image} alt={name} className="w-24 h-24" />
            <div className="">
                <p className="font-semibold text-blue">{name}</p>
                <p>Price: {price} Chocolate</p>
                <p>Quantity: {quantity}</p>
            </div>
            <button className="text-white btn bg-blue" onClick={onBuy}>Buy</button>
        </div>
    </li>;
}

export default ShopItem;