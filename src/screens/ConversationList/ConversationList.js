import {View} from "react-native";
import * as TalkRn from "@talkjs/expo";
import {APP_ID, ME} from "../../constants/apiData";

export default function ConversationList({ navigation }) {
  const onSelectConversation = event => {
    navigation.navigate('Chatbox', {
      conversationBuilder: event.conversation,
      name: event.others[0].name
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <TalkRn.Session appId={APP_ID} me={ME}>
        <TalkRn.ConversationList onSelectConversation={onSelectConversation} />
      </TalkRn.Session>
    </View>
  );
}
