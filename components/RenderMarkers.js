import { StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

const RenderMarkers = ({ markers }) => {
  return (
    <>
      {markers &&
        markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
    </>
  );
};

export default RenderMarkers;

const styles = StyleSheet.create({});
