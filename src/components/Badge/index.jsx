import React from "react";
import classNames from "classnames";

import "./Badge.scss";

const Badge = ({ color, onClick, isActive }) => {
    return (
        <i onClick={onClick}
           className={classNames("badge", { [`badge__${color}`]: color }, isActive)}>
        </i>
    );
};

export default Badge;