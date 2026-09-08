import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HISTORY = [
  { id: '1', action: 'Scanned: Receipt - Jan 2026' },
  { id: '2', action: 'Exported: Invoice - 2026-02 to PDF' },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={HISTORY}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.action}</Text>
          </View>
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
