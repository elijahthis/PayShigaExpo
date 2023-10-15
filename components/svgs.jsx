import { StyleSheet, View } from "react-native";
import { Svg, G, Path, Defs, ClipPath } from "react-native-svg";

export const HomeIcon = ({ color }) => (
	<View style={styles.container}>
		<Svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<G id="Shiga">
				<Path
					d="M8.08309 19.7505C6.57372 19.7505 5.20522 19.3581 3.9776 18.5732C2.74997 17.8085 1.77392 16.772 1.04942 15.4639C0.345046 14.1357 -0.00714111 12.6565 -0.00714111 11.0264C-0.00714111 9.49687 0.274605 8.11831 0.838104 6.89069C1.4016 5.64294 2.16635 4.57632 3.13235 3.69082C4.11848 2.80532 5.23541 2.13114 6.48316 1.66826C7.73091 1.18526 9.03903 0.943762 10.4075 0.943762C11.1064 0.943762 12.0289 1.03433 12.7836 1.36639C12.9845 2.27154 12.9845 4.5356 12.5728 6.19591L12.3364 6.11166C11.9322 5.96762 11.5096 5.8812 11.0812 5.85813C10.8439 5.84536 10.6184 5.83413 10.5585 5.83413C9.47172 5.83413 8.49566 6.0555 7.63028 6.49825C6.78503 6.92088 6.12091 7.51456 5.63791 8.27931C5.15491 9.04406 4.91341 9.92956 4.91341 10.9358V11.2981C4.91341 11.4188 4.92347 11.5295 4.9436 11.6301C5.04422 12.5961 5.43666 13.3709 6.12091 13.9546C6.82528 14.5181 7.79776 14.9044 8.85925 14.7998C14.3748 14.2564 14.7458 6.19638 14.4439 0.249451L19.1619 1.03433C19.5758 13.7525 16.2519 17.8827 11.5761 19.3279C10.4692 19.67 9.27047 19.7505 8.08309 19.7505Z"
					fill={color}
				/>
				<Path
					d="M20.0071 13.9546L19.2525 19.2072L16.607 18.2709C18.1164 16.912 18.7805 15.4031 19.3239 13.7428L20.0071 13.9546Z"
					fill={color}
				/>
			</G>
		</Svg>
	</View>
);

export const TransactionsIcon = ({ color }) => (
	<View style={styles.container}>
		<Svg
			width={33}
			height={32}
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<G clipPath="url(#clip0_11_7692)" stroke={color}>
				<Path
					d="M20.7 16.527c0-.754-.617-1.227-1.334-1.227H17.12v-3.642c0-.35-.09-.681-.281-.928a1.045 1.045 0 00-.86-.405c-.373 0-.657.154-.844.408-.181.248-.261.578-.261.925v4.736c0 .736.597 1.334 1.334 1.334h3.157c.356 0 .688-.108.934-.316.248-.21.4-.514.4-.885z"
					fill={color}
					strokeWidth={0.3}
				/>
				<Path
					d="M16.75 6.529a9.47 9.47 0 000 18.942A9.47 9.47 0 0026.22 16a9.481 9.481 0 00-9.47-9.471z"
					strokeWidth={2.68333}
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_11_7692">
					<Path
						fill={color}
						transform="translate(5.25 4.5)"
						d="M0 0H23V23H0z"
					/>
				</ClipPath>
			</Defs>
		</Svg>
	</View>
);

export const SearchIcon = ({ color }) => (
	<View style={styles.container}>
		<Svg
			width={33}
			height={32}
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M24.309 25.587a1.4 1.4 0 101.882-2.074l-1.882 2.073zm-2.915-10.615a6.122 6.122 0 01-6.122 6.122v2.8a8.922 8.922 0 008.922-8.922h-2.8zm-6.122 6.122a6.122 6.122 0 01-6.122-6.122h-2.8a8.922 8.922 0 008.922 8.922v-2.8zM9.15 14.972a6.122 6.122 0 016.122-6.122v-2.8a8.922 8.922 0 00-8.922 8.922h2.8zm6.122-6.122a6.122 6.122 0 016.122 6.122h2.8a8.922 8.922 0 00-8.922-8.922v2.8zm4.7 12.8l4.337 3.937 1.882-2.074-4.336-3.936-1.882 2.073z"
				fill={color}
			/>
		</Svg>
	</View>
);

export const CardIcon = ({ color }) => (
	<View style={styles.container}>
		<Svg
			width={33}
			height={32}
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M12.3 14.1h1"
				stroke={color}
				strokeWidth={4}
				strokeLinecap="round"
			/>
			<Path
				d="M6.2 20.2v-8.4a4 4 0 014-4h12.1a4 4 0 014 4v8.4a4 4 0 01-4 4H10.2a4 4 0 01-4-4z"
				stroke={color}
				strokeWidth={2.6}
			/>
		</Svg>
	</View>
);

export const ProfileIcon = ({ color }) => (
	<View style={styles.container}>
		<Svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M21.732 24.597c0-2.59-2.566-4.69-5.732-4.69-3.165 0-5.732 2.1-5.732 4.69M25.9 16c0 5.468-4.432 9.9-9.9 9.9S6.1 21.468 6.1 16s4.432-9.9 9.9-9.9 9.9 4.432 9.9 9.9zm-7.034-2.345a2.866 2.866 0 11-5.732 0 2.866 2.866 0 015.732 0z"
				stroke={color}
				strokeWidth={2.68}
			/>
		</Svg>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
