import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "../styles/styles";

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.center}>
          <Image source={require("../images/logo.png")} />
        </View>
        <Text style={styles.title}>Hello!</Text>
        <View style={styles.center}>
          <Text style={styles.subtitle}>
            Swipe right or tap the menu icon in the top left to navigate the
            Wildfire app.
          </Text>
        </View>
        <Text style={styles.title}>About</Text>
        <View style={styles.center}>
            <Image source={require('../images/sitting-at-bar.jpg')} style={{width: 300, height: 200, marginTop: 22}} />
          <Text style={styles.subtitle}>
            Recently we celebrated out 25th birthday, and we still partied like we were 21. Our glory days aren't over
            yet. We're still the champs with three awards in 5-star customer service, and we just keep getting better with age.
          </Text>
            <Image source={require('../images/patties-on-grill.jpg')} style={{width: 300, height: 200}} />
            <Text style={styles.subtitle}>
            We're not shy about how much we love meat. No reason to be ashamed. Everyone's got their own taste. Ours just happens
            to be thicker, juicier, and better than everyone else's. Don't believe us? Open up our menu and check out our Smash Burger.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
