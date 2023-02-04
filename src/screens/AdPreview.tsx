import { TouchableOpacity } from "react-native";
import { Box, Center, HStack, Text, useTheme, View } from "native-base";

import { ArrowLeft, Tag, WhatsappLogo } from "phosphor-react-native";

import { Button } from "@components/Button";

import { AdInformation } from "@components/AdInformation";

export function AdPreview() {
  const { colors } = useTheme();

  return (
    <View h="full" bg="gray.600">
      <Box pt={16} px={7} pb={5} bg="blue.500">
        <Center>
          <Text color="gray.700" fontSize="md" fontFamily="heading">
            Pré visualização do anúncio
          </Text>

          <Text color="gray.700" fontSize="sm" fontFamily="body">
            É assim que seu produto vai aparecer!
          </Text>
        </Center>
      </Box>
      
      <AdInformation />

      <HStack bg="gray.700" px={6} py={5} alignItems="center" justifyContent="space-between">
        <Button
          title="Voltar e editar"
          icon={<ArrowLeft color={colors.gray[200]} size={16} />}
          w="48%"
        />

        <Button
          title="Publicar"
          icon={<Tag color={colors.gray[600]} size={16} />}
          variant="blue"
          w="48%"
        />
      </HStack>
    </View>
  );
}