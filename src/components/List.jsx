import React from 'react';
import Place from "./Place";
import { places } from '../datas/data.js';

function List() {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place
                place={place}
            />
        </li>
    );
    return <ul>{listItems}</ul>
}

export default List;