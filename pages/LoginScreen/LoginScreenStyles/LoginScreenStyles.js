import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    projectTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'blue'
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
    },
    registerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#000'
    }
});

export default LoginScreenStyles;