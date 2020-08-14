import React, {Component} from "react";
import resizeImage from "../../shared/ResizeImage";

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
            <div className="album_play_icon"><i className="fas fa-play"></i></div>
            <p className="album_title">{title}</p>
        </li>;
    }
}
