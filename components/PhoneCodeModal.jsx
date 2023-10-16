import { Text, View } from "react-native";

const PhoneCodeModal = () => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 30 }}>This is a modal!</Text>
			{/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
		</View>
	);
};

export default PhoneCodeModal;
