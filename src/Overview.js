import React from "react";
import { ImageBackground, StyleSheet, ScrollView, Text, View } from "react-native";

const App = () => (
  <ScrollView style={styles.contentContainer}>
    <View style={styles.pageTitleContainer}>
      <Text
        numberOfLines={1}
        style={styles.pageTitle}
      >
        app-debug.apk' on 'Nexus_6P_API_29(AVD) - 10' for app:debugpp:debug
      </Text>
    </View>
    <ImageBackground
      resizeMode="cover"
      style={styles.pageImage}
      source={require('./connectedfitnesstracker.png')}
    />
    <View style={styles.middleTextContainer}>
      <Text
        numberOfLines={3}
        style={styles.middleText}
      >
        app-debug. for app
      </Text>
    </View>
    <Text style={{ textAlign: 'center' }}>test</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#C4C4C4',
    flex: 1
  },
  pageTitleContainer: {
    marginTop: 20,
    marginHorizontal: 100
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000'
  },
  pageImage: {
    height: 200,
    marginTop: 16,
    borderRadius: 12,
    marginHorizontal: 14,
    overflow: 'hidden'
  },
  middleTextContainer: {
    marginHorizontal: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: '#ED1B2E',
    borderRadius: 12,
    overflow: 'hidden'
  },
  middleText: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center'
  }
});

export default App;