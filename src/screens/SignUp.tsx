import { useState } from 'react';
import { Box, Center, Heading, Pressable, ScrollView, Text, VStack, useToast } from "native-base";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LogoSvg from '@assets/logo.svg';

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { UserPhoto } from "@components/UserPhoto";

import { PencilSimpleLine } from "phosphor-react-native";

type FormDataProps = {
  name: string;
  email: string;
  number: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  number: yup.string().required('Informe o telefone.'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'A confirmação da senha não confere.')
});

const PHOTO_SIZE = 24;

export function SignUp() {
  const [userPhoto, setUserPhoto] = useState<string | undefined>(undefined);

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const toast = useToast();

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
  
      if (photoSelected.canceled) {
        return;
      }
  
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

        if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
          return toast.show({
            title: "Essa imagem é muito grande. Escolha uma de até 5MB.",
            placement: 'top',
            bgColor: 'red.500',
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignUp(data: FormDataProps) {
    console.log("New User: ", {
      userPhoto,
      ...data
    });
  }

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

        <Center mt={8}>
          <Box mb={4}>
            <UserPhoto
              source={userPhoto ? { uri: userPhoto } : undefined}
              size={PHOTO_SIZE}
              alt="Imagem do usuário"
            />

            <Pressable
              onPress={handleUserPhotoSelect}
              bg="blue.500"
              position="absolute"
              bottom={0}
              right={0}
              w={10}
              h={10}
              rounded="full"
              alignItems="center"
              justifyContent="center"
            >
              <PencilSimpleLine size={16} color="#EDECEE" />
            </Pressable>
          </Box>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="number"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Telefone"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.number?.message}
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
              />
            )}
          />
          
          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirmar a senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />

          <Button
            mt={2}
            title="Criar"
            variant="black"
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Center pb={8}>
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