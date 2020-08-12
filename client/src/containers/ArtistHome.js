// import React, { Component } from 'react';
// import axios from 'axios';
// import CardArtistHome from '../components/features/CardArtistHome/CardArtistHome';

// class ArtistHome extends Component {
//     constructor(props){
//         super(props);
//             this.state = {
//                 artist: []
//             }
//     }
//     async componentDidMount(){
//         let {data} = await axios({
//             method: 'GET',
//             url: `https://api.doraneko.tk/artist/${id}`,
//             data: null
//         })
//         this.setState({
//             artist: data
//         })
//         console.log(this.state.artist);

//     } 
//     render() {
//         return (
//             <div>
//                 {this.showArtist()}
//             </div>
//         );
//     }
//     showArtist() {
//         let {artist} = this.state;
//         let result = null;
//         if(artist.length >0){
//             result = artist.slice(0, 8).map(artists => {
//                 return <CardArtistHome key={artists.id} artists={artist} />
//             })
//         }
//         return result;
//     }
// }

// export default ArtistHome;