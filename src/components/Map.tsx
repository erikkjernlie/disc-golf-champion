import React from "react";
import mapboxgl from "mapbox-gl";
import getConfig from "next/config";
const { mapBoxApiKey } = getConfig().publicRuntimeConfig.ruby;
class Map extends React.Component<any, any> {
  state = {
    map: null,
  };

  componentDidMount() {
    mapboxgl.accessToken = mapBoxApiKey;
    const map = new mapboxgl.Map({
      // @ts-ignore
      container: this.mapContainer as any,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [this.props.lng, this.props.lat],
      zoom: 12,
    });

    map.on("load", (...args) => {
      this.setState({ map });
    });
  }

  render() {
    const style = {
      height: "500px",
      width: "100%",
    };

    return (
      // @ts-ignore
      <div style={style} ref={(x) => (this.mapContainer = x)}>
        {this.state.map &&
          this.props.children &&
          React.Children.map(this.props.children, (child) =>
            // @ts-ignore
            React.cloneElement(child, {
              map: this.state.map,
            })
          )}
      </div>
    );
  }
}

export default Map;
