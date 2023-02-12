import { TouchableOpacity } from "react-native";
import { Box, HStack, Text, useTheme, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeft, WhatsappLogo } from "phosphor-react-native";

import { Button } from "@components/Button";

import { AdInformation } from "@components/AdInformation";

export function AdDetails() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View h="full" bg="gray.600">
      <Box pt={12} px={7} pb={5}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft />
        </TouchableOpacity>
      </Box>
      
      <AdInformation />

      <HStack bg="gray.700" px={6} py={5} alignItems="center" justifyContent="space-between">
        <HStack alignItems="flex-end">
          <Text mr={1} color="blue.500" fontSize="sm" fontFamily="heading">
            R$
          </Text>

          <Text mb={-1} color="blue.500" fontSize="xl" fontFamily="heading">
            120,00
          </Text>
        </HStack>

        <Button
          title="Entrar em contato"
          icon={<WhatsappLogo color={colors.gray[600]} weight="fill" size={16} />}
          variant="blue"
          w={null}
        />
      </HStack>
    </View>
  );
}