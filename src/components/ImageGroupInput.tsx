import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Box, HStack, Image, useTheme, View } from "native-base";

import { Plus, XCircle } from "phosphor-react-native";

type ImageGroupInputProps = {
  images: string[]
  onAddImage: () => void;
  onRemoveImage: (index: number) => void;
}

function ImageGroupImage({ image, ...rest }: { image: string } & TouchableOpacityProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={{ flex: 1 }} {...rest}>
      <Image
        w="100%"
        h="100px"
        source={{ uri: image }}
        alt="Produto"
        resizeMode="cover"
        rounded={6}
      />

      <Box
        position="absolute"
        top="4px"
        right="4px"
        bg="white"
        padding="0"
        rounded="full"
      >
        <XCircle size={20} weight="fill" color={colors.gray[200]} />
      </Box>
    </TouchableOpacity>
  )
}

function ImageGroupButton({ ...rest }: TouchableOpacityProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={{ flex: 1 }} {...rest}>
      <Box
        w="full"
        h="100px"
        bg="gray.500"
        rounded={6}
        alignItems="center"
        justifyContent="center"
      >
        <Plus size={24} color={colors.gray[400]} />
      </Box>
    </TouchableOpacity>
  )
}

export function ImageGroupInput({ images, onAddImage, onRemoveImage }: ImageGroupInputProps) {
  let groupItens: string[] = [];
  
  [...new Array(3).keys()].forEach(index => {
    if (images[index]) {
      groupItens.push(images[index]);

    } else {
      if (groupItens[groupItens.length - 1] !== "" && groupItens[groupItens.length - 1] !== "button") {
        groupItens.push("button");
      } else {
        groupItens.push("");
      }
    }
  });

  return (
    <HStack space={2} mt={4}>
      {groupItens.map((item, index) => (
        <View key={index} flex={1}>
          {item === "" ? (
            <Box flex={1} h="100px" bg="gray.500" rounded={6} opacity={0} />
          ) : item === "button" ? (
            <ImageGroupButton onPress={onAddImage} />
          ) : (
            <ImageGroupImage image={item} onPress={() => onRemoveImage(index)} />
          )}
        </View>
      ))}

    </HStack>
  )
}