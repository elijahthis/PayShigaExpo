import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Pressable,
} from "react-native";
import {
	AddIcon,
	ImageArrow,
	ImageIcon,
	ReferralCodeIcon,
} from "../../components/svgs";
import { pageStyles } from "../../styles/pageStyles";
import Spacer from "../../components/Spacer";
import NumberInput from "../../components/NumberInput";
import { useState } from "react";
import CustomButton from "../../components/Button";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import ImageUpload from "../../components/ImageUpload";
import { useHookstate } from "@hookstate/core";
import { globalState } from "../../state/hookSt";

const DisplayImagePage = ({ navigation }) => {
	const colorList = [
		"#4B92F7",
		"#75E6C0",
		"#EB5149",
		"#59C1E9",
		"#E862BC",
		"#F4D957",
		"#E26F3F",
		"#9F40F5",
	];

	const globalStateObj = useHookstate(globalState);

	const [selectedColor, setSelectedColor] = useState("");

	return (
		<OnboardingLayout navigation={navigation}>
			<View>
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
					Set a Display Image
				</Text>
				<Text style={styles.skipText}>
					Choose a image for your wallet profile. You can always change this
					later
				</Text>
			</View>
			<View style={styles.imgWrap}>
				<ImageUpload selectedColor={selectedColor} />
			</View>
			<View style={styles.colorBottom}>
				<Text style={styles.customizeTxt}>or customize</Text>
				<View style={styles.colorWrap}>
					<View style={styles.arrowWrap}>
						<Text style={styles.arrowTxt}>Use this</Text>
						<ImageArrow />
					</View>
					{colorList.map((item, ind) => (
						<Pressable
							key={ind}
							style={{ ...styles.colorButton, backgroundColor: item }}
							onPress={() => setSelectedColor(item)}
						></Pressable>
					))}
				</View>
			</View>
			<View style={styles.btnWrap}>
				<CustomButton
					text="Continue"
					onPress={() => {
						globalStateObj.set({
							...globalStateObj.get(),
							isLoggedIn: true,
						});
					}}
				/>
			</View>
		</OnboardingLayout>
	);
};

export default DisplayImagePage;

const styles = StyleSheet.create({
	title: "",
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
