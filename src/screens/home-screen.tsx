import React, { useCallback, useState } from 'react'
import { VStack, Fab, Icon, useColorModeValue } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animations/animated-color-box'
import TaskList from '../components/task-list'
import shortid from 'shortid'
import Header from '../components/header'
import Navbar from '../components/navbar'

const initialData = [
    {
        id: shortid.generate(),
        subject: 'Compléter ma liste de tâches',
        done: false
    },
    {
        id: shortid.generate(),
        subject: 'Partager cette application',
        done: false
    }
]

export default function HomeScreen() {
    const [ data, setData ] = useState(initialData)
    const [ editingItemId, setEditingItemId ] = useState<string | null>(null)
    
    const handleToggleTaskItem = useCallback(item => {
        setData(prevData => {
            const newData = [...prevData]
            const index = prevData.indexOf(item)
            newData[index] = {...item, done: !item.done}
            return newData
        })
    }, [])

    const handleChangeTaskItemSubject = useCallback(( item, newSubject ) => {
        setData(prevData => {
            const newData = [...prevData]
            const index = prevData.indexOf(item)
            newData[index] = {...item, subject: newSubject}
            return newData
        })
    }, [])

    const handleFinishEditingTaskItem = useCallback(_item => {
        setEditingItemId(null)
    }, [])

    const handlePressTaskItemLabel = useCallback(item => {
        setEditingItemId(item.id)
    }, [])

    const handleRemoveItem = useCallback(item => {
        setData(prevData => {
            const newData = prevData.filter(i => i !== item)
            return newData
        })
    }, [])

    return(
        <AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'primary.900')} w="full">
            <Header title='Quoi de neuf, Theo !' image={require('../assets/header_banner.gif')}>
                <Navbar />
            </Header>

            <VStack flex={1} space={1} bg={useColorModeValue('warmGray.50', 'primary.900')} mt="-18px" borderTopLeftRadius="20px" borderTopRightRadius="20px" pt="20px">
                <TaskList
                    data={data}
                    onToggleItem={handleToggleTaskItem}
                    onChangeSubject={handleChangeTaskItemSubject}
                    onFinishEditing={handleFinishEditingTaskItem}
                    onPressLabel={handlePressTaskItemLabel}
                    onRemoveItem={handleRemoveItem}
                    editingItemId={editingItemId}
                />
            </VStack>

            <Fab 
                position='absolute' 
                renderInPortal={false} 
                size='sm' 
                icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
                colorScheme={useColorModeValue('blue', 'darkBlue')}
                bg={useColorModeValue('blue.500', 'blue.400')}
                onPress={() => {
                    const id = shortid.generate()
                    setData([
                        {
                            id,
                            subject: '',
                            done: false
                        },
                        ...data
                    ])
                    setEditingItemId(id)
                }}
            />
        </AnimatedColorBox>
    )
}