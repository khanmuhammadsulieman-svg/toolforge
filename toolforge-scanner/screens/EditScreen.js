import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EditScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      <Text>Placeholder for cropping, filters, rotate, contrast, and export to PDF.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 12 },
});
