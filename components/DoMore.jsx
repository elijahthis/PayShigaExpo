import { View, Text, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { EducationIcon, ExchangeIcon } from "./svgs";

const DoMore = () => {
	const doMoreList = [
		{
			title: "Convert Money",
			desc: "Swap between currencies",
			icon: <ExchangeIcon />,
		},
		{
			title: "Tuition payment",
			desc: "Pay your tuition in seconds",
			icon: <EducationIcon />,
		},
		{
			title: "Pay a Merchant",
			desc: "Lorem ipsum dolor sit amet",
			icon: <ExchangeIcon />,
		},
	];

	return (
		<View style={styles.container}>
			<Spacer size={20} />
			<Text style={styles.header}>Do more with Shiga</Text>
			{doMoreList.map((item, index) => (
				<View key={index}>
					<Spacer size={24} />
					<View style={styles.item}>
						<View>{item.icon}</View>
						<View>
							<Text style={styles.title}>{item.title}</Text>
							<Text style={styles.desc}>{item.desc}</Text>
						</View>
					</View>
					<Spacer size={24} />
				</View>
			))}
		</View>
	);
};

export default DoMore;

const styles = StyleSheet.create({
	container: { paddingLeft: 24, paddingRight: 24 },
	header: {
		color: "#ffffff",
		fontSize: 18,
		height: 25,
		fontFamily: "Rubik_500Medium",
		marginBottom: 12,
	},
	item: { flexDirection: "row", gap: 16 },
	title: {
		color: "#ffffff",
		fontSize: 16,
		height: 22,
		fontFamily: "Rubik_500Medium",
	},
	desc: {
		color: "#A2A3A3",
		fontSize: 16,
		height: 22,
		fontFamily: "Rubik_500Medium",
	},
});
