import { Box, Button, Center, Heading, HStack, Image, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { useAccountState } from "../context/AccountProvider";

const RightMenu = () => {
  const { person } = useAccountState();
  console.log("the person is ");
  console.log(person);
  return (
    <>
    <VStack h={"96vh"} justifyContent={"space-between"} >
      <Box w={"full"}>
      <HStack bgColor={"whatsapp.100"} h={"28"}  >
        <Image
          src={person.picture}
          borderRadius={"full"}
          ml={"2"}
          alt="dp"
          w={"20"}
          h={"20"}
        />
        <Heading>{person.given_name}</Heading>
      </HStack>
      <Box border={"2px solid red"} h={"60vh"}></Box>
      </Box>
      <Center>
        <Input type={"search"} placeholder={"Type messaage here...."} w={"50vw"} h={"28"} />
        <Button>Send message</Button>
      </Center>

      </VStack>
    </>
  );
};

export default RightMenu;
