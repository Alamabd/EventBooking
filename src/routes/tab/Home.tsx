import React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import Styles from '../../Styles';
import Icon from 'react-native-remix-icon';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={[Styles.contain, {marginTop: 10}]}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View>
          <Text>Find event near</Text>
          <Text style={Styles.h1}>Jakarta, indonesia</Text>
        </View>
        <View>
          <Icon name="ri-notification-2-line" size={22} color="#000" />
        </View>
      </View>
      <View style={[Styles.inpWrapper, {marginTop: 10}]}>
        <Icon name="ri-search-line" size="24" color="#e5e5e5" />
        <TextInput style={Styles.inpText} inputMode="search" placeholder="Search all event..." />
      </View>
      <View style={{marginTop: 10}}>
        <Text style={Styles.h2}>Upcoming event</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;