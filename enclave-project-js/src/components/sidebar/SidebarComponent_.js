import React, {Component} from "react";
import {SideBarItemsComponent} from "./SideBarItemsComponent";

export class SidebarComponent extends Component {
    render() {
        return <div id="sidebar">
            <SideBarItemsComponent/>
        </div>;
    }
}
