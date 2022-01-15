import React from "react";

export default function ZipInput(){

    const [zip, setZip] = React.useState("")
    const [cities, setCities] = React.useState([])

    function handleChange(event) {
        setZip(event.target.value)
    }

    function getCities(event) {
        event.preventDefault()
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
        </div>
    )


}
