// path: cabbagecircuits/app/(tabs)/index.tsx
import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.sidebarContainer}>
          <Sidebar />
        </View>
        <View style={styles.contentContainer}>
          <Content />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: 'row',
  },
  sidebarContainer: {
    width: '25%',
  },
  contentContainer: {
    width: '75%',
  },
});
