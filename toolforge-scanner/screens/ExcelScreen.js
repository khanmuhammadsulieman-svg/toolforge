import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function ExcelScreen() {
  const [file, setFile] = useState(null);

  const pickFile = async () => {
    const res = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
    if (res.type === 'success') {
      setFile(res);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Excel / CSV</Text>
      <Button title="Pick a spreadsheet (CSV/XLSX)" onPress={pickFile} />
      {file && (
        <View style={{ marginTop: 12 }}>
          <Text>Name: {file.name}</Text>
          <Text>Size: {file.size ?? 'unknown'}</Text>
          <Text>URI: {file.uri}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 12 },
});
