import React from "react";
import "../asserts/css/header.css";
import SearchIcon from "@mui/icons-material/Search";
// import { Avatar } from "@material-ui/core";
import { AccountCircle } from "@mui/icons-material";

import { useDataLayerValue } from "./DataLayer";

const Header = () => {
    const [{user }, dispatch] = useDataLayerValue()
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artist, Songs" />
      </div>

      <div className="header__right">
        <AccountCircle  src={user?.images[0]?.url }  alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
