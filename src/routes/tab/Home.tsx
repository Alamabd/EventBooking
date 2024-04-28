import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-remix-icon';
import { theme } from '../../Theme';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.contain}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View>
          <Text>Find event near</Text>
          <Text style={styles.header}>Jakarta, indonesia</Text>
        </View>
        <View style={styles.iconwrapper}>
          <Icon name="ri-notification-2-line" size={22} color="#000" />
        </View>
      </View>
      <View style={[styles.inp, {marginTop: theme.spacing.m}]}>
        <Icon name="ri-search-line" size="24" color="#e5e5e5" />
        <TextInput style={styles.inptext} inputMode="search" placeholder="Search all event..." />
      </View>
      <View style={{marginTop: theme.spacing.m}}>
        <Text style={styles.header}>Upcoming event</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contain: {
    marginHorizontal: theme.spacing.m,
  },
  header: {
    ...theme.textVariants.subheader,
    color: theme.color.dark,
  },
  iconwrapper: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.color.semilight
  },
  body: {
    ...theme.textVariants.body,
  },
  inp: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.color.secondary,
    padding: theme.spacing.xs,
    marginTop: theme.spacing.m,
    borderRadius: theme.spacing.xs,
  },
  inptext: {
      ...theme.textVariants.body,
      marginStart: theme.spacing.xs,
      flex: 1,
      padding: 0,
      fontWeight: 'bold',
      textDecorationLine: 'none',
  },
})

export default Home;