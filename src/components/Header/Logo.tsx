import { Text, Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      <Image 
        src="/images/sto.png" 
        alt="Logo STO"
        w="100px" 
      />
    </Text>
  );
}