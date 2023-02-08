import { useState } from 'react';
import { Dimensions } from 'react-native';

import { Box, HStack, Image, View } from 'native-base';

import Carousel from 'react-native-reanimated-carousel';

type CarouselImageProps = {
  images: string[];
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

export function CarouselImage({ images }: CarouselImageProps) {
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
    </View>
  );
}