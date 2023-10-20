import { hookstate } from "@hookstate/core";

const globalState = hookstate({});

globalState.set({
	isLoggedIn: false,
	isPhoneModalVisible: false,
	currentFlow: "register",

	shiga_id: "",
	display_img: "",
	phone_number: "",
	referral_code: "",
});

export { globalState };
