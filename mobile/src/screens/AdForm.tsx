import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Checkbox, Heading, HStack, Radio, ScrollView, Switch, Text, View, VStack } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ArrowLeft } from "phosphor-react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ImageGroupInput } from "@components/ImageGroupInput";

type PaymentMethods = "bankSlip" | "pix" | "money" | "creditCard" | "debitCard";

type FormDataProps = {
  images: string[];
  title: string;
  description: string;
  isNew: boolean;
  price: string;
  acceptTrade: boolean;
  paymentMethods: PaymentMethods[];
}

const adFormSchema = yup.object({
  images: yup.array().min(1, "Adicione pelo menos uma imagem.").of(yup.string()).required("Selecione pelo menos uma imagem."),
  title: yup.string().required('Informe o título.'),
  description: yup.string().required('Informe a descrição.'),
  isNew: yup.boolean().required("Informe se o produto é novo ou usado."),
  price: yup.string().required("Informe o valor."),
  acceptTrade: yup.boolean().required("Informe se o produto aceita troda."),
  paymentMethods: yup.array().min(1, "Selecione pelo menos um meio de pagamento.").of(yup.mixed().oneOf(["bankSlip", "pix", "money", "creditCard", "debitCard"])).required("Selecione pelo menos um meio de pagamento.")
});

export function AdForm() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(adFormSchema),
    defaultValues: {
      acceptTrade: false,
      images: []
    },
    mode: "onChange"
  });

  function onSubmit(data: FormDataProps) {
    console.log("Success: ", data);

    navigation.navigate('adPreview');
  }
  
  function onError(error: any) {
    console.log("Error:", error);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View h="full" bg="gray.600">
      <HStack px={7} pt={16} pb={6} borderBottomWidth={1} borderColor="gray.500">
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft />
        </TouchableOpacity>

        <Heading flex={1} color="gray.100" fontSize="lg" fontFamily="heading" textAlign="center">
          Criar anúncio
        </Heading>
      </HStack>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <VStack px={7} mt={4}>
          <Text color="gray.200" fontSize="md" fontFamily="heading">
            Imagens
          </Text>

          <Text mt={1} color="gray.300" fontSize="14px" fontFamily="body">
            Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
          </Text>

          <Controller
            control={control}
            name="images"
            render={({ field: { onChange, value } }) => (
              <ImageGroupInput
                images={value}
                onUpdateImages={onChange}
              />
            )}
          />
          <Text color="red.500" fontSize="xs" mt={1}>
            {errors.images?.message}
          </Text>

          <Text color="gray.200" fontSize="md" fontFamily="heading" mt={8}>
            Sobre o produto
          </Text>

          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Título do anúncio"
                mt={4}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.title?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Descrição do produto"
                h={40}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                py={4}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.description?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="isNew"
            render={({ field: { onChange } }) => (
              <Radio.Group
                name="status"
                onChange={(val) => onChange(val === "new")}
              >
                <HStack space={5}>
                  <Radio value="new" isInvalid={!!errors.isNew?.message}>
                    <Text color="gray.200" fontSize="md" fontFamily="body">
                      Produto novo
                    </Text>
                  </Radio>
                  <Radio value="used" isInvalid={!!errors.isNew?.message}>
                    <Text color="gray.200" fontSize="md" fontFamily="body">
                      Produto usado
                    </Text>
                  </Radio>
                </HStack>

                <Text color="red.500" fontSize="xs" mt={1}>
                  {errors.isNew?.message}
                </Text>
              </Radio.Group>
            )}
          />

          <Text mb={4} color="gray.200" fontSize="md" fontFamily="heading" mt={8}>
            Venda
          </Text>

          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Valor do produto"
                leftContent={(
                  <Text color="gray.100" fontSize="md" fontFamily="body">
                    R$
                  </Text>
                )}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.price?.message}
                keyboardType="numeric"
              />
            )}
          />

          <Text color="gray.200" fontSize="md" fontFamily="heading" mt={4}>
            Aceita troca?
          </Text>

          <Controller
            control={control}
            name="acceptTrade"
            render={({ field: { onChange, value } }) => (
              <HStack>
                <Switch
                  size="lg"
                  onToggle={(val: boolean) => onChange(val)}
                  isChecked={value}
                />
              </HStack>
            )}
          />

          <Text color="gray.200" fontSize="md" fontFamily="heading" mt={4}>
            Meios de pagamentos aceitos
          </Text>
          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange } }) => (
              <Checkbox.Group
                onChange={(values) => {
                  onChange(values);
                }}
              >
                <VStack mt="15px" mb={6} space={2}>
                  <Checkbox value="bankSlip" isInvalid={!!errors.paymentMethods?.message}>
                    <Text color="gray.200" fontSize="md" fontFamily="body">
                      Boleto
                    </Text>
                  </Checkbox>
                  <Checkbox value="pix" isInvalid={!!errors.paymentMethods?.message}>
                    <Text color="gray.200" fontSize="md" fontFamily="body">
                      Pix
                    </Text>
                  </Checkbox>
                  <Checkbox value="money" isInvalid={!!errors.paymentMethods?.message}>
                    <Text color="gray.200" fontSize="md" fontFamily="body">
                      Dinheiro
                    </Text>
                  </Checkbox>
                  <Checkbox value="creditCard" isInvalid={!!errors.paymentMethods?.message}>
                    <Text color="gray.200" fontSize="md" fontFamily="body">
                      Cartão de Crédio
                    </Text>
                  </Checkbox>
                  <Checkbox value="debitCard" isInvalid={!!errors.paymentMethods?.message}>
                    <Text color="gray.200" fontSize="md" fontFamily="body">
                      Depósito Bancário
                    </Text>
                  </Checkbox>

                  <Text color="red.500" fontSize="xs" mt={1}>
                    {errors.paymentMethods?.message}
                  </Text>
                </VStack>
              </Checkbox.Group>
            )}
          />
        </VStack>
      </ScrollView>

      <HStack bg="gray.700" px={6} py={5} alignItems="center" justifyContent="space-between">
        <Button
          title="Cancelar"
          w="48%"
          onPress={handleGoBack}
        />

        <Button
          title="Avançar"
          variant="black"
          w="48%"
          onPress={handleSubmit(onSubmit, onError)}
        />
      </HStack>
    </View>
  )
}