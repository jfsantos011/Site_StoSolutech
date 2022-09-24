import type { NextPage } from 'next'
import { Flex, Box, SimpleGrid, Image, Text, Heading, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button, Textarea  } from '@chakra-ui/react';
import Head from 'next/head'
import { Header } from '../components/Header'
import { useState } from 'react'
import { useToast } from "@chakra-ui/react"

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const toast = useToast();

  const isNameError = name === '';
  const isEmailError = email === '';
  const isDescriptionError = description === '';

  function handleSubmit() {
    console.log('aq')
    toast({
      title: 'Mensagem enviada',
      description: "Mensagem enviada com sucesso, aguarde nosso retorno.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>STO SOLUTECH</title>
        <link rel="sortcut icon" href="/images/sto.png" type="image/png" />;
      </Head>

      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >

        <Box 
          flex="1" 
          borderRadius={8} 
          bg="gray.100" 
          p={["6","8"]}
        >
          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <Heading>Nossa Historia</Heading>
              <Text mt="20px">
                Somos a Sto Solutech uma empresa fundada em 2012 por João Fernando dos Santos atual CEO. Estamos localizados em Campos Belos – GO uma cidade do nordeste Goiano onde enviamos nossos produtos aos clientes de todo o mundo. Nos destacamos em soluções de Data Center e com os serviços de Smart Hands, auxiliamos empresas do setor de Cloud a crescer cada vez mais. Somos apaixonados por tecnologia, sendo referência no segmento, altamente comprometida! Nos dedicamos para prestar o melhor serviço e atendimento possível para todos com responsabilidade, excelência na execução dos serviços prestados e honestidade. Nascemos com o intuito de transformar o futuro acreditando em pessoas.
              </Text>
            </Box>
            <Image src="/images/body-image.png" alt="Logo STO" w="100%" h="100%" />
          </SimpleGrid>

          <SimpleGrid>
          
            <Heading mt="20px" mb="20px">Entre em contato conosco!</Heading>

            <FormControl isInvalid={isNameError || isEmailError || isDescriptionError} onSubmit={handleSubmit}>

              <FormLabel>Nome *</FormLabel>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {!isNameError ? (
                <FormHelperText>
                  
                </FormHelperText>
              ) : (
                <FormErrorMessage>O nome e obrigatorio!</FormErrorMessage>
              )}

              <FormLabel>Email *</FormLabel>
              <Input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              { !isEmailError ? (
                <FormHelperText>
                  
                </FormHelperText>
              ) : (
                <FormErrorMessage>O e-mail e obrigatorio!</FormErrorMessage>
              )}

              <FormLabel>Descrição *</FormLabel>
              <Textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              {!isDescriptionError ? (
                <FormHelperText>
                 
                </FormHelperText>
              ) : (
                <FormErrorMessage>A descrição e obrigatoria!</FormErrorMessage>
              )}

              <Button onClick={handleSubmit} colorScheme="green" mt="20px" disabled={isNameError || isEmailError || isDescriptionError}>Enviar</Button>
            </FormControl>

          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home
