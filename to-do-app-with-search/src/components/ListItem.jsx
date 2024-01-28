function ListItem({ item, id, handleCheck, handleDelete })
{
    return <li>
        <span className={`card`} style={{
            textAlign: 'left',
            backgroundColor: item.isFinished ? 'lightgreen' : 'orange',
            textDecoration: item.isFinished ? 'line-through' : 'none',
        }}>
            <input type='checkbox' onChange={() => handleCheck(id)} style={{ marginRight: '2rem' }} />
            {item.name}
        </span>
        <button className='card' onClick={() => handleDelete(id)}>Delete</button>
    </li>;
}

export default ListItem;