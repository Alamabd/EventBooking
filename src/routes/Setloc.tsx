import { Text, Image, View, TouchableOpacity, ToastAndroid, TextInput, ImageSourcePropType, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { theme } from '../Theme';

function Setloc({navigation}: any): React.JSX.Element {
    type listLocType = {
        id: string,
        loc: string,
        country: string,
        image: ImageSourcePropType
    }[];

    const listLoc: listLocType = [
        {
            id: '1',
            loc: 'Jakarta',
            country: 'Indonesia, jakarta',
            image: require('../image/map0.png')
        },
        {
            id: '2',
            loc: 'Lampung Selatan',
            country: 'Indonesia, lampung',
            image: require('../image/map1.png')
        },
        {
            id: '3',
            loc: 'Bandar Lampung',
            country: 'Indonesia, lampung',
            image: require('../image/map2.png')
        }
    ]

    return (
        <SafeAreaView style={styles.contain}>
          
            <Text style={styles.header}>Choose your location</Text>
            <Text style={styles.body}>Let`s find your unforgettable event. Choose a location bellow to get started.</Text>
            <View>
                <View style={styles.inp}>
                    <Icon name='ri-map-pin-fill' size='24' color='#3C5B6F' />
                    <TextInput style={styles.inptext} inputMode='search' placeholder='Search event in...' />
                </View>
                <TouchableOpacity style={styles.btnline} activeOpacity={0.9}
                    onPress={() => navigation.navigate('TabBottom')}>
                    <Icon name='ri-focus-3-line' size={24} color='#000' />
                    <Text style={styles.btntext}>Use my current location</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={[theme.textVariants.body, {fontWeight: 'bold'}]}>Recomended location</Text>
                <FlatList 
                    data={listLoc}
                    renderItem={({item}) => {
                        return(
                            <View style={{
                                marginTop: 20,
                                padding: 15,
                                borderWidth: 1,
                                borderColor: '#e5e5e5',
                                borderRadius: 10,
                                flexDirection: 'row', 
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={[theme.textVariants.subheader, {color: theme.color.dark}]}>{item.loc}</Text>
                                    <Text style={theme.textVariants.caption}>{item.country}</Text>
                                </View>
                                <Image source={item.image} />
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contain: {
        marginHorizontal: theme.spacing.m,
    },
    header: {
        ...theme.textVariants.header,
        marginTop: theme.spacing.xl * 1.5,
        color: theme.color.dark,
    },
    body: {
        ...theme.textVariants.body,
        marginTop: theme.spacing.xs
    },
    btnline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.xs,
        marginTop: theme.spacing.xs,
        paddingVertical: theme.spacing.s,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.color.secondary
    },
    btntext: {
        ...theme.textVariants.body,
        textAlign: 'center',
        color: theme.color.dark
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
        textDecorationLine: 'none',
    },
})

export default Setloc;