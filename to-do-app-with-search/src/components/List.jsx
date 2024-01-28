import { useEffect, useState } from 'react';
import './List.css';
import ListItem from './ListItem';
function List()
{
    const [list, setList] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [todoText, setTodoText] = useState('');

    const [search, setSearch] = useState('');


    const handleCheck = (id) =>
    {
        setList(list =>
            list.map((item) =>
                item.id === id ?
                    { ...item, isFinished: !item.isFinished }
                    : item
            )
        );
    };


    const handleAdd = (e) =>
    {
        e.preventDefault();
        if (todoText)
        {
            setList(list => [...list, {
                id: list.length > 0 ? list[list.length - 1].id + 1 : 0,
                name: todoText,
                isFinished: false
            }]);
            setTodoText('');
        }
    };

    const handleDelete = (id) =>
    {
        setList(list => list.filter((item) => item.id !== id));
    };

    const handleClear = (e) =>
    {
        setSearch('');
    };

    useEffect(() =>
    {
        if (search)
        {
            const filteredList = list.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredList(filteredList);
        } else
        {
            setFilteredList(list);
        }
    }, [search, list]);

    return <ul style={{ listStyle: 'none' }}>
        <div>
            <input type='text' className='card' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search' />
            <button type='submit' className='card' onClick={handleClear}>Clear</button>
        </div>

        <hr />


        {filteredList.map((item) =>
            <ListItem key={`list-item-${item.id}`} item={item} id={item.id} handleCheck={handleCheck} handleDelete={handleDelete} />
        )}

        <form onSubmit={handleAdd}>
            <input type='text' className='card' value={todoText} onChange={e => setTodoText(e.target.value)} placeholder='Add new' />
            <button type='submit' className='card'>Add</button>
        </form>
    </ul>;
}



export default List;