function ShopItem({ image, name, price, quantity })
{
    return <li className="">
        <div className="flex flex-row justify-between items-center my-4">
            <img src={image} alt={name} className="w-24 h-24" />
            <div>
                <p>{name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <button className="btn btn-primary">Buy</button>
        </div>
    </li>;
}

export default ShopItem;