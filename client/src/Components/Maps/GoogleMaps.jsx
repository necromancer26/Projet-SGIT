import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.850204,
      lng: 10.157866,
    },
    zoom: 0,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "70vh",
          width: "100%",
          padding: "50px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCWlAWYFll-UPVJYFxSwJTz9n1jB0dwsuE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={"📍"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
