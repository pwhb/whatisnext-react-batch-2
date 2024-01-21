document.addEventListener('DOMContentLoaded', () =>
{
    const contacts = [
        {
            id: 0,
            name: 'Aung Kyaw Zall',
            number: '09878364599',
            type: 'mobile'
        },
        {
            id: 1,
            name: 'Thant Zin Htoo',
            number: '09081313261',
            type: 'mobile'
        },
        {
            id: 2,
            name: 'Myat Thuzar Lwin',
            number: '09255608772',
            type: 'mobile'
        },
        { id: 3, name: 'Oakka Soe', number: '09210039536', type: 'mobile' },
        { id: 4, name: 'Kyaw Khaing', number: '09609480513', type: 'mobile' },
        {
            id: 5,
            name: 'Htein Lin Zaw',
            number: '09615244596',
            type: 'mobile'
        },
        {
            id: 6,
            name: 'Htun Min Khant',
            number: '09130025311',
            type: 'mobile'
        },
        { id: 7, name: 'Thit Lin', number: '09313735508', type: 'mobile' }
    ];

    const contactListEl = document.getElementById('contact-list');

    function createContactEl(contact)
    {
        const contactEl = document.createElement('li');
        contactEl.className = "card";
        contactEl.id = `contact-${contact.id}`;
        contactEl.innerHTML = `<div class="card-left">
            <p>${contact.name[0]}</p>
        </div>
        <div class="card-right">
            <p class="name">${contact.name}</p>
            <p class="number">+${contact.number}</p>
            <p class="type">${contact.type}</p>
        </div>`;
        return contactEl;
    }

    for (const contact of contacts)
    {
        const contactEl = createContactEl(contact);
        contactListEl.appendChild(contactEl);
    }

    function updateContactList(contacts)
    {
        contactListEl.innerHTML = "";
        for (const contact of contacts)
        {
            const contactEl = createContactEl(contact);
            contactListEl.appendChild(contactEl);
        }
    }

    const inputEl = document.getElementById("search-input");
    const searchBtnEl = document.getElementById("search-btn");

    searchBtnEl.addEventListener('click', (event) =>
    {
        const filteredContacts = contacts.filter((contact) =>
        {
            const name = contact.name.toLowerCase();
            const number = contact.number.toLowerCase();
            const searchInput = inputEl.value.toLowerCase();
            return name.includes(searchInput) || number.includes(searchInput);
        });

        console.log({
            value: inputEl.value,
            filteredContacts
        });

        updateContactList(filteredContacts);
        inputEl.value = "";
    });



    // console.log("contact page", names);
});