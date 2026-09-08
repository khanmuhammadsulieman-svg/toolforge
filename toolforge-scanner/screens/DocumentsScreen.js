import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const DUMMY = [
  { id: '1', title: 'Receipt - Jan 2026' },
  { id: '2', title: 'Contract - ACME' },
  { id: '3', title: 'Invoice - 2026-02' },
];

export default function DocumentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documents</Text>
      <FlatList
        data={DUMMY}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 12 },
  item: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
});
