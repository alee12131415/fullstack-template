import type { FC, PropsWithChildren} from "react";
import React from "react";

import styles from "./Header.scss";

export type HeaderProps = {
    //
} & PropsWithChildren;

export const Header: FC<HeaderProps> = ({children}) => {
    return <h1>{children}</h1>;
};
