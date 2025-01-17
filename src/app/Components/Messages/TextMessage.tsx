import React, { useContext } from "react";
import { TouchableHighlight, View, useWindowDimensions } from "react-native";
import { Text } from "react-native-paper";
import { Message } from "../../store/MessagesStore";
import { AppContext } from "../../utils/appContext";

type Props = {
	message: Message;
	selectMessage: (username: string, messageId: number) => void;
};
const TextMessage: React.FC<Props> = ({ message, selectMessage }) => {
	const { username: currentUser } = useContext(AppContext);
	const { width } = useWindowDimensions();

	return (
		<TouchableHighlight
			onLongPress={() => selectMessage(message.sender, message.messageId)}
			key={message.messageId}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent:
						message.sender === currentUser
							? "flex-end"
							: "flex-start",
				}}
			>
				<Text
					style={{
						minHeight: 48,
						maxWidth: width / 2 - 16,
						textAlignVertical: "center",
						paddingHorizontal: 16,
						backgroundColor: "#3a3a3a",
						marginHorizontal: 8,
						marginVertical: 4,
						borderRadius: 24,
					}}
				>
					{message.text}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

export default TextMessage;
