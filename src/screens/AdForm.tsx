import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Checkbox, Heading, HStack, Radio, ScrollView, Switch, Text, View, VStack } from "native-base";

import * as ImagePicker from "expo-image-picker";

import { ArrowLeft } from "phosphor-react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ImageGroupInput } from "@components/ImageGroupInput";

export function AdForm() {
  const [images, setImages] = useState<string[]>([
  ]);

  function onRemoveImage(index: number) {
    setImages(state => state.filter((item, i) => i !== index));
  }

  async function onAddImage() {
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
        setImages(state => [...state, photoSelected.assets[0].uri]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View h="full" bg="gray.600">
      <HStack px={7} pt={16} pb={6} borderBottomWidth={1} borderColor="gray.500">
        <TouchableOpacity>
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

          <ImageGroupInput images={images} onAddImage={onAddImage} onRemoveImage={onRemoveImage} />

          <Text color="gray.200" fontSize="md" fontFamily="heading" mt={8}>
            Sobre o produto
          </Text>
          <Input placeholder="Título do anúncio" mt={4} />
          <Input placeholder="Descrição do produto" h={40} multiline={true} numberOfLines={4} textAlignVertical="top" py={4} />
          <Radio.Group name="status">
            <HStack space={5}>
              <Radio value="new">
                <Text color="gray.200" fontSize="md" fontFamily="body">
                  Produto novo
                </Text>
              </Radio>
              <Radio value="used">
                <Text color="gray.200" fontSize="md" fontFamily="body">
                  Produto usado
                </Text>
              </Radio>
            </HStack>
          </Radio.Group>
        
          <Text mb={4} color="gray.200" fontSize="md" fontFamily="heading" mt={8}>
            Venda
          </Text>
          <Input
            placeholder="Valor do produto"
            leftContent={(
              <Text color="gray.100" fontSize="md" fontFamily="body">
                R$
              </Text>
            )}
          />

          <Text color="gray.200" fontSize="md" fontFamily="heading" mt={4}>
            Aceita troca?
          </Text>
          <HStack>
            <Switch size="lg" />
          </HStack>

          <Text color="gray.200" fontSize="md" fontFamily="heading" mt={4}>
            Meios de pagamentos aceitos
          </Text>
          <Checkbox.Group>
            <VStack mt="15px" mb={6} space={2}>
                <Checkbox value="boleto">
                  <Text color="gray.200" fontSize="md" fontFamily="body">
                    Boleto
                  </Text>
                </Checkbox>
                <Checkbox value="pix">
                  <Text color="gray.200" fontSize="md" fontFamily="body">
                    Pix
                  </Text>
                </Checkbox>
                <Checkbox value="dinheiro">
                  <Text color="gray.200" fontSize="md" fontFamily="body">
                    Dinheiro
                  </Text>
                </Checkbox>
                <Checkbox value="credito">
                  <Text color="gray.200" fontSize="md" fontFamily="body">
                    Cartão de Crédio
                  </Text>
                </Checkbox>
                <Checkbox value="deposito">
                  <Text color="gray.200" fontSize="md" fontFamily="body">
                    Depósito Bancário
                  </Text>
                </Checkbox>
            </VStack>
          </Checkbox.Group>
        </VStack>
      </ScrollView>

      <HStack bg="gray.700" px={6} py={5} alignItems="center" justifyContent="space-between">
        <Button
          title="Cancelar"
          w="48%"
        />

        <Button
          title="Avançar"
          variant="black"
          w="48%"
        />
      </HStack>
    </View>
  )
}