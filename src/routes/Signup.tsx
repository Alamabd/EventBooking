import { Text, Image, View, TouchableOpacity, ToastAndroid, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { theme } from '../Theme';

function Signup({navigation}: any): React.JSX.Element {
    function showToast(msg: string) {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView style={styles.contain}>
            <View>
                <Text style={styles.header}>Welcome Back</Text>
                <Text style={styles.body}>Please enter with the options we provide</Text>
                <View style={styles.inp}>
                    <Icon name="ri-mail-line" size="24" color="#e5e5e5" />
                    <TextInput style={styles.inptext} inputMode="email" placeholder="Email" />
                </View>
                <View style={styles.inp}>
                    <Icon name="ri-lock-line" size="24" color="#e5e5e5" />
                    <TextInput style={styles.inptext} inputMode="text" placeholder="Password" />
                </View>
                <Text style={{textAlign: "right", marginTop: theme.spacing.s}}>Forgot password?</Text>
                <TouchableOpacity style={styles.btnfill} activeOpacity={0.9}
                    onPress={() => navigation.navigate("Setloc")}>
                    <Text style={[styles.btntext, {color: "white"}]}>Signup</Text>
                </TouchableOpacity>
                <Text style={{textAlign: 'center', marginVertical: theme.spacing.xs}}>Or</Text>
                <TouchableOpacity style={styles.btnline} activeOpacity={0.9}
                    onPress={() => showToast("Continue with Google auth")}>
                    <Image source={require("../image/google.png")} style={styles.btnicon} />
                    <Text style={[styles.btntext, {color: "black"}]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnline} activeOpacity={0.9}
                    onPress={() => showToast("Continue with Apple auth")}>
                    <Image source={require("../image/apple.png")} style={styles.btnicon} />
                    <Text style={[styles.btntext, {color: "black"}]}>Continue with Apple</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: theme.spacing.m, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", columnGap: 5}}>
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

const styles = StyleSheet.create({
    contain: {
        marginHorizontal: theme.spacing.m,
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    header: {
        ...theme.textVariants.header,
        marginTop: theme.spacing.xl * 1.5,
        color: theme.color.dark,
        textAlign: 'center'
    },
    body: {
        ...theme.textVariants.body,
        marginHorizontal: theme.spacing.m,
        textAlign: "center"
    },
    img: {
        alignSelf: "center",
        height: '55%',
        objectFit: "contain"
    },
    btnfill: {
        marginTop: theme.spacing.xs,
        paddingVertical: theme.spacing.s,
        borderRadius: 10,
        backgroundColor: theme.color.primary
    },
    btnline: {
        marginTop: theme.spacing.xs,
        paddingVertical: theme.spacing.s,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.color.secondary
    },
    btntext: {
        ...theme.textVariants.body,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnicon: {
        position: 'absolute',
        top: 7,
        left: 7,
        width: 30,
        height: 30
    },
    inp: {
        flexDirection: "row",
        alignItems: "center",
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
        textDecorationLine: "none",
    },

})

export default Signup;