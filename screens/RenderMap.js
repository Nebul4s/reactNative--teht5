import { StyleSheet } from "react-native";
import { useState } from "react";
import RenderMarkers from "../components/RenderMarkers";

import MapView from "react-native-maps";

const RenderMap = ({ location }) => {
  const [markers, setMarkers] = useState([]);

  const addMarker = (e) => {
    const coords = e.nativeEvent.coordinate;
    setMarkers([...markers, coords]);
  };

  return (
    <MapView style={styles.map} region={location} onLongPress={addMarker}>
      <RenderMarkers markers={markers} />
    </MapView>
  );
};

export default RenderMap;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
