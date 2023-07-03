import {StyleSheet} from 'react-native';

export const chatStyles = StyleSheet.create({
  topView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    height: '8%',
    backgroundColor: '#006257',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: '4%',
  },
  roomText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '4%',
  },
  container: {
    flex: 1,
    height: '92%',
    paddingTop: 16,
  },
  messagesContainer: {
    flexGrow: 1,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    maxWidth: '60%',
    minWidth: '40%',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receivedMessage: {
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 0,
    borderRadius: 40,
    borderColor: 'gray',
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 3,
    marginRight: 12,
  },
  sendButton: {
    backgroundColor: '#006257',
    borderRadius: 50,
    // paddingHorizontal: 16,
    // paddingVertical: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  reply: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  sentReply: {
    borderRightColor: 'green',
    borderRightWidth: 3,
    backgroundColor: '#c7f7ab',
  },
  receivedReply: {
    borderLeftColor: 'red',
    borderLeftWidth: 3,
    backgroundColor: '#f2f2f2',
  },

  replymainView: {
    padding: 10,
    margin: 3,
    backgroundColor: '#ffffff',
    position: 'relative',
    borderRadius: 10,
    width: '82%',
  },
  replyView: {
    backgroundColor: '#dddddd',
    padding: 5,
    borderRadius: 9,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
  },
  closeReply: {position: 'absolute', top: 4, right: 5, zIndex: 10},
  loading: {
    height: '92%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
