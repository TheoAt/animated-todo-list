import React from "react"
import { ScrollView, Box, Text, VStack, Icon, Image, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from "../components/animations/animated-color-box"
import Navbar from "../components/navbar"
import Header from "../components/header"
import LinkButton from "../components/link-button"

const AboutScreen = () => {
    return(
        <AnimatedColorBox w='full' flex={1} bg={useColorModeValue('warmGray.50', 'warmGray.900')}>
            <Header title="A propos" image={require('../assets/about_banner.gif')}>
                <Navbar />
            </Header>

            <ScrollView
                borderTopLeftRadius="20px"
                borderTopRadius="20px"
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt="-20px"
                pt='20px'
                p={4}
            >
                <VStack flex={1} space={4}>
                    <Box alignItems='center'>
                        <Image source={require('../assets/author_picture.jpg')} alt='author'
                            borderRadius='full'
                            resizeMode='cover'
                            w={120}
                            h={120}
                        />
                    </Box>

                    <Text fontSize='md' w='full'>
                        Cette application est développée en React Native et est basée sur une vidéo de la chaîne YouTube DevAsLife.
                    </Text>
                    <LinkButton 
                        colorScheme='red'
                        size='lg'
                        borderRadius='full'
                        href='https://www.youtube.com/devaslife'
                        leftIcon={ <Icon as={Feather} name='youtube' size='sm' opacity={0.5} /> }
                    >
                        Chaîne de DevAsLife
                    </LinkButton>

                    <Text fontSize="md" w="full">
                        Si vous aimez cette application, n'hésitez pas à regarder mes différents projets et mon profil développeur sur mon site personnel.
                    </Text>
                    <LinkButton
                        colorScheme="blue"
                        size="lg"
                        borderRadius="full"
                        href="https://www.dev-theoat.fr/"
                        leftIcon={
                        <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
                        }
                    >
                        dev-theoat.fr
                    </LinkButton>
                </VStack>
            </ScrollView>
        </AnimatedColorBox>
    )
}

export default AboutScreen