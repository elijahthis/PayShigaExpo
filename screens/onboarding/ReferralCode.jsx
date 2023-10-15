import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { ReferralCodeIcon } from "../../components/svgs";
import { pageStyles } from "../../styles/pageStyles";
import Spacer from "../../components/Spacer";
import NumberInput from "../../components/NumberInput";
import { useState } from "react";

const ReferralCode = () => {
	const [code, setCode] = useState("");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View
				style={{
					...pageStyles.container,
					paddingHorizontal: 40,
					paddingTop: 12,
					paddingBottom: 16,
				}}
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
			</View>
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
});