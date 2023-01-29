import { Box, Center, ScrollView, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg';
import LogoName from '@assets/logoName.svg';

export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="gray.600">
        <Center mt={24}>
          <LogoSvg />
          <LogoName style={{ marginTop: 20 }} />
          <Text color="gray.300" fontSize="sm" fontFamily="body">
            Seu espaço de compra e venda
          </Text>
        </Center>

        <Center mt={24}>
          <Text color="gray.200">
            Acesse sua conta
          </Text>
        </Center>
      </VStack>

      <Box px={12} py={16}>
        <Center>
          <Text color="gray.200" fontSize="sm" fontFamily="body">
            Ainda não tem acesso?
          </Text>
        </Center>
      </Box>
    </ScrollView>
  )
}