import React, { RefObject, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, useTheme, View, VStack } from 'native-base';

import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import BottomSheet from '@gorhom/bottom-sheet';

import { X } from 'phosphor-react-native';

type FilterModalProps = {
  setSheetIsOpen: (status: boolean) => void;
  sheetIsOpen: boolean;
  sheetRef: RefObject<BottomSheetMethods>;
}

export function FilterModal({ setSheetIsOpen, sheetIsOpen, sheetRef }: FilterModalProps) {
  const { colors } = useTheme();

  const snapPoints = [1, '58%'];
  
  function closeModal() {
    sheetRef.current?.close();
    setSheetIsOpen(false);
  }

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={closeModal}
      handleIndicatorStyle={{ backgroundColor: colors.gray[400] }}
    >
      <VStack p={6}>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color="gray.100" fontSize="lg" fontFamily="heading">
            Filtrar anúncios
          </Heading>

          <TouchableOpacity onPress={closeModal}>
            <X size={24} color={colors.gray[400]} />
          </TouchableOpacity>
        </HStack>

        <VStack>
          <Text>
            Condição
          </Text>
        </VStack>
      </VStack>
    </BottomSheet>
  );
};