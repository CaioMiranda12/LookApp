import {View} from 'react-native';
import React from 'react';
import {Title, Text, Button, Box, Spacer} from '../../components';

const Home = () => {
  return (
    <Box justify="center" hasPadding align="center" background="light">
      <Title color="danger" variant="big" underline bold>
        Home
      </Title>
      <Text onPress={() => alert('teste')}>teste</Text>

      <Spacer size="150px" />
      <Button block>
        <Text color="light">Teste</Text>
      </Button>
    </Box>
  );
};

export default Home;
