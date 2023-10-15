import { TextInput } from "react-native";

const NumberInput = ({
	placeholder = "",
	placeholderTextColor = "#FFFFFF",
	style,
	keyboardType = "number-pad",
	value,
	onChangeText,
}) => {
	return (
		<TextInput
			placeholder={placeholder}
			style={style}
			placeholderTextColor={placeholderTextColor}
			keyboardType={keyboardType}
			value={value}
			onChangeText={(text) => onChangeText(text.replace(/[^0-9]/g, ""))}
		/>
	);
};

export default NumberInput;
