import React from "react";
import className from "classnames";

import "./List.scss"

const List = ({ items }) => {
    return (
        <ul className="list">
            {
                items.map(item => (
                    <li key={item.id} className={className(item.className, {active: item.active})}>
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