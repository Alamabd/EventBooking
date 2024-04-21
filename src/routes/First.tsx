import { Text, Image, View, TouchableOpacity, ToastAndroid } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../Styles';

function First({navigation}: any): React.JSX.Element {
    function showToast(msg: string) {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView style={Styles.contain}>
            <Text style={[Styles.h1, {marginTop: 20, textAlign: "center"}]}>Let`s Get Started</Text>
            <Text style={[Styles.p, {textAlign: "center"}]}>Signup or log in to se what happening near you</Text>
            <Image source={require("../image/el_booking.jpg")} style={Styles.img} />
            <TouchableOpacity style={[Styles.btn, {backgroundColor: "#3C5B6F"}]} activeOpacity={0.9}
                onPress={() => navigation.navigate("Signup")}
            >
                <Text style={[Styles.btnText, {color: "white"}]}>Continue with Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.btn, {borderColor: "#e5e5e5", borderWidth: 1}]} activeOpacity={0.9}
                onPress={() => showToast("Continue with Google auth")}
            >
                <Image source={require("../image/google.png")} style={Styles.icon} />
                <Text style={[Styles.btnText, {color: "black"}]}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.btn, {borderColor: "#e5e5e5", borderWidth: 1}]} activeOpacity={0.9}
                onPress={() => showToast("Continue with Apple auth")}
            >
                <Image source={require("../image/apple.png")} style={Styles.icon} />
                <Text style={[Styles.btnText, {color: "black"}]}>Continue with Apple</Text>
            </TouchableOpacity>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <Text>Don`t have a account? </Text>
                <Text style={Styles.link}>Sign up</Text>
            </View>
        </SafeAreaView>
    )
}

export default First;