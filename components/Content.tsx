// path: cabbagecircuits/app/components/Content.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Processors</Text>
      <Text style={styles.subtitle}>BCM2835</Text>
      <Text style={styles.note}>
        The BCM2835 is the Broadcom chip used in the Raspberry Pi 1 Models A, A+, B, B+, the Raspberry Pi Zero, the Raspberry Pi Zero W, and the Raspberry Pi Compute Module 1. Some details of the chip can be found in the peripheral specification document. It contains a single-core ARM1176JZF-S processor.
      </Text>
      <View style={styles.noteBox}>
        <Text style={styles.noteText}>
          NOTE: The peripheral specification document contains a number of errors. However, there is a list of currently known errata.
        </Text>
      </View>
      <Text style={styles.link}>
        GPU documentation and open-source driver
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  note: {
    fontSize: 16,
    marginBottom: 10,
  },
  noteBox: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginBottom: 10,
  },
  noteText: {
    color: 'red',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Content;
