import React from 'react'
import City from "./City";

export default function Cities(props) {

    return (
        <div>
            {
                props.cities ?
                    props.cities.map(entry => <City key={entry.RecordNumber} entry={entry}></City>)
                    : <h2>No matching cities found :(</h2>
            }
        </div>

    )
}