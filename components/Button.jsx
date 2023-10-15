import { Button, Pressable, StyleSheet, Text } from "react-native";

const CustomButton = ({ text = "Button", onPress, style, textStyle }) => {
	const styles = StyleSheet.create({
		pressable: {
			backgroundColor: "#6771FF",
			borderRadius: 8,
			padding: 16,

			flex: 1,
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			color: "white",
		},
	});

	return (
		<Pressable onPress={onPress} style={{ ...styles.pressable, ...style }}>
			<Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
		</Pressable>
	);
};

export default CustomButton;
