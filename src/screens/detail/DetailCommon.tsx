import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { ArrowLeft2 } from 'iconsax-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigations/config';
import { allData, EData, IData } from '../../db/home-data';

type Props = {} & NativeStackScreenProps<RootStackParams, 'DetailCommon'>;

const getDataFromType = (type: EData) => {
  if (allData[type]) {
    return allData[type];
  }
  return null;
};

const DetailCommon = ({ navigation, route }: Props) => {
  const { id, dataType } = route.params;
  const listData = getDataFromType(dataType);
  const [data] = useState(listData ? listData[id] : ({} as IData));

  if (!data) {
    return <Box flex={1} />;
  }
  return (
    <Box flex={1}>
      <ImageBackground
        source={
          typeof data.image == 'string' ? { uri: data.image } : data.image
        }
        w='$full'
        height={240}
      >
        <SafeAreaView>
          <HStack>
            <Button
              variant='link'
              size='lg'
              px='$2'
              onPress={() => navigation.navigate('TabNavigation')}
            >
              <ButtonIcon as={ArrowLeft2} size='xl' color='$white' />
            </Button>
          </HStack>
        </SafeAreaView>
      </ImageBackground>
      <ScrollView>
        {/* Content */}
        <VStack p='$4' gap='$4'>
          {/* Overview */}
          <VStack gap='$2'>
            <Text color='$primary600' fontSize={'$xl'} fontWeight={'$bold'}>
              {data.title}
            </Text>
            <Text color='$coolGray800' fontSize={'$md'} lineHeight={24}>
              {data.description}
            </Text>
          </VStack>
          {data.content.map((contentPart, idx) => (
            <VStack gap='$2' key={`${contentPart.title}-${idx}`}>
              <Text
                color='$primary600'
                fontSize={'$lg'}
                fontWeight={'$semibold'}
              >
                {contentPart.title}
              </Text>
              {contentPart.image && (
                <Image
                  source={{ uri: contentPart.image }}
                  w='$full'
                  alt='image'
                  height={200}
                  resizeMode='contain'
                />
              )}
              <Text color='$coolGray800' fontSize={'$md'} lineHeight={24}>
                {contentPart.body}
              </Text>
            </VStack>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default DetailCommon;
