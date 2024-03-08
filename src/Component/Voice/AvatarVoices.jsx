import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Voice/AvatarVoice.css';
import { Radio, FormControlLabel, Typography, Box } from '@mui/material';


const AvatarVoices = ({ setSelectedVoice }) => {
  const [voices, setVoices] = useState([]);
  
  const [selectedVoiceId, setSelectedVoiceId] = useState('');
  // const handleRadioChange = (voiceId) => {
  //   setSelectedVoice(voiceId);
  // };

  const handleRadioChange = (voiceId) => {
    setSelectedVoiceId(voiceId);
    setSelectedVoice(voiceId);
  };

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await axios.get('http://3.111.182.11:5441/avatar/v1/voice/getall', {
          params: {
            language: 'en',
            operatorid: 0
          }
        });
        console.log('response.data.data', response.data.data);
        if (response.data.statuscode === 200) {
          setVoices(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching voices:', error);
      }
    };
    fetchVoices();
  }, []);

  return (
    <Box className='add-voice' p={2}>
      <Typography variant="h5">Available Voices</Typography>
      <Box>
        {voices.map((voice) => (
          <FormControlLabel
            key={voice.voiceId}
            value={voice.voiceId}
            control={<Radio />}
            label={
              <Box display="flex" alignItems="center" >
                <Box>
                  <Typography>{voice.name}</Typography>
                </Box>
                <Box ml={5} className="audio-box">
                  <audio controls>
                    <source src={voice.sample} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </Box>
              </Box>
            }
            // checked={selectedVoice === voice.voiceId}
            checked={selectedVoiceId === voice.voiceId}
            onChange={() => handleRadioChange(voice.voiceId)}
          />
        ))}
      </Box>
    </Box>
);
};

export default AvatarVoices;
