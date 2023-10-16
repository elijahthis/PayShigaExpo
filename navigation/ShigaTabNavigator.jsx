import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import BottomTabs from "../components/BottomTabs";

const ShigaTabNavigator = () => {
	return (
		<NavigationContainer theme={DarkTheme}>
			<BottomTabs />
		</NavigationContainer>
	);
};

export default ShigaTabNavigator;
