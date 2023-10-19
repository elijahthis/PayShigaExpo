import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import HomeScreen from "../screens/Home";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import {
	CardIcon,
	HomeIcon,
	ProfileIcon,
	SearchIcon,
	SearchIcon2,
	TransactionsIcon,
} from "./svgs";
import { cloneElement } from "react";
import ComingSoon from "../screens/ComingSoon";

const Tab = createBottomTabNavigator();

const tabList = [
	{ name: "Home", component: HomeScreen, icon: HomeIcon },
	{ name: "Transactions", component: ComingSoon, icon: TransactionsIcon },
	{ name: "Search", component: ComingSoon, icon: SearchIcon2 },
	{ name: "Card", component: ComingSoon, icon: CardIcon },
	{ name: "Profile", component: ComingSoon, icon: ProfileIcon },
];

const BottomTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: "#ffffff",
				tabBarInactiveTintColor: "#A2A3A3",
				tabBarShowLabel: false,
				tabBarIcon: HomeIcon,
				tabBarIcon: ({ focused, color, size }) => {
					return cloneElement(
						tabList
							.filter((item) => item.name === route.name)[0]
							.icon({ color })
					);
				},
				tabBarStyle: {
					paddingBottom: 9,
					paddingTop: 10,
					paddingLeft: 28,
					paddingRight: 28,
					backgroundColor: "#171819",
				},
			})}
		>
			{tabList.map((tab, ind) => (
				<Tab.Screen name={tab.name} component={tab.component} key={ind} />
			))}
		</Tab.Navigator>
	);
};

export default BottomTabs;
