import { StyleSheet, View, Text } from "react-native";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import PhoneInput from "../../components/PhoneInput";
import CustomButton from "../../components/Button";
import { useHookstate } from "@hookstate/core";
import { globalState } from "../../state/hookSt";
import { useState } from "react";

const PhoneNumberPage = ({ navigation }) => {
	const globalStateObj = useHookstate(globalState);
	const [selectedCode, setSelectedCode] = useState("+234");
	const [phoneNumber, setPhoneNumber] = useState("");

	return (
		<OnboardingLayout navigation={navigation}>
			<View>
				<Text style={styles.title}>Enter your phone number</Text>
				<Text style={styles.skipText}>
					We will send you a verification code to confirm this is your number
				</Text>
			</View>
			<PhoneInput
				selectedCode={selectedCode}
				setSelectedCode={setSelectedCode}
				phoneNumber={phoneNumber}
				setPhoneNumber={setPhoneNumber}
			/>
			<View style={styles.btnWrap}>
				<CustomButton
					text="Continue"
					onPress={() => {
						globalStateObj.set({
							...globalStateObj.get(),
							currentFlow: "register",
						});

						navigation.navigate("OTPCodePage");
					}}
					disabled={phoneNumber.length < 10}
				/>
			</View>
		</OnboardingLayout>
	);
};

export default PhoneNumberPage;

const styles = StyleSheet.create({
	title: {
		fontFamily: "Rubik_500Medium",
		fontSize: 24,
		lineHeight: 33,
		color: "#ffffff",
		marginBottom: 4,
		paddingBottom: 8,
	},
	skipText: {
		fontFamily: "Rubik_500Medium",
		fontSize: 16,
		lineHeight: 22,
		color: "#A2A3A3",
		marginBottom: 40,
	},
	imgWrap: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
	},

	colorBottom: {
		flexDirection: "column",
		alignItems: "stretch",
		paddingTop: 40,
	},
	arrowWrap: { position: "absolute", left: -24, top: -46 },
	arrowTxt: {
		color: "#ffffff",
		fontFamily: "ShortStack_400Regular",
		fontSize: 16,
		lineHeight: 20,
		width: 74,
		textAlign: "center",
		transform: [{ rotate: "-16.119deg" }],

		position: "absolute",
		left: 26,
		top: -36,
	},
	colorWrap: {
		paddingVertical: 16,
		flexDirection: "row",
		// columnGap: 16,
		rowGap: 32,
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	colorButton: {
		width: 56,
		height: 56,
		borderRadius: "50%",
		marginHorizontal: 8,
	},
	customizeTxt: {
		color: "#ffffff",
		fontFamily: "Rubik_500Medium",
		fontSize: 16,
		lineHeight: 22,
		textAlign: "center",
		marginBottom: 12,
	},

	btnWrap: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
		marginTop: "auto",
		paddingTop: 40,
		paddingBottom: 12,
	},
});
