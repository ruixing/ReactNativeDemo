import React from "react";
import { View, Image, ImageBackground, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";

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
    <View style={styles.pageImageContainer}>
      <Image
        resizeMode="cover"
        style={styles.pageImage}
        source={require('./connectedfitnesstracker.png')}
      />
    </View>
    <View style={styles.middleTextContainer}>
      <Text
        numberOfLines={3}
        style={styles.middleText}
      >
        app-debug. for app app-debug.apk' on 'Nexus_6P_API_29(AVD) - 10' for app:debugpp:debug
      </Text>
    </View>
    <View style={styles.textListItem}>
      <ImageBackground
        style={styles.textListIcon}
        resizeMode="contain"
        source={require('./list-icon.png')}
      />
      <Text
        numberOfLines={1}
        style={styles.textLevelTwo}
      >
        app-debug. for app
      </Text>
      <Text
        numberOfLines={3}
        style={styles.textLevelThree}
      >
        HKD500,000 life cover for as low as HKD 0,7* per day *Based on a non-smoker female aged 20 (age next birthday)
      </Text>
    </View>
    <View style={styles.textListItem}>
      <ImageBackground
        style={styles.textListIcon}
        resizeMode="contain"
        source={require('./list-icon.png')}
      />
      <Text
        numberOfLines={1}
        style={styles.textLevelTwo}
      >
        app-debug. for app
      </Text>
      <Text
        numberOfLines={3}
        style={styles.textLevelThree}
      >
        HKD500,000 life cover for as low as HKD 0,7* per day *Based on a non-smoker female aged 20 (age next birthday)
      </Text>
    </View>
    <View style={styles.footerContainer}>
      <Text
        numberOfLines={1}
        style={styles.textLevelTwo}
      >
        note
      </Text>
      <Text
        numberOfLines={3}
        style={styles.textLevelThree}
      >
        HKD500,000 life cover for as low as HKD 0,7* per day *Based on a non-smoker female aged 20 (age next birthday)
      </Text>
    </View>
    <View style={[ styles.footerContainer, styles.footerLink ]}>
      <Text
        numberOfLines={1}
        style={[ styles.textLevelThree, styles.linkItem ]}
      >
        Product Brochure
      </Text>
      <Text
        numberOfLines={1}
        style={[ styles.textLevelThree, styles.linkItem ]}
      >
        Product Brochure
      </Text>
    </View>
    <View style={styles.submitContainer}>
      <TouchableOpacity style={styles.submitButton}>
        <Text
          numberOfLines={1}
          style={[ styles.textLevelThree, styles.submitText ]}
        >
          Apply Now
        </Text>
      </TouchableOpacity>
    </View>
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
  pageImageContainer: {
    flexDirection: 'row',
    marginTop: 16,
    borderRadius: 12,
    marginHorizontal: 14,
    overflow: 'hidden'
  },
  pageImage: {
    flex: 1
  },
  middleTextContainer: {
    marginTop: -42,
    marginHorizontal: 100,
    marginBottom: 42,
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
  },
  textListItem: {
    marginBottom: 28,
    marginHorizontal: 20,
    paddingLeft: 60
  },
  textListIcon: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
    position: 'absolute',
    left: 19,
    top: 6
  },
  textLevelTwo: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 9
  },
  textLevelThree: {
    color: 'rgba(40, 51, 66, 0.6)',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17
  },
  footerContainer: {
    marginLeft: 24,
    marginRight: 20
  },
  footerLink: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 18
  },
  linkItem: {
    color: '#ED1B2E',
    textDecorationLine: 'underline'
  },
  submitContainer: {
    alignItems: 'center',
    paddingHorizontal: 80,
    marginTop: 40,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#ED1B2E',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    overflow: 'hidden'
  },
  submitText: {
    color: '#FFFFFF'
  }
});

export default App;