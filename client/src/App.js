import React from 'react';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar'
import './App.css';
import TrackList from './features/trackList/trackList';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <TrackList />
    </div>
  );
}

export default App;
