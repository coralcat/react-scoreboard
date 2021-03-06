import React from 'react';
import {Statistics} from "./Statistics";

export const Header = (props) => {
    console.log(props);
    return (
        <header className="header">
            <Statistics players="{props.players}" />
            <h1 className="h1">{props.title}</h1>
        </header>
    );
};