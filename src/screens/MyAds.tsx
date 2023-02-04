import { TouchableOpacity } from "react-native";
import { FlatList, Heading, HStack, Select, Text, VStack } from "native-base";

import { Plus } from "phosphor-react-native";

import { AdCard } from "@components/AdCard";

import { PRODUCTS } from "../mocks/products";

export function MyAds() {
  return (
    <VStack px={7} h="full">
      <HStack pt={16} pb={5}>
        <Heading flex={1} color="gray.100" fontSize="lg" fontFamily="heading" textAlign="center">
          Meus anúncios
        </Heading>

        <TouchableOpacity>
          <Plus />
        </TouchableOpacity>
      </HStack>

      <HStack mt={8} alignItems="center" justifyContent="space-between">
        <Text>
          9 anúncios
        </Text>

        <Select minWidth="120" minH="34px" accessibilityLabel="Choose Service" placeholder="Filtros" mt={1}>
          <Select.Item label="Todos" value="all" />
          <Select.Item label="Ativos" value="actived" />
          <Select.Item label="Desativos" value="disabled" />
        </Select>
      </HStack>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        mt={6}
        numColumns={2}
        data={PRODUCTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AdCard
            productImage={item.productImage}
            title={item.title}
            price={item.price}
            type={item.type as "new" | "used"}
            isDisabled={item.isDisabled}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}