import React from "react";

const Item=(props)=>(
    <div>
        Hello, This is my first portfolio item with item id {props.match.params.id} 
    </div>
);
export default Item;