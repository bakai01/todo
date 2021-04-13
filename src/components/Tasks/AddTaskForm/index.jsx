import React from "react";
import axios from "axios";

import addSvg from "../../../assets/img/add.svg";

import "./AddTaskForm.scss";

const AddTaskForm = ({ list, onAddTask }) => {
    const [visibleForm, setVisibleForm] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const toggleVisibleForm = () => {
        setVisibleForm(!visibleForm);
        setInputValue("");
    };

    const addTask = () => {
        if (!inputValue) {
            window.confirm("Input the value!!!");
            return;
        }

        const newTask = {
            listId: list.id,
            text: inputValue,
            completed: false
        };
        setIsLoading(true);
        axios.post("http://localhost:3001/tasks", newTask)
            .then(({ data }) => {
                onAddTask(list.id, data);
                toggleVisibleForm();
            })
            .catch(() => alert("Произошла ошибка при отправке данных"))
            .finally(() => setIsLoading(false));
        
    };

    const enterEvent = event => {
        if (event.key === "Enter") {
            if (!inputValue) {
                window.confirm("Input the value!!!");
                return;
            }

            const newTask = {
                listId: list.id,
                text: inputValue,
                completed: false
            };
            axios.post("http://localhost:3001/tasks", newTask)
            .then(({ data }) => {
                onAddTask(list.id, data);
                toggleVisibleForm();
            })
            .catch(() => alert("Произошла ошибка при отправке данных"))
            .finally(() => setIsLoading(false));
        }
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
                                onKeyDown={enterEvent}
                            />
                            <button
                                onClick={addTask}
                                disabled={isLoading}
                                className="button">
                                {isLoading ? "Добавление..." : "Добавить"}
                            </button>
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