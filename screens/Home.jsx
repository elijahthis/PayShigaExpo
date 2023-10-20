import { ScrollView, StyleSheet, Text, View } from "react-native";
import HomeBar from "../components/HomeBar";
import BalanceButtons from "../components/BalanceButtons";
import Spacer from "../components/Spacer";
import ActionCardRow from "../components/ActionCardRow";
import { pageStyles } from "../styles/pageStyles";
import DoMore from "../components/DoMore";
import Logout from "../components/Logout";
import { useHookstate } from "@hookstate/core";
import { globalState } from "../state/hookSt";

const HomeScreen = () => {
	const globalStateObj = useHookstate(globalState);

	return (
		<ScrollView style={pageStyles.container}>
			<HomeBar />
			<Text
				style={{
					color: "white",
					paddingHorizontal: 24,
					fontSize: 24,
					fontFamily: "Rubik_600SemiBold",
					marginBottom: 16,
				}}
			>
				Welcome{" "}
				{globalStateObj.value.shiga_id
					? `@${globalStateObj.value.shiga_id}`
					: "User"}
			</Text>
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
