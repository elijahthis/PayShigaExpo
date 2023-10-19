import {
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { AddIcon, ImageIcon } from "./svgs";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const ImageUpload = ({ selectedColor = "", file, setFile }) => {
	// Stores the selected image URI

	// Stores any error message
	const [error, setError] = useState(null);

	const pickImage = async () => {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status !== "granted") {
			Alert.alert(
				"Permission Denied",
				"Sorry, we need camera roll permission to upload images."
			);
		} else {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.canceled) {
				setFile(result.assets[0].uri);
				setError(null);
			}
		}
	};

	return (
		<TouchableOpacity onPress={() => pickImage()}>
			<View>
				{file ? (
					// <View style={styles.imageContainer}>
					<Image source={{ uri: file }} style={styles.image} />
				) : // {/* </View> */}
				selectedColor === "" ? (
					<AddIcon />
				) : (
					<View style={{ ...styles.imgHolder, backgroundColor: selectedColor }}>
						<Text
							style={{
								fontSize: 72,
								fontFamily: "Rubik_500Medium",
								color: "#ffffff",
							}}
						>
							E
						</Text>
					</View>
				)}

				<ImageIcon style={{ position: "absolute", right: 0, bottom: 0 }} />
			</View>
		</TouchableOpacity>
	);
};

export default ImageUpload;

const styles = StyleSheet.create({
	imageContainer: {
		width: 166,
		height: 166,
		borderRadius: 84,
	},
	image: {
		width: 166,
		height: 166,
		borderRadius: 84,
	},
	imgHolder: {
		width: 166,
		height: 166,
		borderRadius: 84,
		justifyContent: "center",
		alignItems: "center",
	},
});
