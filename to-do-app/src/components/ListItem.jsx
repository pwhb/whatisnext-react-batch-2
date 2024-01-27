function ListItem({ item, index, handleCheck, handleDelete })
{
    return <li>
        <span className={`card`} style={{
            textAlign: 'left',
            backgroundColor: item.isFinished ? 'lightgreen' : 'orange',
            textDecoration: item.isFinished ? 'line-through' : 'none',
        }}>
            <input name={index} type='checkbox' onChange={handleCheck} style={{ marginRight: '2rem' }} />
            {item.name}
        </span>
        <button className='card' name={index} onClick={handleDelete}>Delete</button>
    </li>;
}

export default ListItem;