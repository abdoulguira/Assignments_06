import React from "react"
export default function City(props) {
    return (
        <div>
            <h2>{`${props.entry.City}, ${props.entry.State}`}</h2>
            <ul>
                <li>{`State: ${props.entry.State}`}</li>
                <li>{`Location: (${props.entry.Lat}, ${props.entry.Long})`}</li>
                <li>{`Population: ${props.entry.EstimatedPopulation}`}</li>
                <li>{`Total Wages: ${props.entry.TotalWages}`}</li>
            </ul>
        </div>
    )
}