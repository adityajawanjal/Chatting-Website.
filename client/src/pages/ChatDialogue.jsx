import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

const ChatDialogue = () => {
 
  return (
    <>
    <HStack m={"1"} >
     <Box w={"30%"} border={"2px solid black"} h={"98vh"}>
      <LeftMenu/>
     </Box>
     <Box border={"2px solid black"} w={"full"} h={"98vh"}>
      <RightMenu />
     </Box>
    </HStack>
    </>
  )
}

export default ChatDialogue