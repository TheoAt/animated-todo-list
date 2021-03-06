import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Box, VStack, Heading, Image, Text } from 'native-base'

interface Props {
    title: string,
    image: ImageSourcePropType,
    children: React.ReactNode
}

const Header = ({ title, image, children }: Props) => {
    return(
        <VStack h='300px' pb={5}>
            <Image position='absolute' left={0} right={0} bottom={0} w='full' h='300px' resizeMode='cover' source={image} alignItems='center' alt='hearder_image' />
            {children}
            <Box flex={1} />
            <Heading color='white' top={2} p={6} size={'xl'}>
                {title}
            </Heading>
        </VStack>
    )
}

export default Header