import { TouchableOpacity } from "react-native";
import { Box, HStack, Text, useTheme, View, VStack } from "native-base";

import { ArrowLeft, PencilSimpleLine, Power, TrashSimple, WhatsappLogo } from "phosphor-react-native";

import { Button } from "@components/Button";

import { AdInformation } from "@components/AdInformation";

export function MyAdDetails() {
  const { colors } = useTheme();

  return (
    <View h="full" bg="gray.600">
      <HStack pt={12} px={7} pb={5} justifyContent="space-between">
        <TouchableOpacity>
          <ArrowLeft />
        </TouchableOpacity>

        <TouchableOpacity>
          <PencilSimpleLine />
        </TouchableOpacity>
      </HStack>
      
      <AdInformation />

      <VStack bg="gray.700" space={2} px={6} py={5} alignItems="center" justifyContent="space-between">
        <Button
          title="Desativar anúncio"
          icon={<Power color={colors.gray[600]} size={16} />}
          variant="black"
        />

        <Button
          title="Excluir anúncio"
          icon={<TrashSimple color={colors.gray[300]} size={16} />}
        />
      </VStack>
    </View>
  );
}