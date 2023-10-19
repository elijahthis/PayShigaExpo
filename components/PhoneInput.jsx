import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { DropdownArrow } from "./svgs";
import HomeScreen from "../screens/Home";
import { useHookstate } from "@hookstate/core";
import { globalState } from "../state/hookSt";
import PhoneCodeModal from "./PhoneCodeModal";
import { useState } from "react";

const PhoneInput = ({
	navigation,
	selectedCode,
	setSelectedCode,
	phoneNumber,
	setPhoneNumber,
}) => {
	const globalStateObj = useHookstate(globalState);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					console.log("open phone modal", globalStateObj.get());
					globalStateObj.set({
						...globalStateObj.get(),
						isPhoneModalVisible: true,
					});
				}}
			>
				<View style={styles.countryCode}>
					<Text style={styles.countryCodeTxt}>{selectedCode}</Text>
					<DropdownArrow />
				</View>
			</TouchableOpacity>
			<TextInput
				style={styles.textInput}
				placeholder="810 456 7789"
				placeholderTextColor="#A2A3A3"
				keyboardType="phone-pad"
				value={phoneNumber}
				onChangeText={(text) => setPhoneNumber(text)}
			/>
			<PhoneCodeModal
				selectedCode={selectedCode}
				setSelectedCode={setSelectedCode}
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
