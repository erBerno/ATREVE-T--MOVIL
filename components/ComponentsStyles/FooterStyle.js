import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

const FooterStyle = StyleSheet.create({
    safeArea: {
        backgroundColor: COLORS.primary,
    },
    bottomContainer: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 50,
        backgroundColor: COLORS.primary,
    },
});

export default FooterStyle;