import {
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

const BottomModal = ({ visible, closeFunc, children }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={() => {
				closeFunc();
			}}
		>
			<TouchableWithoutFeedback
				onPress={() => {
					closeFunc();
				}}
			>
				<View style={styles.centeredView}>
					<View
						style={styles.modalView}
						onStartShouldSetResponder={(event) => true}
					>
						{children}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default BottomModal;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop: 22,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalView: {
		margin: 20,
		backgroundColor: "#131415",
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		height: "90%",
	},
});
