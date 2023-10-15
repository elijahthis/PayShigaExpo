import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeBar = () => {
	return (
		<View style={styles.container}>
			<View style={styles.avatar}>
				<Text style={{ fontFamily: "Rubik_700Bold" }}>CC</Text>
			</View>
			<Text style={styles.text}>Home</Text>
			<Icon
				name="scan"
				color="white"
				size={24}
				// onPress={this.loginWithFacebook}
			/>
		</View>
	);
};

export default HomeBar;

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingBottom: 12,
		paddingLeft: 24,
		paddingRight: 24,
		flexDirection: "row",
		alignItems: "center",
		gap: 9,
		marginBottom: 32,
	},
	avatar: {
		color: "#10120F",
		backgroundColor: "#FFC8DD",
		width: 32,
		height: 32,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "50%",
	},
	text: {
		textAlign: "center",
		color: "white",
		paddingLeft: 20,
		marginRight: "auto",

		fontFamily: "Rubik_500Medium",
		fontSize: 24,
		fontWeight: 500,
		height: 32,
	},
	button: {},
});
