import { useState } from 'react';
import { Dimensions } from 'react-native';

import { Box, HStack, Image, Text, View } from 'native-base';

import Carousel from 'react-native-reanimated-carousel';

type CarouselImageProps = {
  images: string[];
  disabled?: boolean;
};

type CaroselStatusProps = {
  total: number;
  selected: number;
};

function CaroselStatus({ total, selected }: CaroselStatusProps) {
  return (
    <HStack position="absolute" bottom={0} w="full" padding="3px" space="4px">
      {[...new Array(total).keys()].map((status) => (
        <Box
          flex={1}
          h="3px"
          bg="gray.700"
          opacity={status === selected ? 90 : 50}
          rounded="full"
        />
      ))}
    </HStack>
  );
}

export function CarouselImage({ images, disabled = false }: CarouselImageProps) {
  const [selected, setSelected] = useState<number>(0);
  const width = Dimensions.get('window').width;

  return (
    <View flex={1}>
      <Carousel
        loop={images.length > 1}
        enabled={images.length > 1}
        width={width}
        height={280}
        data={images}
        snapEnabled={true}
        pagingEnabled={true}
        scrollAnimationDuration={100}
        defaultIndex={selected}
        onSnapToItem={(index) => setSelected(index)}
        renderItem={({ item }) => (
          <Image
            w="full"
            h="100%"
            source={{ uri: item }}
            alt="Produto"
            resizeMode="cover"
          />
        )}
      />

      {images.length > 1 && (
        <CaroselStatus total={images.length} selected={selected} />
      )}

      {disabled && (
        <Box
          width={width}
          height={280}
          position="absolute"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            position="absolute"
            width={width}
            height={280}
            bg="gray.100"
            opacity={60}
          />

          <Text
            position="absolute"
            color="gray.700"
            fontSize="sm"
            fontFamily="heading"
          >
            ANÚNCIO DESATIVADO
          </Text>
        </Box>
      )}
    </View>
  );
}