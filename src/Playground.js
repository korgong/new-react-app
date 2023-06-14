import React, { useState } from "react";
import "./Playground.css";

// want to write a list rendered by data
// now i want to scroll the list
function Playground() {
    const initialArr = Array.from({ length: 20 });
    const [list, setList] = useState(initialArr);
    return (
        <div className="list">
            <ul className="list-container">
                {list.map((_item, index) => (
                    <li key={index}>item {index}</li>
                ))}
            </ul>
        </div>
    );
}

export default Playground;
