import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    contain: {
        marginHorizontal: 30
    },  
    h1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    h2: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    p: {
        fontSize: 14,
    },
    img: {
        alignSelf: "center",
        height: '60%',
        objectFit: "contain"
    },
    btn: {
        paddingVertical: 12,
        marginBottom: 10,
        borderRadius: 10,
    },
    btnText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "400"
    },
    btnicon: {
        paddingVertical: 12,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: "#e5e5e5",
    },
    inpWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e5e5e5",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    inpText: {
        marginStart: 10,
        flex: 1,
        fontSize: 16,
        fontWeight: "400",
        padding: 0,
        textDecorationLine: "none",
    },
    icon: {
        position: 'absolute',
        top: 7,
        left: 7,
        width: 30,
        height: 30
    },
    link: {
        color: "red"
    }
});


export default Styles;