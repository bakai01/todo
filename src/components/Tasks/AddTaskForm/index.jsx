import React from "react";

import addSvg from "../../../assets/img/add.svg";

import "./AddTaskForm.scss";

const AddTaskForm = () => {
    return (
        <div className="tasks__form">
            <div className="tasks__form-new">
                <img src={addSvg} alt="add icon" />
                <span>Новая задача</span>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AddTaskForm;