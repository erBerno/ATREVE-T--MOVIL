import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

const InformationScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background, // replace with the color of your choice
      },
      image: {
        aspectRatio: 9 / 5,
        width: '100%',
      },
      content: {
        padding: 10,
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.primary,
      },
      dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      dateText: {
        color: COLORS.secondary,
        fontSize: 20,
      },
      texts: {
        fontSize: 20,
        color: COLORS.secondary,
      },
      button: {
        backgroundColor: COLORS.primary,
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        position: 'absolute',
        bottom: 10,
        borderRadius: 50,
        width: '90%',
        height: 50,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },

});

export default InformationScreenStyle;