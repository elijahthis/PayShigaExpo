import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import CustomButton from "../../components/Button";
import OnboardingLayout from "../../layouts/OnboardingLayout";

const UserTagPage = ({ navigation }) => {
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
				Choose a Shiga ID
			</Text>
			<Text style={styles.skipText}>
				Your unique name for getting paid by anyone
			</Text>
			<View style={styles.inputWrap}>
				<Text style={{ ...styles.textInput, paddingTop: 14 }}>@</Text>
				<TextInput
					placeholder="chiefcee"
					style={{ ...styles.textInput, flex: 1 }}
					placeholderTextColor="#454647"
					value={code}
					onChangeText={(text) => setCode(text)}
				/>
			</View>
			<View style={styles.btnWrap}>
				<CustomButton
					text="Continue"
					onPress={() => {
						navigation.navigate("DisplayImagePage");
					}}
				/>
			</View>
		</OnboardingLayout>
	);
};

export default UserTagPage;

const styles = StyleSheet.create({
	title: "",
	skipText: {
		fontFamily: "Rubik_500Medium",
		fontSize: 16,
		lineHeight: 22,
		color: "#A2A3A3",
		marginBottom: 32,
	},
	inputWrap: {
		marginBottom: 16,
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	textInput: {
		fontFamily: "Rubik_500Medium",
		fontSize: 20,
		lineHeight: 28,
		color: "#FFFFFF",
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
