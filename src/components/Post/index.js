import React from 'react';
import {Box, Cover, Spacer, Text, Touchable} from '..';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';

const Post = () => {
  return (
    <Box hasPadding fluid>
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
      <Cover
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/A431/production/_132333024_387d952c-42a2-463e-bd06-6fc3df4b47d2.jpg"
        width="100%"
        height="190px"
        spacing="10px 0px"
        radius="10px"
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map(item => (
            <Cover
              image="https://ichef.bbci.co.uk/news/976/cpsprodpb/A431/production/_132333024_387d952c-42a2-463e-bd06-6fc3df4b47d2.jpg"
              width="30px"
              height="30px"
              border={`1px solid ${colors.light}`}
              spacing="0px -15px 0px 0px"
              circle
            />
          ))}
          <Text variant="small" spacing="0px 20px">
            Liked by 10,098
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable spacing="0px 15px 0px 0px" width="24px">
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable spacing="0px 15px 0px 0px" width="24px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" small>
        Interview: Shoe Designer John Fluevog On New Book, Spirituality And
        ‘Slow Fashion’
      </Text>
    </Box>
  );
};

export default Post;
