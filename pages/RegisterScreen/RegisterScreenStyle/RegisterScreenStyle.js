import { StyleSheet } from "react-native";

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
        textAlign: 'center'
      },
    input: {
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
    }
});

export default RegisterScreenStyles;