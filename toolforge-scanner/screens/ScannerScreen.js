import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync({ quality: 0.7 });
    // Save to app folder
    const dest = FileSystem.documentDirectory + `scan_${Date.now()}.jpg`;
    await FileSystem.copyAsync({ from: photo.uri, to: dest });
    setPhotoUri(dest);
  };

  if (hasPermission === null) return <View><Text>Requesting camera permission...</Text></View>;
  if (hasPermission === false) return <View><Text>No access to camera</Text></View>;

  return (
    <View style={{ flex: 1 }}>
      {!photoUri ? (
        <Camera style={{ flex: 1 }} ref={cameraRef} ratio="16:9" />
      ) : (
        <Image source={{ uri: photoUri }} style={{ flex: 1 }} resizeMode="contain" />
      )}
      <View style={styles.controls}>
        <Button title="Capture" onPress={takePicture} />
        <Button title="Clear" onPress={() => setPhotoUri(null)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: { flexDirection: 'row', justifyContent: 'space-around', padding: 12 },
});
