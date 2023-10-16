import { useHookstate } from "@hookstate/core";
import { StyleSheet, Text, View } from "react-native";
import { globalState } from "../state/hookSt";
import BottomModal from "./BottomModal";

const PhoneCodeModal = () => {
	const globalStateObj = useHookstate(globalState);

	return (
		<BottomModal
			visible={globalStateObj.get().isPhoneModalVisible}
			closeFunc={() => {
				globalStateObj.set({
					...globalStateObj.get(),
					isPhoneModalVisible: false,
				});
			}}
		>
			<Text style={styles.modalText}>Hello World!</Text>
		</BottomModal>
	);
};

export default PhoneCodeModal;

const styles = StyleSheet.create({
	modalText: {
		color: "white",
		fontSize: 40,
		marginBottom: 15,
	},
});
