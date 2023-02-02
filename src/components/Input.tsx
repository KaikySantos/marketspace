import { Input as NativeBaseInput, IInputProps, FormControl, Box } from 'native-base';

import { Eye } from 'phosphor-react-native';

type Props = IInputProps & {
  errorMessage?: string | null;
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
}

export function Input({
  errorMessage = null,
  leftContent,
  rightContent,
  isInvalid,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;
  
  return (
    <FormControl isInvalid={invalid} mb={4}>
      {leftContent && (
        <Box
          position="absolute"
          zIndex={999}
          h={11.5}
          w={11.5}

          alignItems="center"
          justifyContent="center"
        >
          {leftContent}
        </Box>
      )}

      {rightContent && (
        <Box
          position="absolute"
          zIndex={999}
          h={11.5}
          w={11.5}
          right={0}

          alignItems="center"
          justifyContent="center"
        >
          {rightContent}
        </Box>
      )}

      <NativeBaseInput
        bg="gray.700"
        h={11.5}
        pl={leftContent ? 10 : 4}
        pr={rightContent ? 10 : 4}
        borderWidth={0}
        fontSize="md"
        color="gray.200"
        fontFamily="body"
        placeholderTextColor="gray.400"
        rounded={6}
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "gray.300"
        }}
        {...rest}
      />

      <FormControl.ErrorMessage mt={1} _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}