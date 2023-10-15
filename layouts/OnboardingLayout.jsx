import {
	TouchableWithoutFeedback,
	Platform,
	Keyboard,
	KeyboardAvoidingView,
	View,
} from "react-native";
import { pageStyles } from "../styles/pageStyles";
import Icon from "react-native-vector-icons/Entypo";

const OnboardingLayout = ({ children }) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={{
					...pageStyles.container,

					paddingBottom: 16,
				}}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Icon
					name="chevron-left"
					color="white"
					size={24}
					onPress={() => {}}
					style={{
						marginBottom: 12,
						paddingHorizontal: 20,
						paddingTop: 22,
						paddingBottom: 18,
					}}
				/>
				<View style={{ paddingHorizontal: 40, flex: 1 }}>{children}</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default OnboardingLayout;
