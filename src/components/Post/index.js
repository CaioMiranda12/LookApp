import React from 'react';
import {Box, Cover, Text, Touchable} from '..';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';

const Post = () => {
  return (
    <Box hasPadding>
      <Box row align="center">
        <Cover
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/A431/production/_132333024_387d952c-42a2-463e-bd06-6fc3df4b47d2.jpg"
          width="40px"
          height="40px"
          circle
        />
        <Box spacing="0px 0px 0px 10px">
          <Text bold color="dark">
            Silvio Sampaio
          </Text>
          <Text variant="small">2 mins ago</Text>
        </Box>
        <Touchable height="30px" width="100px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
    </Box>
  );
};

export default Post;
