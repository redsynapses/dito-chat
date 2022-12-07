import React from 'react';
import * as TalkRn from '@talkjs/expo';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {HomeScreen} from './src/screens';
import {ChatStackScreen} from './src/stacks';
import { ME, OTHER } from './src/constants/apiData';

Amplify.configure(awsconfig);

const conversationId = TalkRn.oneOnOneId(ME.id, OTHER.id);
const conversationBuilder = TalkRn.getConversationBuilder(conversationId);

conversationBuilder.setParticipant(ME);
conversationBuilder.setParticipant(OTHER);
conversationBuilder.setAttributes({ subject: 'Random conversation' });

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'home'
        : 'home-outline';
    } else if (route.name === 'Chat') {
      iconName = focused ? 'md-chatbox' : 'md-chatbox-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
})

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
