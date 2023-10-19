import { View, Text, StyleSheet, Pressable } from "react-native";
import NumberInput from "../../components/NumberInput";
import { useState } from "react";
import CustomButton from "../../components/Button";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import { useHookstate } from "@hookstate/core";
import { globalState } from "../../state/hookSt";
import Toast from "react-native-toast-message";

const OTPCodePage = ({ navigation }) => {
	const globalStateObj = useHookstate(globalState);

	const [code, setCode] = useState("");

	return (
		<OnboardingLayout navigation={navigation}>
			<Text
				style={{
					fontFamily: "Rubik_500Medium",
					fontSize: 24,
					lineHeight: 33,
					color: "#ffffff",
					marginBottom: 4,
					paddingBottom: 8,
				}}
			>
				We sent you a code
			</Text>
			<Text style={styles.skipText}>Enter the code we sent to your number</Text>
			<View>
				<NumberInput
					placeholder="000 000"
					style={styles.textInput}
					placeholderTextColor="#454647"
					keyboardType="number-pad"
					value={code}
					onChangeText={(text) => setCode(text)}
				/>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
					<Text style={styles.infoLink}>Didn’t get that code?</Text>
					<Pressable>
						<Text style={{ color: "#6771FF" }}>Resend</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.btnWrap}>
				<CustomButton
					text="Continue"
					onPress={() => {
						if (globalStateObj.get().currentFlow === "register")
							navigation.navigate("UserTagPage");
						else {
							globalStateObj.set({
								...globalStateObj.get(),
								isLoggedIn: true,
							});
							Toast.show({
								type: "success",
								text1: "Login successful",
							});
						}
					}}
					disabled={code.length !== 6}
				/>
			</View>
		</OnboardingLayout>
	);
};

export default OTPCodePage;

const styles = StyleSheet.create({
	title: "",
	skipText: {
		fontFamily: "Rubik_500Medium",
		fontSize: 16,
		lineHeight: 22,
		color: "#A2A3A3",
		marginBottom: 32,
	},
	textInput: {
		fontFamily: "Rubik_500Medium",
		fontSize: 20,
		lineHeight: 28,
		color: "#FFFFFF",
		marginBottom: 16,
		paddingVertical: 8,
	},
	infoLink: {
		fontFamily: "Rubik_500Medium",
		fontSize: 14,
		lineHeight: 19,
		color: "#A2A3A3",
	},

	btnWrap: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
		marginTop: "auto",
		paddingVertical: 16,
	},
});
