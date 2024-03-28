import React from 'react';
import {Box, Text, Title, Button, Spacer, Input} from '../../components';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignIn = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Icon name="star" size={50} color="#000" />

        <Title bold variant="big">
          LOOKAPP
        </Title>
        <Spacer size="50px" />
        <Title bold>SignIn my account.</Title>

        <Spacer size="50px" />

        <Input placeholder="E-mail" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />

        <Spacer size="50px" />
        <Button block>
          <Text color="light">SignIn my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline onPress={() => alert('teste')}>
          Create new account
        </Text>
      </Box>
    </>
  );
};

export default SignIn;
