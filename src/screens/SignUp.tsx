import { Box, Center, Heading, ScrollView, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg';

import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack px={12} flex={1} bg="gray.600" borderBottomRadius={24}>
        <Center mt={12}>
          <LogoSvg width={60} height={40} />

          <Heading color="gray.100" fontSize="lg" fontFamily="heading" mt={3}>
            Boas vindas!
          </Heading>

          <Text color="gray.200" fontSize="sm" fontFamily="body" textAlign="center" mt={2}>
            Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
          </Text>
        </Center>

        <Center mt={24}>
          <Input placeholder="Nome" />

          <Input placeholder="E-mail" />

          <Input placeholder="Telefone" />
          
          <Input placeholder="Senha" />

          <Input placeholder="Confirmar a senha" />

          <Button
            mt={2}
            title="Criar"
            variant="black"
          />
        </Center>

        <Center>
          <Text color="gray.200" fontSize="sm" fontFamily="body" mt={12}>
            Já tem uma conta?
          </Text>

          <Button
            title="Ir para o login"
            mt={4}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}