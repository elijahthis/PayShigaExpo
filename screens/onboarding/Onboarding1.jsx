import { Button, StyleSheet, View, Text } from "react-native";
import CustomButton from "../../components/Button";
import { OnboardingArrow } from "../../components/svgs";
import { pageStyles } from "../../styles/pageStyles";

const Onboarding1 = () => {
	return (
		<View style={pageStyles.container}>
			<View style={styles.btnWrap}>
				<View style={styles.arrowWrap}>
					<Text style={styles.arrowTxt}>click on “create an account”</Text>
					<OnboardingArrow />
				</View>
				<CustomButton
					text="Login"
					onPress={() => {}}
					textStyle={{ ...styles.btnTxt, fontSize: 17, color: "#ffffff" }}
					style={styles.transparent}
				/>
				<CustomButton
					text="Create an account"
					onPress={() => {}}
					textStyle={{ ...styles.btnTxt, fontSize: 17, color: "#0F0F10" }}
					style={styles.fill}
				/>
			</View>
		</View>
	);
};

export default Onboarding1;

const styles = StyleSheet.create({
	arrowWrap: { position: "absolute", left: -48, bottom: 105 },
	arrowTxt: {
		color: "#ffffff",
		fontFamily: "ShortStack_400Regular",
		fontSize: 16,
		lineHeight: 20,
		width: 143,
		textAlign: "center",
		transform: [{ rotate: "-16.119deg" }],

		position: "absolute",
		left: 55,
		top: -50,
	},
	btnWrap: {
		flexDirection: "column",
		gap: 16,
		marginHorizontal: 64,
		marginTop: "auto",
		marginBottom: 16,
		paddingBottom: 62,
		paddingTop: 16,
	},
	btnTxt: { fontSize: 17, height: 24, fontFamily: "Rubik_500Medium" },
	transparent: {
		backgroundColor: "transparent",
		borderColor: "#ffffff",
		borderWidth: 1,
		flex: "unset",
		borderRadius: "100px",
		paddingVertical: 10.5,
		paddingHorizontal: 16,
	},
	fill: {
		backgroundColor: "#ffffff",
		flex: "unset",
		borderRadius: "100px",
		paddingVertical: 10.5,
		paddingHorizontal: 16,
	},
});
