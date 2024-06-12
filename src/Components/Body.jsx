import React from 'react';
import "../asserts/css/Body.css";
import Header from "./Header"
import { useDataLayerValue } from './DataLayer';


const Body = ({spotify}) => {
    const [{discover_weekly }, dispatch] = useDataLayerValue()
  return (
    <div className='body'>
    <Header  spotify = {spotify} />
    <div className="body__info">
        <img src={discover_weekly?.images[0].url } alt='img'></img>

        <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2 className='weekly'>Discover Weekly</h2>
            <p className='descri'>{discover_weekly?.description}</p>
            
    </div>
    </div>
    </div>
  )
}

export default Body
