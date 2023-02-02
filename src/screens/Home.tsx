import { TouchableOpacity } from "react-native";
import { Heading, HStack, ScrollView, Text, useTheme, VStack } from "native-base";

import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { FilterInput } from "@components/FilterInput";

import { ArrowRight, Plus, Tag } from "phosphor-react-native";

export function Home() {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack px={6} pt={16} flex={1} bg="gray.600">
        <HStack alignItems="center">
          <UserPhoto size={45} alt="Imagem do usu[ario" borderWidth={2} />

          <VStack flex={1} ml={2.5}>
            <Text color="gray.100" fontSize="md" fontFamily="body">
              Boas vindas,
            </Text>
            <Text color="gray.100" fontSize="md" fontFamily="heading" mt={-1.5}>
              Kaiky!
            </Text>
          </VStack>

          <Button
            title="Criar anúncio"
            icon={<Plus size={16} color={colors.gray[600]} />}
            w={null}
            variant="black"
          />
        </HStack>

        <Text color="gray.300" fontSize="sm" fontFamily="body" mt={8}>
          Seus produtos anunciados para venda 
        </Text>

        <TouchableOpacity>
          <HStack mt={3} bg="#E0E1EB" rounded={6} py={3} px={5} alignItems="center">
            <Tag size={22} color={colors.blue[700]} />

            <VStack ml={4} flex={1}>
              <Heading color="gray.200" fontSize="lg" fontFamily="heading">
                4
              </Heading>
              <Text color="gray.200" fontSize="xs" fontFamily="body">
                anúncios ativos
              </Text>
            </VStack>

            <HStack alignItems="center">
              <Text color="blue.700" fontSize="xs" fontFamily="heading" mr={2}>
                Meus anúncios
              </Text>

              <ArrowRight size={16} color={colors.blue[700]} />
            </HStack>
          </HStack>
        </TouchableOpacity>

        <Text color="gray.300" fontSize="sm" fontFamily="body" mt={8} mb={3}>
          Compre produtos variados
        </Text>
        
        <FilterInput />
      </VStack>
    </ScrollView>
  );  
}