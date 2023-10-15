import { StyleSheet, View } from "react-native";
import HomeBar from "../components/HomeBar";
import BalanceButtons from "../components/BalanceButtons";
import Spacer from "../components/Spacer";
import ActionCardRow from "../components/ActionCardRow";
import { pageStyles } from "../styles/pageStyles";

const HomeScreen = () => {
	return (
		<View style={pageStyles.container}>
			<HomeBar />
			<BalanceButtons />
			<Spacer size={16} />
			<ActionCardRow />
			{/* <BottomTabs /> */}
		</View>
	);
};

export default HomeScreen;
