// import React from 'react';
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import CardArtistHome from '../CardArtistHome/CardArtistHome';
// import CardAlbumHome from '../CardAlbumHome/CardAlbumHome';

// const AlbumArtistHome = () => {

//     return (
//         <div>
//             <div className="album-list">
//                 <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
//                     {/* Title Artist, Album */}
//                     <TabList style={{ "border": "none" }}>
//                         <Tab >
//                             <div className="album-list-title">
//                                 <span className="album-list-span">Album</span>
//                             </div >
//                         </Tab>
//                         <Tab>
//                             <div className="album-list-title">
//                                 <span className="album-list-span">Artist</span>
//                             </div >
//                         </Tab>
//                     </TabList>
//                     {/* List */}
                    
//                     <TabPanel>  
//                         <CardAlbumHome />
//                     </TabPanel>
//                     <TabPanel>  
//                         <CardArtistHome />
//                     </TabPanel>

//                 </Tabs>
//             </div>
//         </div>
//     );
// }

// export default AlbumArtistHome;