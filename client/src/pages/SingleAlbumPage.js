import React, {Component} from "react";
import SingleAlbum from "../containers/SingleAlbum";
import Header from "../components/UIShared/header/header";
import Sidebar from "../components/UIShared/sidebar/sidebar";
import PlayerComponent from "../components/UIShared/playerBar/_PlayerComponent";


class SingleAlbumPage extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <SingleAlbum />
                </div>
                <PlayerComponent />
            </>
        );
    }
};

export default SingleAlbumPage;