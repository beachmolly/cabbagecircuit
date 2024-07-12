// path: cabbagecircuits/app/components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Raspberry Pi Documentation</Text>
      <View style={styles.nav}>
        <TouchableOpacity><Text style={styles.navItem}>For home</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>For industry</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>Hardware</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>Software</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>Documentation</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>News</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>Forums</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>Foundation</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  navItem: {
    color: 'white',
  },
});

export default Header;
