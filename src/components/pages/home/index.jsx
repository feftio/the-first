import React from "react";
import TextField from "src/components/fields/text-field";
import css from "./HomePage.module.scss";

export default function HomePage() {
    return (
        <div className={css["container"]}>
            <div className={css["box"]}>
                <h1 className="h1" style={{ paddingBottom: "40px" }}>
                    First ONE
                </h1>
                <TextField name="Your name:" fullWidth />
                <div className={css["empty"]}> </div>
                <button className={css["start-button"]}>Start</button>
                <button className={css["create-server-button"]}>Create Server</button>
            </div>
        </div>
    );
}
