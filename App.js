import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
	useFonts,
	Rubik_400Regular,
	Rubik_500Medium,
	Rubik_600SemiBold,
	Rubik_700Bold,
	Rubik_800ExtraBold,
	Rubik_900Black,
} from "@expo-google-fonts/rubik";
import {
	ShortStack_400Regular,
	ShortStack_700Bold,
} from "@expo-google-fonts/short-stack";
import BottomTabs from "./components/BottomTabs";
import HomeScreen from "./screens/Home";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import ShigaStackNavigator from "./navigation/ShigaStackNavigator";
import ShigaTabNavigator from "./navigation/ShigaTabNavigator";
import { useHookstate } from "@hookstate/core";
import { globalState } from "./state/hookSt";

export default function App() {
	const globalStateObj = useHookstate(globalState);

	let [fontsLoaded, fontError] = useFonts({
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_600SemiBold,
		Rubik_700Bold,
		Rubik_800ExtraBold,
		Rubik_900Black,
		ShortStack_400Regular,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<SafeAreaView style={styles.container}>
			{globalStateObj.value.isLoggedIn ? (
				<ShigaTabNavigator />
			) : (
				<ShigaStackNavigator />
			)}
		</SafeAreaView>
	);
}

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
