import type { FC, MouseEventHandler } from "react";
import React, { useState } from "react";

import styles from "./Counter.module.scss";

export type CounterProps = {
    initialValue?: number;
    step?: number;
};

export const Counter: FC<CounterProps> = ({
    initialValue = 0,
    step = 1,
}) => {
    const [value, setValue] = useState(initialValue);

    const handleOnClickDecrement: MouseEventHandler = (target) => {
        target.preventDefault();
        setValue(value - step);
    };

    const handleOnClickIncrement: MouseEventHandler = (target) => {
        target.preventDefault();
        setValue(value + step);
    };

    return (
        <span>
            <button className={styles.red} onClick={handleOnClickDecrement}>{"<"}</button>
            {value}
            <button className={styles.green} onClick={handleOnClickIncrement}>{">"}</button>
        </span>
    );
};
