import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Box, Center, Pressable, ScrollView, Text, useTheme, VStack } from "native-base";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LogoSvg from '@assets/logo.svg';
import LogoName from '@assets/logoName.svg';

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Eye, EyeSlash } from "phosphor-react-native";

type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.'),
});

export function SignIn() {
  const { colors } = useTheme();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema)
  });

  function handleSignIn(data: FormDataProps) {

  } 

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

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                rightContent={
                  <Pressable onPress={() => setPasswordIsVisible(!passwordIsVisible)}>
                    {passwordIsVisible ? (
                        <EyeSlash size={20} color={colors.gray[300]} />
                      ) : (
                        <Eye size={20} color={colors.gray[300]} />
                    )}
                  </Pressable>
                }
                secureTextEntry={!passwordIsVisible}
              />
            )}
          />

          <Button
            mt={8}
            title="Entrar"
            variant="blue"
            onPress={handleSubmit(handleSignIn)}
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