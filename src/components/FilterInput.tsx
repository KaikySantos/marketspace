import { Input as NativeBaseInput, FormControl, Box, useTheme, Pressable, HStack } from 'native-base';

import { MagnifyingGlass, Sliders } from 'phosphor-react-native';

export function FilterInput() {
  const { colors } = useTheme();

  return (
    <FormControl>
      <NativeBaseInput
        bg="gray.700"
        h={11.5}
        px={4}
        pr={24}
        borderWidth={0}
        fontSize="md"
        color="gray.200"
        fontFamily="body"
        placeholderTextColor="gray.400"
        rounded={6}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "gray.300"
        }}
        placeholder="Buscar anúncio"
      />

      <HStack mr={4} space={3} alignItems="center" position="absolute" right={0}>
        <Pressable  h={11.5} justifyContent="center" alignItems="center">
          <MagnifyingGlass size={20} color={colors.gray[200]} />
        </Pressable>
        <Box
          w="px"
          h={4.5}
          bg="black"
        />
        <Pressable  h={11.5} justifyContent="center" alignItems="center">
          <Sliders size={20} color={colors.gray[200]} />
        </Pressable>
      </HStack>
    </FormControl>
  )
}