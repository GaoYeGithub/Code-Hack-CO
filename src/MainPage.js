import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MainPage = () => {
  const MotionText = motion(Text);

  const transitionDuration = 0.8;

  return (
    <Flex height="100vh" width="100vw">
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="#0c1c34"
        padding="4"
      >
        <Image src="/logo.png" alt="Discord" boxSize="250px" />
        <MotionText
          fontSize="3xl"
          color="white"
          mt="6"
          textAlign="left"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: transitionDuration }}
        >
          Join Our server now!
        </MotionText>
        <MotionText
          fontSize="xl"
          color="white"
          textAlign="left"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: transitionDuration, delay: 0.2 }}
        >
          We hack our way
        </MotionText>
      </Box>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="#0c1c34"
        padding="4"
      >
        <Image src="/discord.png" alt="Server" boxSize="250px" />
        <MotionText
          fontSize="3xl"
          color="white"
          mt="6"
          textAlign="right"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: transitionDuration }}
        >
          Email
        </MotionText>
        <MotionText
          fontSize="xl"
          color="white"
          textAlign="right"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: transitionDuration, delay: 0.2 }}
        >
          gvlassociates@gmail.com
        </MotionText>
      </Box>
    </Flex>
  );
};

export default MainPage;
