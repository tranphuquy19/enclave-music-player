import React, {Component} from "react";
import resizeImage from "../../shared/ResizeImage";
import AlbumBtnPlayTracks from "./AlbumBtnPlayTracks";

export class AlbumItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {coverMedium, title} = this.props;
        return <li className="album_item">
            <img
                src={resizeImage(coverMedium)}
                alt={title} className="album_img"/>
            <AlbumBtnPlayTracks/>
            <p className="album_title">{title}</p>
        </li>;
    }
}
