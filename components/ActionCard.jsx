import { View, Image, StyleSheet, Text } from "react-native";

const ActionCard = ({ imgURL = "", title, desc }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={imgURL} />
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.desc}>{desc}</Text>
		</View>
	);
};

export default ActionCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#171819",
		borderRadius: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 20,
		paddingBottom: 20,
		flex: 1,
		height: 176,
	},
	image: {
		marginBottom: "auto",
	},
	title: {
		fontFamily: "Rubik_500Medium",
		fontSize: 16,
		height: 22,
		color: "#FFFFFF",
	},
	desc: {
		fontFamily: "Rubik_500Medium",
		fontSize: 14,
		height: 19,
		color: "#6F6F6F",
	},
});
