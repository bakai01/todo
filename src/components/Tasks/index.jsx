import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import editSvg from "../../assets/img/edit.svg";

import "./Tasks.scss";

import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

const Tasks = ({ list, onEditTitle, onAddTask, withoutTitleEmpty, onRemoveTask, onEditTask, completed, onCompleteTask }) => {
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
            <div className="tasks__title">
                <Link to={`/lists/${list.id}`}>
                    <h2 style={{color: list.color.hex}}>{list.name}</h2>
                </Link>
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
                                onEdit={onEditTask}
                                onComplete={onCompleteTask}
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