import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: COLORS.background,
    },
    logo: {
        width: '100%', 
        height: '30%', 
        alignSelf: 'center', 
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: COLORS.secondary,
        fontFamily: FONTS.main,
      },
    button: {
        marginTop: 10,
        backgroundColor: COLORS.primary,
        color: COLORS.background,
    },
    registerText: {
        textAlign: 'center',
        marginTop: 20,
        color: COLORS.secondary,
    }
});

export default LoginScreenStyles;
