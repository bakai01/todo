import React, { useState } from "react";
import List from "../List";
import Badge from "../Badge";

import closeSvg from "../../assets/img/close.svg";

import "./AddList.scss";

const AddButtonList = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setColor] = useState(colors[0].id);

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
                <img onClick={() => setVisiblePopup(false)}
                 src={closeSvg} alt="close button" className="add-list__popup-close-btn"/>
                <input className="field" type="text" placeholder="Название списка" />
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
                <button className="button">Добавить</button>
            </div>}
        </div>
    );
};

export default AddButtonList;