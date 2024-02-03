function ShopItem({ image, name, price, quantity })
{
    return <li className="">
        <div className="flex flex-row justify-around items-center my-4">
            <img src={image} alt={name} className="w-24 h-24" />
            <div className="">
                <p className="font-semibold text-blue">{name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <button className="text-white btn bg-blue">Buy</button>
        </div>
    </li>;
}

export default ShopItem;