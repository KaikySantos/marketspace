import { Button as ButtonNativeBase, HStack, IButtonProps, Text } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';

type Variants = 'black' | 'blue' | 'gray';

type Props = IButtonProps & {
  title: string;
  icon?: JSX.Element;
  variant?: Variants;
}

function getBbColor(variant: Variants): [ColorType, ColorType] {
  switch(variant) {
    case 'black':
      return ['gray.100', 'gray.200'];
    case 'blue':
      return ['blue.500', 'blue.700'];
    case 'gray':
    default:
      return ['gray.500', 'gray.600'];
  }
}

export function Button({ title, w = "full", icon, variant = 'gray', ...rest }: Props) {
  const [bgColorButton, bgColorButtonPressed] = getBbColor(variant);
  const textColorButton: ColorType = variant === 'gray' ? 'gray.200' : 'gray.700';

  return (
    <ButtonNativeBase
      w={w}
      h={11}
      bg={bgColorButton}
      borderWidth={0}
      rounded="sm"
      _pressed={{
        bg: bgColorButtonPressed
      }}
      {...rest}
    >
      <HStack space={2} alignItems="center">
        {icon}
        <Text
          color={textColorButton}
          fontFamily="heading"
          fontSize="sm"
        >
          {title}
        </Text>
      </HStack>
    </ButtonNativeBase>
  )
}