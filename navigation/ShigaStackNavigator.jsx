import Onboarding1 from "../screens/onboarding/Onboarding1";
import ReferralCode from "../screens/onboarding/ReferralCode";
import OTPCodePage from "../screens/onboarding/OTPCode";
import UserTagPage from "../screens/onboarding/UserTagPage";
import DisplayImagePage from "../screens/onboarding/DisplayImagePage";
import PhoneNumberPage from "../screens/onboarding/PhoneNumberPage";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ShigaStackNavigator = () => {
	return (
		<NavigationContainer theme={DarkTheme}>
			<Stack.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
				})}
			>
				<Stack.Screen name="Onboarding1" component={Onboarding1} />
				<Stack.Screen name="ReferralCode" component={ReferralCode} />
				<Stack.Screen name="PhoneNumberPage" component={PhoneNumberPage} />
				<Stack.Screen name="OTPCodePage" component={OTPCodePage} />
				<Stack.Screen name="UserTagPage" component={UserTagPage} />
				<Stack.Screen name="DisplayImagePage" component={DisplayImagePage} />
				<Stack.Group screenOptions={{ presentation: "modal" }}>
					<Stack.Screen name="PhoneModal" component={PhoneNumberPage} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ShigaStackNavigator;
