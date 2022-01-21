import React, { useCallback } from 'react'
import { HStack, VStack, Center, Avatar, Heading, IconButton, useColorModeValue, Icon } from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animations/animated-color-box'
import ThemeToggle from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button'

const Sidebar = (props: DrawerContentComponentProps) => {
    const { state, navigation } = props
    const currentRoute = state.routeNames[state.index]

    const handlePressBackButton = useCallback(() => {
        navigation.closeDrawer()
    }, [navigation])

    const handlePressMenuHome = useCallback(() => {
        navigation.navigate('Home')
    }, [navigation])

    const handlePressMenuAbout = useCallback(() => {
        navigation.navigate('About')
    }, [navigation])

    return (
        <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('blue.50', 'darkBlue.800')} p={7}>
            <VStack flex={1} space={2}>
                <HStack justifyContent='flex-end'>
                    <IconButton 
                        onPress={handlePressBackButton}
                        borderRadius={100}
                        variant='outline'
                        borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
                        _icon={{ as: Feather, name: 'chevron-left', size: 6, color: useColorModeValue('blue.800', 'darkBlue.700') }}
                    />
                </HStack>

                <Avatar 
                    source={require('../assets/profile_avatar.png')}
                    size='xl'
                    borderRadius={100}
                    mb={6}
                    borderColor='secondary.500'
                    borderWidth={3}
                />

                <Heading mb={4} size='xl'>
                    Theo At.
                </Heading>

                <MenuButton 
                    active={currentRoute === 'Home'}
                    onPress={handlePressMenuHome}
                    icon='inbox'
                >
                    Tâches
                </MenuButton>

                <MenuButton 
                    active={currentRoute === 'About'}
                    onPress={handlePressMenuAbout}
                    icon='info'
                >
                    A propos
                </MenuButton>
            </VStack>

            <Center>
                <ThemeToggle />
            </Center>
        </AnimatedColorBox>
    )
}

export default Sidebar