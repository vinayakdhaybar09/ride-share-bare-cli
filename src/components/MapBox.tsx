import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { LatLng, Marker } from "react-native-maps";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MapBox = () => {
  const [pressLocation, setPressLocation] = useState<LatLng | null>(null);
  return (
    <View>
      <MapView
        style={{ width: windowWidth, height: windowHeight }}
        initialRegion={{
          latitude: 12.963744,
          longitude: 77.609215,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => setPressLocation(e.nativeEvent.coordinate)}
      >
        <Marker
          draggable
          coordinate={{ latitude: 12.963744, longitude: 77.609215 }}
          onDragEnd={(e) => console.log({ x: e.nativeEvent.coordinate })}
        />
        {pressLocation && (
          <Marker
            draggable
            coordinate={pressLocation}
            onDragEnd={(e) => console.log({ x: e.nativeEvent.coordinate })}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapBox;

const styles = StyleSheet.create({});
