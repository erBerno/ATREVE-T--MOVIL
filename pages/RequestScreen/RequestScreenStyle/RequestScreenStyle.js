import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

const RequestScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.secondary,
    fontFamily: FONTS.main,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 25,
  },
  button: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.background,
    fontSize: 16,
    fontFamily: FONTS.main,
  },
  scrollContainer: {
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.secondary,
    fontFamily: FONTS.main,
    marginBottom: 10,
  }
});

export default RequestScreenStyle;
