const COUNTRY = [
    {
        id: 1,
        name: 'India'
    },
    {
        id: 2,
        name: 'Usa'
    },
    {
        id: 3,
        name: 'Canada'
    }
];

const STATES = [
    {
        id: 1,
        name: 'Delhi',
        'country_id': 1
    },
    {
        id: 2,
        name: 'Ahemdabad',
        'country_id': 1
    },
    {
        id: 3,
        name: 'Chennai',
        'country_id': 1
    },
    {
        id: 4,
        name: 'Texas',
        'country_id': 2
    },
    {
        id: 5,
        name: 'Alaska',
        'country_id': 2
    },
    {
        id: 6,
        name: 'Ohio',
        'country_id': 2
    },
    {
        id: 7,
        name: 'Florida',
        'country_id': 2
    },
    {
        id: 8,
        name: 'Nova Scotia',
        'country_id': 3
    },
    {
        id: 9,
        name: 'Nova Scotia',
        'country_id': 3
    },
    {
        id: 10,
        name: 'Quebec',
        'country_id': 3
    },
    {
        id: 11,
        name: 'Torento',
        'country_id': 3
    }
];

const PROPERTY = [
    {
        id: 1,
        img: "https://i.pinimg.com/originals/4b/ed/63/4bed63d74192362dba9f5425d42e7f3c.jpg",
        p_name: "OLEA",
        p_address: "Caulfield North, Victoria",
        p_tag: "Apartments",
        bedroom: "1-3",
        bathroom: "1-3",
        parking: "1-2"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?cs=srgb&dl=pexels-pixabay-262367.jpg&fm=jpg",
        p_name: "Live city",
        p_address: "Footscray, Victoria",
        p_tag: "Apartments",
        bedroom: "1-3",
        bathroom: "1-2",
        parking: "0-2"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        p_name: "Victoria & Albert, Broadbeach",
        p_address: "Broadbeach, Queenslad",
        p_tag: "Apartments",
        from: "$810,000",
        bedroom: "1-3",
        bathroom: "1-3",
        parking: "1-2"
    }
];

const HEADERLINKS = ["Buy", "Rent", "Sold", "New Developments", "Price Estimators", "Find Agents", "Auction Results", "Advice", "News", "Our Network", "Loans", "Conveyancing"]

export { COUNTRY, STATES, PROPERTY, HEADERLINKS }