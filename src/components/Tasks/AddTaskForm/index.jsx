import React from "react";

import addSvg from "../../../assets/img/add.svg";

import "./AddTaskForm.scss";

const AddTaskForm = () => {
    const [visibleForm, setVisibleForm] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    const toggleVisibleForm = () => {
        setVisibleForm(!visibleForm);
        setInputValue("");
    };

    return (
        <div className="tasks__form">
            {
                !visibleForm
                    ? (
                        <div onClick={toggleVisibleForm} className="tasks__form-new">
                            <img src={addSvg} alt="add icon" />
                            <span>Новая задача</span>
                        </div>
                    )
                    : (
                        <div className="tasks__form-block">
                            <input
                                value={inputValue}
                                className="field"
                                type="text"
                                placeholder="Текст задачи"
                                onChange={event => setInputValue(event.target.value)}
                            />
                            <button className="button">Добавить задачу</button>
                            <button
                                onClick={toggleVisibleForm}
                                className="button button-grey">
                                Отмена
                            </button>
                        </div>
                    )
            }
        </div>
    );
};

export default AddTaskForm;