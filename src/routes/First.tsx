import { Text, Image, View, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../Theme';

function First({navigation}: any): React.JSX.Element {
    function showToast(msg: string) {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView style={styles.contain}>
            <View>
                <Text style={styles.header}>Let`s Get Started</Text>
                <Text style={styles.body}>Signup or log in to se what happening near you</Text>
                <Image style={styles.img} source={require('../image/el_booking.jpg')} />
                <TouchableOpacity style={styles.btnfill} activeOpacity={0.9}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={[styles.btnText, {color: theme.color.light}]}>Continue with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnline} activeOpacity={0.9}
                    onPress={() => showToast('Continue with Google auth')}>
                    <Image style={styles.btnicon} source={require('../image/google.png')} />
                    <Text style={[styles.btnText, {color: theme.color.dark}]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnline} activeOpacity={0.9}
                    onPress={() => showToast('Continue with Apple auth')}>
                    <Image style={styles.btnicon} source={require('../image/apple.png')} />
                    <Text style={[styles.btnText, {color: theme.color.dark}]}>Continue with Apple</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={theme.textVariants.body}>Don`t have a account? </Text>
                <Text style={[theme.textVariants.body, {color: theme.color.danger}]}>Sign up</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contain: {
        marginHorizontal: theme.spacing.l,
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    header: {
        ...theme.textVariants.header,
        marginTop: theme.spacing.l,
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
        marginBottom: theme.spacing.xs,
        paddingVertical: theme.spacing.s,
        borderRadius: 10,
        backgroundColor: theme.color.primary
    },
    btnline: {
        marginBottom: theme.spacing.xs,
        paddingVertical: theme.spacing.s,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.color.secondary
    },
    btnText: {
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
    }
})

export default First;