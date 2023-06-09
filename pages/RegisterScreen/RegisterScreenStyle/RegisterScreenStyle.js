import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

const RegisterScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: COLORS.secondary,
        fontFamily: FONTS.main,
      },
    input: {
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        backgroundColor: COLORS.primary,
        color: COLORS.background,
    },
});

export default RegisterScreenStyles;