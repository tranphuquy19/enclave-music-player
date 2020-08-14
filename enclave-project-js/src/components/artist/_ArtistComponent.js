import React, {Component} from "react";
import ArtistListComponent from "./ArtistListComponent";

export class ArtistComponent extends Component {
    render() {
        return <div className="artists">
            <h2 className="main_text">Top Artists!</h2>
            <ArtistListComponent/>
        </div>;
    }
}
