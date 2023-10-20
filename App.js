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
import { ShortStack_400Regular } from "@expo-google-fonts/short-stack";
import ShigaStackNavigator from "./navigation/ShigaStackNavigator";
import ShigaTabNavigator from "./navigation/ShigaTabNavigator";
import { useHookstate } from "@hookstate/core";
import { globalState } from "./state/hookSt";
import Toast from "react-native-toast-message";
import { toastConfig } from "./config/toastConfig";

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
				<Toast position="top" config={toastConfig} />
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
