import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Button,
} from 'react-native';

export default function ChatScreen(props) {
  /*const fetchUser = async () => {
    const { data } = await axios.get(`/v1/${APP_ID}/users/${ME.id}`);

    console.log('user', data);
  };

  const fetchConversations = async () => {
    const { data } = await axios.get(`/v1/${APP_ID}/users/${ME.id}/conversations`);

    console.log('conversations', data);
  };

  useEffect(() => {
    fetchUser();
    fetchConversations();
  }, [])*/

  return (
    <View>
      <Button
        title="Go to Chatbox"
        onPress={() => props.navigation.navigate('Chatbox')}
      />
      <Button
        title="Go to Conversation List"
        onPress={() => props.navigation.navigate('ConversationList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4696ec',
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
