import React, {Component} from "react";
import {LogoComponent} from "./LogoComponent";
import {SearchComponent} from "./SearchComponent";
import {LoginButtonComponent} from "./LoginButtonComponent";

export class HeaderComponent extends Component {
    render() {
        return <header id="navbar">
            <LogoComponent/>
            <SearchComponent/>
            <LoginButtonComponent/>
        </header>;
    }
}
