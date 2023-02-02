import { Box, HStack, Image, Text, useTheme, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { UserPhoto } from "@components/UserPhoto";

type Props = {
  userImage: string;
  productImage: string;
  title: string;
  price: number;
  type: "new" | "used";
}

export function AdCard({ userImage, productImage, title, price, type }: Props) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={{ flex: 1, maxWidth: "47%" }}>
      <VStack mb={6}>
        <Image
          w="full"
          h={100}
          source={{ uri: productImage }}
          alt="Produto"
          resizeMode="cover"
          rounded={6}
        />

        <HStack w="full" alignItems="flex-start" justifyContent="space-between" top={1} px={1} position="absolute">
          <UserPhoto
            size={6}
            borderWidth={1}
            borderColor={colors.gray[700]}
            alt="Imagem do usuário"
          />

          <Box bg="blue.700" px="8px" py="2px" rounded="full">
            <Text textTransform="uppercase" color="white" fontSize="10px" fontFamily="body">
              novo
            </Text>
          </Box>
        </HStack>

        <Text mt={1} color="gray.200" fontSize="sm" fontFamily="body">
          {title}
        </Text>

        <HStack alignItems="flex-end">
          <Text color="gray.100" fontSize="xs" fontFamily="heading" mr={1}>
            R$
          </Text>

          <Text color="gray.100" fontSize="md" fontFamily="heading" mb={-0.9}>
            {price}
          </Text>
        </HStack>
      </VStack>
    </TouchableOpacity>
  )
}