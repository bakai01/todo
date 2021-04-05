import React from "react";
import className from "classnames";
import Badge from "../Badge";

import removeSvg from "../../assets/img/remove.svg";

import "./List.scss";

const List = ({ items, onClick, isRemovable, onRemove }) => {
    const RemoveList = item => {
        if (window.confirm("Are you sure you want to delete the list?")) {
            onRemove(item)
        }
    };    

    return (
        <ul onClick={onClick} className="list">
            {
                items.map(item => (
                    <li key={item.id} className={className(item.className, { "active": item.active },
                        { "element": item.element })}>
                        <i>{item.icon
                            ? item.icon
                            : <Badge color={item.color} />
                        }</i>
                        <span>{item.name}</span>

                        {isRemovable && <img
                            className="list__remove-icon"
                            src={removeSvg}
                            alt="close button"
                            onClick={() => RemoveList(item)}
                        />}
                    </li>
                ))
            }
        </ul>
    );
};

export default List;