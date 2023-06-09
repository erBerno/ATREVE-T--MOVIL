import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

const RequestCardStyle = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.primary,
      },
      description: {
        marginTop: 5,
      },

});

export default RequestCardStyle;