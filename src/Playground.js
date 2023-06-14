import React, { useState } from "react";
import "./Playground.css";

// want to write a list rendered by data
// now i want to scroll the list
// now i want to implement a virtual list
// container height 300, each item 50.
// every page is 6 items.
// we display 10 items for one page
// listen to the container, and change current render data.
const itemHeight = 50;
const pageItemsNum = 10;
function Playground() {
    let initialArr = Array.from({ length: 100 });
    initialArr = initialArr.map((_item, index) => {
        return index + 1
    });
    const [list, setList] = useState(initialArr.slice(0, 10));
    const scrollList = (event) => {
        const scrollTop = event.target.scrollTop;
        const indexStart = Math.floor(scrollTop / itemHeight);
        const indexEnd = indexStart + pageItemsNum -1;
        setList(initialArr.slice(indexStart, indexEnd + 1));
    }
    return (
        <div className="list">
            <ul className="list-container" onScroll={scrollList}>
                {list.map((item, index) => (
                    <li style={{top: (item - 1) * itemHeight + 'px'}} className='list-item' key={index}>item {item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Playground;
