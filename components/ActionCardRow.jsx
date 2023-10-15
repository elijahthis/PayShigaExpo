import { View, StyleSheet } from "react-native";
import ActionCard from "./ActionCard";

const ActionCardRow = () => {
	return (
		<View style={styles.container}>
			<ActionCard
				title="Bank Account"
				desc="Show account info"
				imgURL={require("../assets/icons/bank-icon.png")}
			/>
			<ActionCard
				title="Pay Bills"
				desc="Top-Up & utilities"
				imgURL={require("../assets/icons/send-icon.png")}
			/>
		</View>
	);
};

export default ActionCardRow;

const styles = StyleSheet.create({
	container: {
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
		gap: 12,
	},
});
