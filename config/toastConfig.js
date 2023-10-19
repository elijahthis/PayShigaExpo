import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export const toastConfig = {
	/*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
	success: (props) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: "#169d53", backgroundColor: "#169d53" }}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 18,
				fontWeight: "500",
				color: "#ffffff",
				fontFamily: "Rubik_600SemiBold",
			}}
			text2Style={{
				fontSize: 14,
				fontWeight: "500",
				color: "#ffffff",
				fontFamily: "Rubik_600SemiBold",
			}}
		/>
	),
	/*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
	error: (props) => (
		<ErrorToast
			{...props}
			style={{ borderLeftColor: "#a10f18", backgroundColor: "#a10f18" }}
			text1Style={{
				fontSize: 18,
				fontWeight: "500",
				color: "#ffffff",
				fontFamily: "Rubik_600SemiBold",
			}}
			text2Style={{
				fontSize: 14,
				fontWeight: "500",
				color: "#ffffff",
				fontFamily: "Rubik_600SemiBold",
			}}
		/>
	),
	/*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
	tomatoToast: ({ text1, props }) => (
		<View style={{ height: 72, width: "100%", backgroundColor: "tomato" }}>
			<Text>{text1}</Text>
			<Text>{props.uuid}</Text>
		</View>
	),
};
