import { hookstate } from "@hookstate/core";

const globalState = hookstate({});

globalState.set({ isLoggedIn: false, isPhoneModalVisible: false });

export { globalState };
