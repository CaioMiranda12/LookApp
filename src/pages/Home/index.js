import {StatusBar, View} from 'react-native';
import React from 'react';
import {Title, Text, Button, Box, Spacer} from '../../components';

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
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
          <Button block onPress={() => navigation.navigate('Signin')}>
            <Text color="light">SigIn my account</Text>
          </Button>
          <Spacer size="20px" />
          <Text
            underline
            color="light"
            onPress={() => navigation.navigate('Signup')}>
            Create new account
          </Text>
          <Spacer size="70px" />
        </Box>
      </Box>
    </>
  );
};

export default Home;
