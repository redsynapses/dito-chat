import React, {useEffect} from 'react'
import {View} from "react-native";
import * as TalkRn from "@talkjs/expo";
import {APP_ID, ME, OTHER} from "../../constants/apiData";

const conversationId = TalkRn.oneOnOneId(ME.id, OTHER.id);
const conversationBuilder = TalkRn.getConversationBuilder(conversationId);

export default function Chatbox({ navigation, route }) {
  const conversation = route?.params?.conversationBuilder;
  const name = route?.params?.name;

  useEffect(() => {
    navigation.setOptions({
      title: name || 'Chat',
    });
  }, [navigation, name]);

  return (
    <View style={{ flex: 1 }}>
      <TalkRn.Session appId={APP_ID} me={ME} enablePushNotifications={true}>
        <TalkRn.Chatbox conversationBuilder={conversation ?? conversationBuilder} />
      </TalkRn.Session>
    </View>
  );
}
