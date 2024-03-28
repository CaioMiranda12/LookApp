import React from 'react';
import {Box, Cover, Text, Touchable} from '..';
import {colors} from '../../styles/theme.json';

const Story = () => {
  return (
    <Touchable
      onPress={() => alert('teste')}
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 5px 0px"
      width="150px">
      <Cover
        width="100%"
        height="100%"
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/A431/production/_132333024_387d952c-42a2-463e-bd06-6fc3df4b47d2.jpg">
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between">
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image="https://ichef.bbci.co.uk/news/976/cpsprodpb/A431/production/_132333024_387d952c-42a2-463e-bd06-6fc3df4b47d2.jpg"
          />

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              Silvio Sampaio
            </Text>
            <Text color="light" variant="small">
              2 min ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Story;
