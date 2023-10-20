import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import NumberInput from "../../components/NumberInput";
import { useState } from "react";
import CustomButton from "../../components/Button";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import { useHookstate } from "@hookstate/core";
import { globalState } from "../../state/hookSt";

const LoginScreen = ({ navigation }) => {
	const globalStateObj = useHookstate(globalState);

	const [userTag, setUserTag] = useState("");

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
				Login
			</Text>
			<Text style={styles.skipText}>Enter your unique user tag</Text>
			<View>
				<View style={styles.inputWrap}>
					<Text style={{ ...styles.textInput, paddingTop: 14 }}>@</Text>
					<TextInput
						placeholder="chiefcee"
						style={{ ...styles.textInput, flex: 1 }}
						placeholderTextColor="#454647"
						value={userTag}
						onChangeText={(text) => setUserTag(text)}
					/>
				</View>
			</View>
			<View style={styles.btnWrap}>
				<CustomButton
					text="Login"
					onPress={() => {
						globalStateObj.set({
							...globalStateObj.get(),
							currentFlow: "login",
							shiga_id: userTag,
						});

						navigation.navigate("OTPCodePage");
					}}
					disabled={userTag.length < 3}
				/>
			</View>
		</OnboardingLayout>
	);
};

export default LoginScreen;

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

	btnWrap: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
		marginTop: "auto",
		paddingVertical: 16,
	},
});
