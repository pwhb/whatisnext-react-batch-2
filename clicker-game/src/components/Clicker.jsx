function Clicker({ onClick })
{
    return <button onClick={onClick} className="p-2 w-24 h-24 btn btn-circle bg-yellow">
        <img src="/willy-wonka.png" className="w-12" alt="wonka" />
    </button>;
}

export default Clicker;