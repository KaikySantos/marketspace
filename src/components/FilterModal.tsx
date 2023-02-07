import React, { RefObject, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Checkbox, Heading, HStack, ScrollView, Switch, Text, useTheme, View, VStack } from 'native-base';

import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { CheckboxButton } from '@components/CheckboxButton';
import { Button } from '@components/Button';

export type FilterProps = {
  new: boolean,
  used: boolean,
  acceptExchange: boolean,
  bankSlip: boolean,
  pix: boolean,
  money: boolean,
  creditCard: boolean,
  debitCard: boolean
}
export const initialFilters: FilterProps = {
  new: true,
  used: true,
  acceptExchange: true,
  bankSlip: true,
  pix: true,
  money: true,
  creditCard: true,
  debitCard: true
}

import BottomSheet from '@gorhom/bottom-sheet';

import { X } from 'phosphor-react-native';

type FilterModalProps = {
  filters: FilterProps;
  setFilters: (filters: FilterProps) => void;
  setSheetIsOpen: (status: boolean) => void;
  sheetIsOpen: boolean;
  sheetRef: RefObject<BottomSheetMethods>;
}

export function FilterModal({ filters, setFilters, setSheetIsOpen, sheetIsOpen, sheetRef }: FilterModalProps) {
  const { colors } = useTheme();

  const [filtersAux, setFiltersAux] = useState<FilterProps>(initialFilters);

  function changeFiltersAux(filterField: keyof FilterProps) {
    setFiltersAux(state => {
      return {
        ...state,
        [filterField]: !state[filterField]
      };
    });
  }

  function closeModal() {
    sheetRef.current?.close();
    setSheetIsOpen(false);
  }

  function changeFilters() {
    setFilters(filtersAux);

    closeModal();
  }

  function resetFilters() {
    setFiltersAux(initialFilters);
    setFilters(initialFilters);

    closeModal();
  }

  const snapPoints = [1, '70%'];

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={closeModal}
      handleIndicatorStyle={{ backgroundColor: colors.gray[400] }}
    >
      <VStack p={6} flex={1}>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color="gray.100" fontSize="lg" fontFamily="heading">
            Filtrar anúncios
          </Heading>

          <TouchableOpacity onPress={closeModal}>
            <X size={24} color={colors.gray[400]} />
          </TouchableOpacity>
        </HStack>

        <VStack flex={1}>
          <VStack mt={6}>
            <Text
              color="gray.200"
              fontSize="sm"
              fontFamily="heading"
            >
              Condição
            </Text>

            <HStack space={2} mt={3}>
              <CheckboxButton
                isSelected={filtersAux.new}
                title="NOVO"
                onPress={() => changeFiltersAux('new')}
              />
              <CheckboxButton
                isSelected={filtersAux.used}
                title="USADO"
                onPress={() => changeFiltersAux('used')}
              />
            </HStack>
          </VStack>

          <VStack mt={6}>
            <Text
              color="gray.200"
              fontSize="sm"
              fontFamily="heading"
            >
              Aceita troca?
            </Text>

            <HStack>
              <Switch
                size="lg"
                isChecked={filtersAux.acceptExchange}
                onToggle={() => changeFiltersAux('acceptExchange')}
              />
            </HStack>
          </VStack>

          <VStack mt={6}>
            <Text
              color="gray.200"
              fontSize="sm"
              fontFamily="heading"
            >
              Meios de pagamento aceitos
            </Text>

            <VStack mt="15px" mb={6} space={2}>
              <Checkbox value="bankSlip" isChecked={filtersAux.bankSlip} onChange={() => changeFiltersAux('bankSlip')}>
                <Text color="gray.200" fontSize="md" fontFamily="body">
                  Boleto
                </Text>
              </Checkbox>
              <Checkbox value="pix" isChecked={filtersAux.pix} onChange={() => changeFiltersAux('pix')}>
                <Text color="gray.200" fontSize="md" fontFamily="body">
                  Pix
                </Text>
              </Checkbox>
              <Checkbox value="money" isChecked={filtersAux.money} onChange={() => changeFiltersAux('money')}>
                <Text color="gray.200" fontSize="md" fontFamily="body">
                  Dinheiro
                </Text>
              </Checkbox>
              <Checkbox value="creditCard" isChecked={filtersAux.creditCard} onChange={() => changeFiltersAux('creditCard')}>
                <Text color="gray.200" fontSize="md" fontFamily="body">
                  Cartão de Crédio
                </Text>
              </Checkbox>
              <Checkbox value="debitCard" isChecked={filtersAux.debitCard} onChange={() => changeFiltersAux('debitCard')}>
                <Text color="gray.200" fontSize="md" fontFamily="body">
                  Depósito Bancário
                </Text>
              </Checkbox>
            </VStack>
          </VStack>
        </VStack>

        <HStack bg="gray.700" alignItems="center" justifyContent="space-between">
          <Button
            title="Resetar filtros"
            w="48%"
            onPress={resetFilters}
          />

          <Button
            title="Aplicar filtros"
            variant="black"
            w="48%"
            onPress={changeFilters}
          />
        </HStack>
      </VStack>
    </BottomSheet>
  );
};