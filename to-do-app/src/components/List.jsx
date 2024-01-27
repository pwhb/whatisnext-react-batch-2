import { useState } from 'react';
import './List.css';
import ListItem from './ListItem';
function List()
{
    const [list, setList] = useState([]);

    const [todoText, setTodoText] = useState('');
    // one way binding

    const handleCheck = (e) =>
    {
        setList(list =>
            list.map((item, i) =>
                i === parseInt(e.target.name) ?
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
                name: todoText,
                isFinished: false
            }]);
            setTodoText('');
        }
    };

    const handleDelete = (e) =>
    {
        setList(list => list.filter((item, i) => i !== parseInt(e.target.name)));
    };
    return <ul style={{ listStyle: 'none' }}>
        <form onSubmit={handleAdd}>
            <input type='text' className='card' value={todoText} onChange={e => setTodoText(e.target.value)} />
            <button type='submit' className='card'>Add</button>
        </form>

        {list.map((item, index) =>
            <ListItem key={`list-item-${index}`} item={item} index={index} handleCheck={handleCheck} handleDelete={handleDelete} />
        )}
    </ul>;
}



export default List;