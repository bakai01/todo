import React from "react";

import "./List.scss"

const List = (props) => {
    return (
        <ul className="list">
            {
                props.items.map(item => (
                    <li key={item.id} className={item.active ? "active" : ""}>
                        <i>{item.icon
                            ? item.icon
                            : <i className={`badge badge__${item.color}`}></i>
                        }</i>
                        <span>{item.name}</span>
                    </li>
                ))
            }
        </ul>
    );
};

export default List;