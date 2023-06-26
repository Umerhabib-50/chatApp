import {StyleSheet} from 'react-native';

export const chatStyles = StyleSheet.create({
  topView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: '4%',
  },
  roomText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: '4%',
  },
  container: {
    flex: 1,
    height: '92%',
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
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
  },
  sendButton: {
    backgroundColor: '#128C7E',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
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
    padding: 7,
    margin: 3,
    backgroundColor: '#B8FFB8',
    position: 'relative',
    borderRadius: 10,
  },
  closeReply: {position: 'absolute', top: 4, right: 5, zIndex: 10},
  loading: {
    height: '92%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
