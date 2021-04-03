import React from "react";
import className from "classnames";
import Badge from "../Badge"

import "./List.scss"

const List = ({ items, onClick }) => {
    return (
        <ul onClick={onClick} className="list">
            {
                items.map(item => (
                    <li key={item.id} className={className(item.className, {active: item.active})}>
                        <i>{item.icon
                            ? item.icon
                            : <Badge color={item.color} />
                        }</i>
                        <span>{item.name}</span>
                    </li>
                ))
            }
        </ul>
    );
};

export default List;