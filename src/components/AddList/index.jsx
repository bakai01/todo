import React, { useState, useEffect } from "react";
import axios from "axios";

import List from "../List";
import Badge from "../Badge";

import closeSvg from "../../assets/img/close.svg";

import "./AddList.scss";

const AddButtonList = ({ colors, onAddList }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setColor] = useState(1);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (Array.isArray(colors)) {
            setColor(colors[0].id);
        }
    }, [colors]);

    const closePopup = () => {
        setVisiblePopup(false);
        setColor(colors[0].id);
        setInputValue("");
    };

    const addList = () => {
        if (!inputValue) {
            alert("Input the value!");
            return;
        }
        setIsLoading(true);
        axios
            .post("http://localhost:3001/lists", {
                name: inputValue,
                colorId: selectedColor
            })
            .then(({ data }) => {
                const color = colors.filter(color => color.id === selectedColor)[0].name;
                const newList = { ...data, color: { name: color }, tasks: [] };
                onAddList(newList);
                closePopup();
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="add-list">
            <List onClick={() => { setVisiblePopup(true) }} items={[
                {
                    id: 4,
                    className: "list__add-button",
                    icon: (<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    ),
                    name: "Добавить список"
                }
            ]} />

            {visiblePopup && <div className="add-list__popup">
                <img
                    onClick={closePopup}
                    src={closeSvg}
                    alt="close button"
                    className="add-list__popup-close-btn"
                />
                <input
                    onChange={event => {
                        setInputValue(event.target.value);
                    }}
                    value={inputValue}
                    className="field"
                    type="text"
                    placeholder="Название списка"
                />
                <div className="add-list__popup-colors">
                    {
                        colors.map(item => <Badge
                            key={item.id}
                            color={item.name}
                            onClick={() => setColor(item.id)}
                            isActive={selectedColor === item.id && "active"}
                        />)
                    }
                </div>
                <button onClick={addList} className="button">
                    { isLoading ? "Добавление..." : "Добавить" }
                </button>
            </div>}
        </div>
    );
};

export default AddButtonList;