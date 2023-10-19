import { useHookstate } from "@hookstate/core";
import CustomButton from "./Button";
import { globalState } from "../state/hookSt";
import { View } from "react-native";
import Toast from "react-native-toast-message";

const Logout = () => {
	const globalStateObj = useHookstate(globalState);

	return (
		<View style={{ paddingVertical: 40, paddingHorizontal: 24 }}>
			<CustomButton
				text="Logout 😒"
				onPress={() => {
					globalStateObj.set({
						...globalStateObj.get(),
						isLoggedIn: false,
					});
					Toast.show({
						type: "success",
						text1: "Logout successful",
					});
				}}
				style={{ backgroundColor: "#FF0000" }}
			/>
		</View>
	);
};

export default Logout;
