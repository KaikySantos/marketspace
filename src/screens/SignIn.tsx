import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Box, Center, ScrollView, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg';
import LogoName from '@assets/logoName.svg';

import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function newAccount() {
    navigation.navigate('signUp');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack px={12} flex={1} bg="gray.600" borderBottomRadius={24}>
        <Center mt={24}>
          <LogoSvg />
          <LogoName style={{ marginTop: 20 }} />
          <Text color="gray.300" fontSize="sm" fontFamily="body">
            Seu espaço de compra e venda
          </Text>
        </Center>

        <Center mt={24}>
          <Text color="gray.200" mb={4}>
            Acesse sua conta
          </Text>

          <Input placeholder="E-mail" />

          <Input placeholder="Senha" />

          <Button
            mt={8}
            title="Entrar"
            variant="blue"
          />
        </Center>
      </VStack>

      <Box px={12} pb={16} pt={12}>
        <Center>
          <Text color="gray.200" fontSize="sm" fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            mt={4}
            title="Criar uma conta"
            onPress={newAccount}
          />
        </Center>
      </Box>
    </ScrollView>
  )
}