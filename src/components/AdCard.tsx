import { Box, HStack, Image, Text, useTheme, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { UserPhoto } from "@components/UserPhoto";

type Props = {
  userImage?: string;
  productImage: string;
  title: string;
  price: number;
  type: "new" | "used";
  isDisabled?: boolean;
}

export function AdCard({ userImage, productImage, title, price, type, isDisabled = false }: Props) {
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
          {userImage !== undefined ? (
            <UserPhoto
              size={6}
              borderWidth={1}
              borderColor={colors.gray[700]}
              alt="Imagem do usuário"
            />
          ) : <Box />}

          <Box
            bg={type === 'new' ? 'blue.700' : 'gray.200'}
            px="8px"
            py="2px"
            rounded="full"
          >
            <Text textTransform="uppercase" color="white" fontSize="10px" fontFamily="body">
              {type === 'new' ? 'novo' : 'usado'}
            </Text>
          </Box>
        </HStack>

        {isDisabled && (
          <Box height={100} rounded={6} zIndex={999} mt={-100} justifyContent="flex-end">
            <Box bg="gray.100" opacity={40} position="absolute" w="full" h="full" rounded={6} />
            <Text color="gray.700" fontSize="11px" fontFamily="heading" m={2}>
              ANÚNCIO DESATIVADO
            </Text>
          </Box>
        )}

        <Text mt={1} color={!isDisabled ? 'gray.100' : 'gray.400'} fontSize="sm" fontFamily="body">
          {title}
        </Text>

        <HStack alignItems="flex-end">
          <Text color={!isDisabled ? 'gray.100' : 'gray.400'} fontSize="xs" fontFamily={!isDisabled ? 'heading' : 'body'} mr={1}>
            R$
          </Text>

          <Text color={!isDisabled ? 'gray.100' : 'gray.400'} fontSize="md" fontFamily={!isDisabled ? 'heading' : 'body'} mb={-0.9}>
            {price}
          </Text>
        </HStack>
      </VStack>
    </TouchableOpacity>
  )
}