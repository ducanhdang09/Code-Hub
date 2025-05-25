import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Box, ImageBackground, Text, VStack } from '@gluestack-ui/themed';
import { IData } from '../../../types';
import { useNavigation } from '@react-navigation/native';

export interface MemberImageProps {
  image: ImageSourcePropType;
  name?: string;
  lesson: IData;
  wrapperStyle?: any;
}

function MemberImage(props: MemberImageProps) {
  const { image, name, wrapperStyle, lesson } = props;
  const navigation = useNavigation<any>();
  const handleNavigate = () => {
    navigation.navigate('Detail', { lesson });
  };

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <Box rounded={'$2xl'} overflow='hidden' height={'$96'}>
        <ImageBackground source={image} w='$full' alt='Animal' h={'$full'}>
          <Box
            p={'$4'}
            flexDirection='column'
            justifyContent='flex-end'
            flex={1}
          >
            <VStack gap={'$3'} w={'70%'}>
              <Text color='$white' fontSize={16} fontWeight='$bold'>
                {lesson.title}
              </Text>
              <Text
                color='$white'
                fontSize={14}
                ellipsizeMode='tail'
                numberOfLines={2}
              >
                {lesson.description}
              </Text>
            </VStack>
          </Box>
        </ImageBackground>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
export default React.memo(MemberImage);
