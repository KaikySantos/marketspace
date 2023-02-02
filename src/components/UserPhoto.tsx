import { Image, IImageProps } from "native-base";

type Props = IImageProps & {
  size: number;
}

export function UserPhoto({ size, borderWidth = 3, source, ...rest }: Props) {
  const src = source ? source : { uri: "https://www.gov.br/cdn/sso-status-bar/src/image/user.png" };

  return (
    <Image
      source={src}
      w={size}
      h={size}
      rounded="full"
      borderWidth={borderWidth}
      borderColor="blue.500"
      {...rest}
    />
  )
}