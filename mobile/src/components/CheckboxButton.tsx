import { Text, Pressable, HStack, useTheme, IPressableProps } from "native-base";

import { XCircle } from "phosphor-react-native";

type CheckboxButtonProps = IPressableProps & {
  isSelected: boolean;
  title: string;
}

export function CheckboxButton({ isSelected, title, ...rest }: CheckboxButtonProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      bg={isSelected ? "blue.500" : "gray.500"}
      py="6px"
      px={4}
      pr={isSelected ? "6px" : 4}
      rounded="full"
      {...rest}
    >
      <HStack alignItems="center" space="7.5px">
        <Text
          color={isSelected ? "white" : "gray.300"}
          fontSize="xs"
          fontFamily="heading"
        >
          {title}
        </Text>

        {isSelected && <XCircle weight="fill" size={16} color={colors.gray[600]} />}
      </HStack>
    </Pressable>
  )
}