import React from "react";

export default function FilterPseudoButton(props) {


    return (
        <div className="filter-trigger" onMouseOver={props.mouseOverHandler}>Filter</div>
    )
}