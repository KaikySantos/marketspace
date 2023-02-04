import { Box, Heading, HStack, ScrollView, Text, useTheme, VStack } from "native-base";

import { Bank, Barcode, CreditCard, Money, QrCode } from "phosphor-react-native";

import { UserPhoto } from "@components/UserPhoto";

export function AdInformation() {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Box height="280px" bg="blue.500" opacity={25} />

      <Box mt={5} px={7}>
        <HStack>
          <UserPhoto size={6} borderWidth={2} alt="Imagem do usuário" />

          <Text ml={2} color="gray.100" fontSize="sm" fontFamily="body">
            Kaiky Santos
          </Text>
        </HStack>

        <HStack mt={6}>
          <Box bg="gray.500" py="2px" px={2} rounded="full">
            <Text color="gray.200" fontSize="10px" fontFamily="heading">
              NOVO
            </Text>
          </Box>
        </HStack>

        <HStack mt={2} alignItems="center" justifyContent="space-between">
          <Heading color="gray.100" fontSize="lg" fontFamily="heading">
            Bicicleta
          </Heading>

          <HStack alignItems="flex-end">
            <Text mb={0.5} mr={0.5} color="blue.500" fontSize="sm" fontFamily="heading">
              R$
            </Text>

            <Text mb={-0.9} color="blue.500" fontSize="lg" fontFamily="heading">
              120,00
            </Text>
          </HStack>
        </HStack>

        <Text mt={2} color="gray.200" fontSize="sm" fontFamily="body">
          Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
        </Text>

        <HStack mt={6}>
          <Text mr={2} color="gray.200" fontSize="sm" fontFamily="heading">
            Aceita troca?
          </Text>

          <Text color="gray.200" fontSize="sm" fontFamily="body">
            Sim
          </Text>
        </HStack>

        <Text mt={4} mb={2} color="gray.200" fontSize="sm" fontFamily="heading">
          Meios de pagamento:
        </Text>

        <VStack space={1} mb={5}>
          <HStack alignItems="center" space={2}>
            <Barcode size={18} color={colors.gray[100]} />

            <Text color="gray.200" fontSize="sm" fontFamily="body">
              Boleto
            </Text>
          </HStack>

          <HStack alignItems="center" space={2}>
            <QrCode size={18} color={colors.gray[100]} />

            <Text color="gray.200" fontSize="sm" fontFamily="body">
              Pix
            </Text>
          </HStack>

          <HStack alignItems="center" space={2}>
            <Money size={18} color={colors.gray[100]} />

            <Text color="gray.200" fontSize="sm" fontFamily="body">
              Dinheiro
            </Text>
          </HStack>

          <HStack alignItems="center" space={2}>
            <CreditCard size={18} color={colors.gray[100]} />

            <Text color="gray.200" fontSize="sm" fontFamily="body">
              Cartão de Crédito
            </Text>
          </HStack>

          <HStack alignItems="center" space={2}>
            <Bank size={18} color={colors.gray[100]} />

            <Text color="gray.200" fontSize="sm" fontFamily="body">
              Depósito Bancário
            </Text>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  )
}