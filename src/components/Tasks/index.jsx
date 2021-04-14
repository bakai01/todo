import React from "react";
import axios from "axios";

import editSvg from "../../assets/img/edit.svg";

import "./Tasks.scss";

import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

const Tasks = ({ list, onEditTitle, onAddTask, withoutTitleEmpty, onRemoveTask }) => {
    const editTitle = () => {
        const newTitle = window.prompt("list title", list.name);
        if (newTitle) {
            onEditTitle(list.id, newTitle);
            axios
                .patch("http://localhost:3001/lists/" + list.id, {
                    name: newTitle
                })
                .catch(() => alert("Could not change the title of the list!"));
        }
    };

    return (
        <div className="tasks">
            <div style={{color: list.color.hex}} className="tasks__title">
                <h2>{list.name}</h2>
                <img src={editSvg} alt="edit button" onClick={editTitle} />
            </div>

            <div className="tasks__items">
                {!withoutTitleEmpty && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
                {
                    list.tasks.map(item => {
                        return (
                            <Task
                                list={list}
                                key={item.id}
                                onRemove={onRemoveTask}
                                {...item}
                            />
                        );
                    })
                }
            </div>
            <AddTaskForm list={list} onAddTask={onAddTask} />
        </div>
    );
};

export default Tasks;