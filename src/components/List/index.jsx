import React from "react";
import className from "classnames";
import axios from "axios";

import Badge from "../Badge";

import removeSvg from "../../assets/img/remove.svg";

import "./List.scss";

const List = ({ items, onClick, isRemovable, onRemove, onClickItem, activeItem }) => {
    const RemoveList = item => {
        if (window.confirm("Are you sure you want to delete the list?")) {
            axios
                .delete("http://localhost:3001/lists/" + item.id)
                .then(() => {
                    onRemove(item.id);
                });
        }
    };

    return (
        <ul onClick={onClick} className="list">
            {
                items.map(item => (
                    <li
                        key={item.id}
                        className={className(item.className, {
                            "active": item.active
                                ? item.active
                                : activeItem && activeItem.id === item.id
                        })}
                        onClick={onClickItem ? () => onClickItem(item) : null}>
                        <i>{item.icon
                            ? item.icon
                            : <Badge color={item.color.name} />
                        }</i>
                        <span>
                            {item.name}
                            {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}
                        </span>

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