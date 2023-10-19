import { ScrollView, StyleSheet, View } from "react-native";
import HomeBar from "../components/HomeBar";
import BalanceButtons from "../components/BalanceButtons";
import Spacer from "../components/Spacer";
import ActionCardRow from "../components/ActionCardRow";
import { pageStyles } from "../styles/pageStyles";
import DoMore from "../components/DoMore";
import Logout from "../components/Logout";

const HomeScreen = () => {
	return (
		<ScrollView style={pageStyles.container}>
			<HomeBar />
			<BalanceButtons />
			<Spacer size={16} />
			<ActionCardRow />
			<Spacer size={32} />
			<DoMore />
			<Logout />

			{/* <BottomTabs /> */}
		</ScrollView>
	);
};

export default HomeScreen;
