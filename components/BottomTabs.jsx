import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
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
	TransactionsIcon,
} from "./svgs";
import { cloneElement } from "react";

const Tab = createBottomTabNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "green",
	},
};

const tabList = [
	{ name: "Home", component: HomeScreen, icon: HomeIcon },
	{ name: "Transactions", component: View, icon: TransactionsIcon },
	{ name: "Search", component: View, icon: SearchIcon },
	{ name: "Card", component: View, icon: CardIcon },
	{ name: "Profile", component: View, icon: ProfileIcon },
];

const BottomTabs = () => {
	return (
		<NavigationContainer theme={DarkTheme}>
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
				})}
			>
				{tabList.map((tab, ind) => (
					<Tab.Screen name={tab.name} component={tab.component} key={ind} />
				))}
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default BottomTabs;
