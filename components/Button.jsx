import { Button, Pressable, StyleSheet, Text } from "react-native";

const CustomButton = ({
	text = "Button",
	onPress,
	style,
	textStyle,
	disabled = false,
}) => {
	const styles = StyleSheet.create({
		pressable: {
			backgroundColor: "#6771FF",
			borderRadius: 100,
			paddingVertical: 11.5,
			paddingHorizontal: 16,

			flex: 1,
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			color: "white",
			fontFamily: "Rubik_500Medium",
			fontSize: 17,
			lineHeight: 24,
		},
	});

	return (
		<Pressable
			onPress={onPress}
			style={{ ...styles.pressable, ...style, opacity: disabled ? 0.4 : 1 }}
			disabled={disabled}
		>
			<Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
		</Pressable>
	);
};

export default CustomButton;
