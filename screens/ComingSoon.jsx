import { View, Text, StyleSheet } from "react-native";
import { pageStyles } from "../styles/pageStyles";
import Spacer from "../components/Spacer";

const ComingSoon = () => {
	return (
		<View style={{ ...pageStyles.container, paddingTop: "25%" }}>
			<Text style={styles.title}>Coming Soon</Text>
			<Spacer size={16} />
			<Text style={styles.desc}>
				This feature is currently in the kitchen. Keep exploring.
			</Text>
		</View>
	);
};

export default ComingSoon;

const styles = StyleSheet.create({
	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#ffffff",
		textAlign: "center",
		fontFamily: "Rubik_700Bold",
	},
	desc: {
		fontSize: 16,
		color: "#ffffff",
		textAlign: "center",
		fontFamily: "Rubik_400Regular",
	},
});
