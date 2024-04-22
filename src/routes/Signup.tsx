import { Text, Image, View, TouchableOpacity, ToastAndroid, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import Styles from '../Styles';

function Signup({navigation}: any): React.JSX.Element {
    function showToast(msg: string) {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView style={Styles.contain}>
            <Text style={[Styles.h1, {marginTop: 60, textAlign: "center"}]}>Welcome Back</Text>
            <Text style={[Styles.p, {marginBottom: 10, textAlign: "center"}]}>Please enter with the options we provide</Text>
            <View style={Styles.inpWrapper}>
              <Icon name="ri-mail-line" size="24" color="#e5e5e5" />
              <TextInput style={Styles.inpText} inputMode="email" placeholder="Email" />
            </View>
            <View style={Styles.inpWrapper}>
            <Icon name="ri-lock-line" size="24" color="#e5e5e5" />
              <TextInput style={Styles.inpText} inputMode="text" placeholder="Password" />
            </View>
            <Text style={{textAlign: "right", marginBottom: 10}}>Forgot password?</Text>
            <TouchableOpacity style={[Styles.btn, {backgroundColor: "#3C5B6F"}]} activeOpacity={0.9}
                onPress={() => navigation.navigate("Setloc")}
            >
                <Text style={[Styles.btnText, {color: "white"}]}>Signup</Text>
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
            <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "center", columnGap: 5}}>
                <Text>By Signup, I accept the</Text>
                <Text style={{fontWeight: "bold", color: "black"}}>Terms of service</Text>
                <Text>And</Text>
                <Text style={{fontWeight: "bold", color: "black"}}>Comunity guidles</Text>
                <Text>and have read</Text>
                <Text style={{fontWeight: "bold", color: "black"}}>Privacy policy</Text>
            </View>
        </SafeAreaView>
    )
}

export default Signup;