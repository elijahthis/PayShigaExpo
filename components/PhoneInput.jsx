import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { DropdownArrow } from "./svgs";
import { NavigationContainer, Drawer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home";

const PhoneInput = ({ navigation }) => {
	// const Drawer = createDrawerNavigator();

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("phoneModal")}>
				<View style={styles.countryCode}>
					<Text style={styles.countryCodeTxt}>+234</Text>
					<DropdownArrow />
				</View>
			</TouchableOpacity>
			<TextInput
				style={styles.textInput}
				placeholder="810 456 7789"
				placeholderTextColor="#A2A3A3"
				keyboardType="phone-pad"
			/>
		</View>
	);
};

export default PhoneInput;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 12,
	},
	countryCode: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
		paddingTop: 8,
	},
	countryCodeTxt: {
		color: "#ffffff",
		fontFamily: "Rubik_500Medium",
		fontSize: 20,
	},
	textInput: {
		fontFamily: "Rubik_500Medium",
		fontSize: 20,
		lineHeight: 28,
		color: "#FFFFFF",
		// paddingVertical: 8,
		flex: 1,
	},
});
