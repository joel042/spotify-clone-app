import React from 'react';
import "../asserts/css/Sidebar.css";
import spotifyLogo from "../asserts/images/Spotify_Full_Logo_RGB_White.png";
import SidebarOpt from "../Components/SidebarOpt"
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import { useDataLayerValue } from './DataLayer';




const Sidebar = () => {
const [{playlists}, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={spotifyLogo} alt="spotify-logo" />

      <SidebarOpt Icon={HomeIcon} title="Home" />
      <SidebarOpt Icon={SearchIcon} title="Search" />
      <SidebarOpt Icon={LibraryMusicIcon} title="Your Library" />

      <strong className="sidebar_title">PLAYLIST</strong>

      <hr></hr>

    {playlists?.items?.map( (playlists) => (
        <SidebarOpt  title={playlists.name} />

    )
        
        
    )}
      
      {/* <SidebarOpt  title="Rock" />
      <SidebarOpt  title="RnB" /> */}
    </div>
  );
}

export default Sidebar
