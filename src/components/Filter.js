import React from "react";
import FilterPseudoButton from "./FilterPseudoButton";
import FilterBox from "./FilterBox"

export default function Filter() {
    const [onFilterTrigger, setOnFilterTrigger] = React.useState(false)
    // const [onFilterArea, setOnFilterArea] = React.useState(false)


    function triggerFilterOptions(event) {
        setOnFilterTrigger(true)
    }

    function removeFilterOptions(event) {
        setOnFilterTrigger(false)
    }

    // function watchFilterActivity(event) {
    //     setOnFilterArea(true)
    // }

    return (
        <div className="filter-space" onMouseLeave={removeFilterOptions}>
            <FilterPseudoButton mouseOverHandler = {triggerFilterOptions} />
            {onFilterTrigger && <FilterBox />}
        </div>
    )
}