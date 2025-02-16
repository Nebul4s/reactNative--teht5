import RenderMap from "./screens/RenderMap";
import { StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    try {
      if (status !== "granted") return;

      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation({
        ...location,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      getUserLocation();
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location.longitude && location.latitude ? (
        <RenderMap location={location} />
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    fontSize: 32,
  },
});
