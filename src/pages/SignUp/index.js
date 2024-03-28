import React from 'react';
import {Box, Text, Title, Button, Spacer, Input} from '../../components';

const SignUp = () => {
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
      <Button block>
        <Text color="light">Create new account</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline onPress={() => alert('teste')}>
        Back to signIn
      </Text>
    </Box>
  );
};

export default SignUp;
