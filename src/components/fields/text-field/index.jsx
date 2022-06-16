import React from "react";
import css from "./TextField.module.scss";

const TextField = (props) => {
    return (
        <div
            className={css["container"]}
            style={{
                width: props.fullWidth ? "100%" : "auto",
                ...props.containerStyle,
            }}
        >
            <label htmlFor={props.id}>{props.name}</label>
            <input
                className={css["input"]}
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                style={{
                    width: props.fullWidth ? "100%" : "auto",
                    ...props.inputStyle,
                }}
            />
        </div>
    );
};

TextField.defaultProps = {
    name: "",
    type: "text",
    placeholder: "",
    id: Math.random().toString(36).substring(2, 15),
    containerStyle: {},
    inputStyle: {},
};

export default TextField;
