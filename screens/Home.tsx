import { StyleSheet, View } from "react-native";
import HomeBar from "../components/HomeBar";
import BalanceButtons from "../components/BalanceButtons";
import Spacer from "../components/Spacer";
import ActionCardRow from "../components/ActionCardRow";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<HomeBar />
			<BalanceButtons />
			<Spacer size={16} />
			<ActionCardRow />
			{/* <BottomTabs /> */}
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0F0F10",
		color: "#ffffff",
	},
	text: {},
	button: {
		// textAlign: "center",
	},
});
