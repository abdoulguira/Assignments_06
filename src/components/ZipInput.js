import React from "react";
import Cities from "./Cities";

export default function ZipInput(){

    const [zip, setZip] = React.useState("")
    const [cities, setCities] = React.useState([])

    function handleChange(event) {
        setZip(event.target.value)
    }

    function getCities(event) {
        event.preventDefault()

        fetch(`https://ctp-zip-api.herokuapp.com/zip/${zip}`)
            .then(function(response) {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(function(data) {
                console.log(data)
                setCities(data)
            }).catch(function(error) {
            console.log("Error: " +error)
        })
    }

    return (
        <div className="box" >
            <form onSubmit={getCities}>
                <label id="label">Zip Code:</label>
                <input
                    type="text"
                    placeholder="Zip Code"
                    name="lname"
                    value={zip}
                    onChange={handleChange}
                />  <br /> <br />
                <button>Search</button>
            </form>
            <Cities cities={cities} />
        </div>
    )


}
