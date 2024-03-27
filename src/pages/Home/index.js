import {View} from 'react-native';
import React from 'react';
import {Title, Text, Button, Box, Spacer} from '../../components';

const Home = () => {
  return (
    <Box hasPadding align="center" background="dark">
      <Box justify="center" align="center" fluid>
        <Title color="light" variant="big" bold>
          LOOKAPP
        </Title>
        <Spacer />
        <Text align="center" spacing="0px 40px">
          Stay on top of the fashion world and buy your favorite looks.
        </Text>
      </Box>

      <Box fluid align="center" justify="flex-end">
        <Spacer size="150px" />
        <Button block>
          <Text color="light">SigIn my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline color="light" onPress={() => alert('teste')}>
          Create new account
        </Text>
        <Spacer size="70px" />
      </Box>
    </Box>
  );
};

export default Home;
