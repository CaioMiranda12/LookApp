import React from 'react';
import {Box, Text, Title, Button, Spacer, Input} from '../../components';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <Box background="light" justify="center" align="center" hasPadding>
      <Title>Create new account.</Title>
      <Spacer />
      <Text>Enter your details below:</Text>

      <Spacer size="50px" />

      <Input placeholder="Name" />
      <Spacer />
      <Input placeholder="E-mail" />
      <Spacer />
      <Input placeholder="Password" secureTextEntry />

      <Spacer size="50px" />
      <Button block onPress={() => navigate('Feed')}>
        <Text color="light">Create new account</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline onPress={() => goBack()}>
        Back to home
      </Text>
    </Box>
  );
};

export default SignUp;
