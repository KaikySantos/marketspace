import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { Box, HStack, Image, useTheme, View } from "native-base";

import { Plus, XCircle } from "phosphor-react-native";

type ImageGroupInputProps = {
  images: string[]
  onUpdateImages: (image: string[]) => void;
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

export function ImageGroupInput({ images, onUpdateImages }: ImageGroupInputProps) {
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

  async function handleAddImage() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
  
      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        onUpdateImages([...images, photoSelected.assets[0].uri]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onRemoveImage(index: number) {
    onUpdateImages(images.filter((i, imageIndex) => imageIndex !== index));
  }

  return (
    <HStack space={2} mt={4}>
      {groupItens.map((item, index) => (
        <View key={index} flex={1}>
          {item === "" ? (
            <Box flex={1} h="100px" bg="gray.500" rounded={6} opacity={0} />
          ) : item === "button" ? (
            <ImageGroupButton onPress={handleAddImage} />
          ) : (
            <ImageGroupImage image={item} onPress={() => onRemoveImage(index)} />
          )}
        </View>
      ))}

    </HStack>
  )
}