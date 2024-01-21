const names = [
    "Aung Kyaw Zall",
    "Thant Zin Htoo",
    "Myat Thuzar Lwin",
    "Oakka Soe",
    "Kyaw Khaing",
    "Htein Lin Zaw",
    "Htun Min Khant",
    "Thit Lin"
];

// const contacts = Array.from(names, (v, k) =>
// {

//     return {
//         id: k,
//         name: v,
//         number: generatePhoneNumber(),
//         type: "mobile"
//     };
// });

function generatePhoneNumber(digit = 9)
{
    let number = "";
    for (let i = 0; i < digit; i++)
    {
        number += `${Math.floor(Math.random() * 10)}`;
    }

    return "09" + number;

}

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
