import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";
import { ReferralCodeIcon } from "../../components/svgs";
import { pageStyles } from "../../styles/pageStyles";
import NumberInput from "../../components/NumberInput";
import { useState } from "react";
import CustomButton from "../../components/Button";
import { useHookstate } from "@hookstate/core";
import { globalState } from "../../state/hookSt";

const ReferralCode = ({ navigation }) => {
	const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
	const globalStateObj = useHookstate(globalState);

	const [code, setCode] = useState("");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={{
					...pageStyles.container,
					paddingHorizontal: 40,
					paddingTop: 12,
					paddingBottom: 16,
				}}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={keyboardVerticalOffset}
			>
				<ReferralCodeIcon style={{ marginBottom: 20 }} />
				<Text
					style={{
						fontFamily: "Rubik_500Medium",
						fontSize: 24,
						lineHeight: 33,
						color: "#ffffff",
						marginBottom: 4,
						paddingVertical: 8,
					}}
				>
					Enter referrel code
				</Text>
				<Text style={styles.skipText}>“Skip” if you don’t have any code</Text>
				<View>
					<NumberInput
						placeholder="CODE"
						style={styles.textInput}
						placeholderTextColor="#454647"
						keyboardType="number-pad"
						value={code}
						onChangeText={(text) => setCode(text)}
					/>
					<Text style={styles.infoLink}>
						TAP to find how they find their code?
					</Text>
				</View>
				<View style={styles.btnWrap}>
					<CustomButton
						text="Skip"
						onPress={() => {
							navigation.navigate("PhoneNumberPage");
						}}
						// textStyle={{ ...styles.btnTxt, fontSize: 17, color: "#ffffff" }}
						style={{ backgroundColor: "#1F2021" }}
					/>
					<CustomButton
						text="Continue"
						onPress={() => {
							navigation.navigate("PhoneNumberPage");

							globalStateObj.set({
								...globalStateObj.get(),
								referral_code: code,
							});
						}}
						// textStyle={{ ...styles.btnTxt, fontSize: 17, color: "#ffffff" }}
						// style={styles.transparent}
						disabled={code.length !== 6}
					/>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default ReferralCode;

const styles = StyleSheet.create({
	title: "",
	skipText: {
		fontFamily: "Rubik_500Medium",
		fontSize: 16,
		lineHeight: 22,
		color: "#A2A3A3",
		marginBottom: 40,
	},
	textInput: {
		fontFamily: "Rubik_500Medium",
		fontSize: 20,
		lineHeight: 28,
		color: "#FFFFFF",
		marginBottom: 16,
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
