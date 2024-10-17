import { StyleSheet, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Import Location API

const MapComponent = () => {
  const locations = [
    {
      id: 1,
      title: 'Nairobi',
      description: 'Capital of Kenya',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    {
      id: 2,
      title: 'Mombasa',
      description: 'Coastal city',
      latitude: -4.043477,
      longitude: 39.668207,
    },
  ];

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation ? userLocation.latitude : -1.286389,
          longitude: userLocation ? userLocation.longitude : 36.817223,
          latitudeDelta: 0.0922, // Adjust the delta for better visibility
          longitudeDelta: 0.0421,
        }}
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Your Location"
            pinColor="blue"
          />
        )}

        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
            description={location.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapComponent; // Use a clear export

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
