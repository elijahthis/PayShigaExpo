import { StyleSheet, Text, View } from "react-native";
import Spacer from "./Spacer";
import CustomButton from "./Button";
import { globalState } from "../state/hookSt";
import { useHookstate } from "@hookstate/core";

const BalanceButtons = () => {
	const globalStateObj = useHookstate(globalState);

	return (
		<View style={styles.container}>
			<Spacer size={16} />
			<View style={{ paddingLeft: 16, paddingRight: 16 }}>
				<View>
					<Text style={{ color: "white" }}>NGN Balance</Text>
					<View></View>
				</View>
				<Spacer size={12} />
				<Text style={styles.balance}>₦95,800.05</Text>
				<Spacer size={32} />
				<View style={styles.buttons}>
					<CustomButton
						text="Add Money"
						style={styles.button}
						onPress={() => {
							globalStateObj.set({
								...globalStateObj.get(),
								isLoggedIn: false,
							});
						}}
					/>
					<CustomButton text="Transfer" style={styles.button} />
				</View>
			</View>
			<Spacer size={16} />
		</View>
	);
};

export default BalanceButtons;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#171819",
		borderRadius: 16,
		marginLeft: 20,
		marginRight: 20,
	},
	balanceText: {
		fontSize: 16,
		height: 22,
		fontFamily: "Rubik_500Medium",
	},
	balance: {
		fontFamily: "Rubik_500Medium",
		color: "#FFFFFF",
		fontSize: 38,
		height: 53,
	},
	buttons: {
		flexDirection: "row",
		gap: 13,
	},
	button: {
		flex: 1,
		borderRadius: 100,
		backgroundColor: "#454647",
		paddingTop: 11.5,
		paddingBottom: 11.5,
		paddingLeft: 16,
		paddingRight: 16,
	},
	buttonText: {
		color: "white",
		fontFamily: "Rubik_500Medium",
		fontSize: 17,
		textAlign: "center",
		height: 24,
	},
});
