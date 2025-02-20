import React from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function WithBackgroundImage() {
  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'url(https://pidihub.id/assets/hero-image.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              Welcome To Naganaya Sinergy Teknologi Empowering Technology in
              Indonesia
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'yellow.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'yellow.500' }}
              >
                Learn More
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
              >
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
}
