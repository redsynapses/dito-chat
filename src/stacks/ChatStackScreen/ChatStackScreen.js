import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ConversationList, Chatbox} from "../../screens";

const Stack = createNativeStackNavigator();

export default function ChatStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={ConversationList} />
      <Stack.Screen name="Chatbox" component={Chatbox} />
    </Stack.Navigator>
  );
}

