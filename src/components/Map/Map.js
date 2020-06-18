import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const SimpleMap = (props) => {

    const style = {
      width: "50%",
      height: "30%",
    };

 

    return (
      <div className="App" style={{marginLeft: "495px"}}>
        <Map
          onClick={(t,map,coord)=> props.onClick(coord.latLng.lat()+','+coord.latLng.lng())}
          google={props.google}
          zoom={5}
          initialCenter={{
            lat: 32.02403973704364,
            lng: 34.792883528573135,
          }}
          style={style}
        />
      </div>
    );
  
}
export default GoogleApiWrapper({
  apiKey: "Your API KEY",
})(SimpleMap);


