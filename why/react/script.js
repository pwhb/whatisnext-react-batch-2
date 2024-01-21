const { useState } = React;
const contactData = [
    {
        "id": 0,
        "name": "Aung Kyaw Zall",
        "number": "09878364599",
        "type": "mobile"
    },
    {
        "id": 1,
        "name": "Thant Zin Htoo",
        "number": "09081313261",
        "type": "mobile"
    },
    {
        "id": 2,
        "name": "Myat Thuzar Lwin",
        "number": "09255608772",
        "type": "mobile"
    },
    {
        "id": 3,
        "name": "Oakka Soe",
        "number": "09210039536",
        "type": "mobile"
    },
    {
        "id": 4,
        "name": "Kyaw Khaing",
        "number": "09609480513",
        "type": "mobile"
    },
    {
        "id": 5,
        "name": "Htein Lin Zaw",
        "number": "09615244596",
        "type": "mobile"
    },
    {
        "id": 6,
        "name": "Htun Min Khant",
        "number": "09130025311",
        "type": "mobile"
    },
    {
        "id": 7,
        "name": "Thit Lin",
        "number": "09313735508",
        "type": "mobile"
    }
];

function ContactCard({ contact })
{
    return <li className="card">
        <div className="card-left">
            <p>{contact.name[0]}</p>
        </div>
        <div className="card-right">
            <p className="name">{contact.name}</p>
            <p className="number">+{contact.number}</p>
            <p className="type">{contact.type}</p>
        </div>
    </li>;
}

// Define a component called Greetings
function App()
{
    const [contacts, setContacts] = useState(contactData);
    const [input, setInput] = useState("");

    function onSearch()
    {
        if (input)
        {
            const filteredContacts = [...contacts].filter((contact) =>
            {
                const name = contact.name.toLowerCase();
                const number = contact.number.toLowerCase();
                const searchInput = input.toLowerCase();
                return name.includes(searchInput) || number.includes(searchInput);
            });

            setContacts(filteredContacts);
            setInput("");
        } else
        {
            setContacts(contactData);
        }
    }
    return <div className="container">
        <div>
            <input type="text" id="search-input" placeholder="Search..." onChange={e => setInput(e.target.value)} />
            <button id="search-btn" onClick={onSearch}>Search</button>
        </div>;
        {contacts.map(contact => <ContactCard key={contact.id} contact={contact} />)}
    </div>;
}

// Render the component to the DOM
ReactDOM.render(
    <App />,
    document.getElementById("root")
);