import { View, TextInput, StyleSheet } from "react-native";
import { SearchIcon } from "./svgs";

const SearchBar = () => {
	return (
		<View style={styles.container}>
			<View>
				<SearchIcon color="#999999" style={{ width: 24, height: 24 }} />
			</View>
			<TextInput
				placeholder="Tap the Search bar"
				placeholderTextColor="#454647"
				style={styles.searchInput}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1F2021",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		paddingVertical: 11,
		paddingHorizontal: 12,

		marginHorizontal: 24,
		borderRadius: 16,
	},
	searchInput: {
		flex: 1,
		color: "#FFFFFF",
		fontSize: 16,
		// lineHeight: 22,
		fontFamily: "Rubik_500Medium",
		// marginTop: -2,
	},
});
