import React, {Component} from "react";
import resizeImage from "../../shared/ResizeImage";
import AlbumBtnPlayTracks from "./AlbumBtnPlayTracks";

export class AlbumItemComponent extends Component {
    render() {
        const {coverMedium, title, id, type} = this.props;
        return <li className="album_item">
            <img
                src={resizeImage(coverMedium)}
                alt={title} className="album_img"/>
            <AlbumBtnPlayTracks id={id} type={type}/>
            <p className="album_title">{title}</p>
        </li>;
    }
}
