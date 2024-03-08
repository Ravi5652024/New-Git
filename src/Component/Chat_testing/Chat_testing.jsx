import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const LeftContainer = styled(Grid)({
  textAlign: 'left',
  paddingRight: '20px',
  padding: '20px',
  marginBottom: '20px', // Increase the margin between sender's and receiver's messages
});

const RightContainer = styled(Grid)({
  textAlign: 'right',
  paddingLeft: '350px',
  marginTop: '20px', // Increase the margin between sender's and receiver's messages
});

const MessageBubble = styled('div')({
  padding: '10px',
  borderRadius: '10px',
  maxWidth: '70%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow
  margin: '10px 0', // Add margin
});

const SenderName = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '4px',
});

const SenderMessageTime = styled(Typography)({
  fontSize: '0.8rem',
  color: '#666',
  padding: '5px',
});

const ReceiverMessageTime = styled(SenderMessageTime)({
  textAlign: 'right',
});

// Different color variations for message bubble
const MessageBubbleVariants = {
  sender: {
    backgroundColor: '#DCF8C6', // Light green for sender
  },
  receiver: {
    backgroundColor: '#E8E8E8', // Light gray for receiver
  },
};

const ChatScreen = () => {
  // Sample hardcoded data for messages
  const chatMessages = [
    { sender: 'user1', receiver: 'avatar', timestamp: '10:00 AM', message: 'Hello!' },
    { sender: 'avatar', receiver: 'user1', timestamp: '10:05 AM', message: 'Hi there! How are you today? I hope you\'re doing well.' },
    { sender: 'user1', receiver: 'avatar', timestamp: '10:10 AM', message: 'I\'m good, thanks! Just catching up on some work.' },
    { sender: 'avatar', receiver: 'user1', timestamp: '10:15 AM', message: 'That sounds productive! Anything exciting happening?' },
    { sender: 'user1', receiver: 'avatar', timestamp: '10:20 AM', message: 'Not much, just planning for the weekend. How about you?' },
    { sender: 'avatar', receiver: 'user1', timestamp: '10:25 AM', message: 'I\'m thinking of going hiking. Do you want to join?' },
    // Add more messages as needed
  ];

  return (
    <div>
      {chatMessages.map((msg, index) => (
        <div key={index}>
          {msg.sender === 'user1' ? (
            <LeftContainer item xs={12}>
              <MessageBubble style={MessageBubbleVariants.sender}>
                <SenderName variant="body1">
                  {msg.sender}
                </SenderName>
                <Typography variant="body2">{msg.message}</Typography>
              </MessageBubble>
              <SenderMessageTime variant="body2">
                {msg.timestamp}
              </SenderMessageTime>
            </LeftContainer>
          ) : (
            <RightContainer item xs={12}>
              <MessageBubble style={MessageBubbleVariants.receiver}>
                <SenderName variant="body1">
                  {msg.sender}
                </SenderName>
                <Typography variant="body2">{msg.message}</Typography>
              </MessageBubble>
              <ReceiverMessageTime variant="body2">
                {msg.timestamp}
              </ReceiverMessageTime>
            </RightContainer>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatScreen;
