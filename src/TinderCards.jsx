import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react'
import { useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css'
import axios from './axios';

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('/tinder/cards');
            setPeople(request.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, personToDelete) => {
        console.log(personToDelete)
    }

    const outOfFrame = (person) => {
        console.log(person);
    }

    return (
        <div className='tinder_cards'>
            <div className="tinderCard_container">
                {
                    people.map(person => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div className='card'
                                style={{ backgroundImage: `url(${person.url})` }}
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>

        </div>
    )
}

export default TinderCards