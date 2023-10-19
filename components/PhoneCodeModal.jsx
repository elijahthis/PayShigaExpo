import { useHookstate } from "@hookstate/core";
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { globalState } from "../state/hookSt";
import BottomModal from "./BottomModal";
import { CloseModalIcon, SearchIcon } from "./svgs";
import SearchBar from "./SearchBar";
import { countryCodeList } from "../data/country-code-list-with-flags";
import { ellipsisTruncation } from "../helpers";
import { useState } from "react";

const PhoneCodeModal = ({ selectedCode, setSelectedCode }) => {
	const globalStateObj = useHookstate(globalState);
	const [searchText, setSearchText] = useState("");

	return (
		<BottomModal
			visible={globalStateObj.get().isPhoneModalVisible}
			closeFunc={() => {
				globalStateObj.set({
					...globalStateObj.get(),
					isPhoneModalVisible: false,
				});
			}}
		>
			<View style={styles.header}>
				<Text style={styles.headerTxt}>Select Country</Text>
				<CloseModalIcon
					onPress={() => {
						globalStateObj.set({
							...globalStateObj.get(),
							isPhoneModalVisible: false,
						});
					}}
				/>
			</View>
			<View style={{ width: "100%", marginBottom: 20 }}>
				<SearchBar />
			</View>
			<ScrollView style={{ flex: 1 }}>
				<TouchableWithoutFeedback style={{ width: "100%" }}>
					<View style={{ width: "100%" }}>
						{countryCodeList.map((country) => (
							<CountryItem
								country={country}
								key={country.code}
								selected={selectedCode === country.dial_code}
								onSelect={() => {
									console.log(country.dial_code);
									setSelectedCode(country.dial_code);
									globalStateObj.set({
										...globalStateObj.get(),
										isPhoneModalVisible: false,
									});
								}}
							/>
						))}
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
		</BottomModal>
	);
};

const CountryItem = ({ country, selected, onSelect }) => (
	<TouchableOpacity
		style={{
			...styles.CountryItem,
			...(selected && { backgroundColor: "#6771FF" }),
		}}
		onPress={onSelect}
	>
		<Text style={styles.CountryItem__emoji}>{country.emoji}</Text>
		<Text style={styles.CountryItem__name}>
			{ellipsisTruncation(country.name, 20)}
		</Text>
		<Text style={styles.CountryItem__dial_code}>{country.dial_code}</Text>
	</TouchableOpacity>
);

export default PhoneCodeModal;

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBottom: 20,

		paddingTop: 30,
		paddingBottom: 20,
		paddingHorizontal: 32,
	},
	headerTxt: {
		color: "#FFFFFF",
		fontFamily: "Rubik_500Medium",
		fontSize: 18,
		lineHeight: 25,
	},

	CountryItem: {
		width: "100%",
		// flex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		// paddingHorizontal: 28,
		paddingVertical: 16,
	},
	CountryItem__emoji: {
		fontSize: 40,
	},
	CountryItem__name: {
		color: "#FFFFFF",
		marginLeft: 4,
		fontFamily: "Rubik_500Medium",
		fontSize: 17,
		lineHeight: 24,
	},
	CountryItem__dial_code: {
		color: "#A2A3A3",
		fontFamily: "Rubik_500Medium",
		fontSize: 17,
		lineHeight: 24,
	},
});
