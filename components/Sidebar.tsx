// path: cabbagecircuits/app/components/Sidebar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.sidebarTitle}>Computers</Text>
      <Text style={styles.sidebarItem}>Getting started</Text>
      <Text style={styles.sidebarItem}>Raspberry Pi OS</Text>
      <Text style={styles.sidebarItem}>Configuration</Text>
      <Text style={styles.sidebarItem}>config.txt</Text>
      <Text style={styles.sidebarItem}>Legacy config.txt options</Text>
      <Text style={styles.sidebarItem}>The Linux kernel</Text>
      <Text style={styles.sidebarItem}>Remote access</Text>
      <Text style={styles.sidebarItem}>Camera software</Text>
      <Text style={styles.sidebarItem}>Raspberry Pi hardware</Text>
      <Text style={styles.sidebarItem}>Compute Module hardware</Text>
      <Text style={styles.sidebarItem}>Processors</Text>
      <Text style={styles.sidebarSubItem}>BCM2835</Text>
      <Text style={styles.sidebarSubItem}>BCM2836</Text>
      <Text style={styles.sidebarSubItem}>BCM2837</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sidebarItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  sidebarSubItem: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default Sidebar;
