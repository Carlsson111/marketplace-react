import React from 'react';
import CardProps from './CardProps';
import 'bootstrap/dist/css/bootstrap.min.css';

const advertisementsData = [
    {
        id: 1,
        title: 'Ad 1',
        description: 'This is the first advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'contact1@example.com'
    },
    {
        id: 2,
        title: 'Ad 2',
        description: 'This is the second advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'test@test.nu'
    },
    {
        id: 3,
        title: 'Ad 3',
        description: 'This is the third advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'figgeferrum@example.com'
    },
    {
        id: 4,
        title: 'Bell 4',
        description: 'This is the fourth advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'Anders@test.nu'
    },
    {
        id: 5,
        title: 'Car 5',
        description: 'This is the fifth advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'randomemail@test.com'
    },
    {
        id: 6,
        title: 'Ad 6',
        description: 'This is the sixth advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'contact3@example.com'
    }
];

const Body = () => {
    const cardElements = advertisementsData.map((data) => (
        <div className="col mb-4" key={data.id}>
            <CardProps title={data.title} description={data.description} img={data.image} contact={data.contact} />
        </div>
    ));

    return (
        <div className='container mt-5'>
            <h2>Advertisement list</h2>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {cardElements}
            </div>
        </div>
    );
};

export default Body;