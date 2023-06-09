import { StyleSheet } from "react-native"; 
import { COLORS } from "../../../themes";

const DonationScreenStyle = StyleSheet.create({
    safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background, 
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary, 
    marginTop: 20,
    marginBottom: 20,
  },
  switchContainer: {
    marginBottom: 10,
    width: 200, 
  },
  switchText: {
    color: COLORS.secondary, 
    marginBottom: 5,
  },
  switch: {
    transform: [{scaleX: 0.75}, {scaleY: 0.75}], 
  },
  inputContainer: {
    marginBottom: 10,
    width: 200, 
  },
  inputLabel: {
    color: COLORS.secondary, 
    marginBottom: 5,
  },
  input: {
    backgroundColor: COLORS.primary, 
    borderRadius: 4, 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 200, 
  },
  mapText: {
    color: COLORS.primary, 
    marginBottom: 10,
    width: 200, 
  },
  map: {
    width: 200, 
    height: 150, 
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200, 
  },
  datePickerText: {
    color: COLORS.secondary, 
  },
  donationButton: {
    backgroundColor: COLORS.primary, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50, 
    width: '100%', 
    height: '8%', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  donationButtonText: {
    color: COLORS.background, 
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadingText: {
    color: COLORS.background, 
  },
});

export default DonationScreenStyle;