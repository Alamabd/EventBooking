import { Text, Image, View, TouchableOpacity, ToastAndroid, TextInput, ImageSourcePropType } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import Styles from '../Styles';

function Setloc({navigation}: any): React.JSX.Element {
    type listLocType = {
        loc: string,
        country: string,
        image: ImageSourcePropType
    }[];

    const listLoc: listLocType = [
        {
            loc: "Jakarta",
            country: "Indonesia, jakarta",
            image: require("../image/map0.png")
        },
        {
            loc: "Lampung Selatan",
            country: "Indonesia, lampung",
            image: require("../image/map1.png")
        },
        {
            loc: "Bandar Lampung",
            country: "Indonesia, lampung",
            image: require("../image/map2.png")
        }
    ]

    return (
        <SafeAreaView style={Styles.contain}>
          
            <Text style={[Styles.h1, {marginTop: 60}]}>Choose your location</Text>
            <Text style={[Styles.p, {marginBottom: 10}]}>Let`s find your unforgettable event. Choose a location bellow to get started</Text>
            <View style={{marginTop: 20}}>
                <View style={Styles.inpWrapper}>
                    <Icon name="ri-map-pin-fill" size="24" color="#3C5B6F" />
                    <TextInput style={Styles.inpText} inputMode="search" placeholder="Search event in..." />
                </View>
                <TouchableOpacity style={[Styles.btnicon]} activeOpacity={0.9}
                    onPress={() => navigation.navigate("TabBottom")}
                    >
                    <Icon name="ri-focus-3-line" size={24} color="#000" />
                    <Text style={[Styles.btnText, {color: "black"}]}>Use my current location</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{fontWeight: "bold", fontSize: 16}}>Recomended location</Text>
                {listLoc.map((val, idx) => {
                    return (
                        <View key={idx} style={{
                            marginTop: 20,
                            padding: 15,
                            borderWidth: 1,
                            borderColor: "#e5e5e5",
                            borderRadius: 10,
                            flexDirection: "row", 
                            justifyContent: "space-between"
                        }}>
                            <View>
                                <Text style={Styles.h2}>{val.loc}</Text>
                                <Text style={Styles.p}>{val.country}</Text>
                            </View>
                            <Image source={val.image} />
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default Setloc;