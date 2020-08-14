import React, {Component} from "react";
import resizeImage from "../../shared/ResizeImage";

export class ArtistItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, pictureMedium} = this.props;
        return <li className="artist_item">
            <div className="artist_avatar">
                <img
                    src={resizeImage(pictureMedium)}
                    alt={name} className="artist_avatar_img"/>
                <button className="artist_play_btn">
                    <i className="fas fa-play"></i>
                </button>
            </div>
            <p className="artist_text_name">{name}</p>
        </li>;
    }
}
