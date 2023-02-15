import {
  Center,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { startConversation } from "../api/api";
import { useAccountState } from "../context/AccountProvider";

const SingleChat = ({name , picture , user}) => {
const {setPerson , account  } = useAccountState();

const startChat =async () =>{
  setPerson(user);
  await startConversation({senderId:account.sub , receiverId:user.sub});
}

  return (
    <>
      <HStack
        mb={"3"}
        border={"2px solid red"}
        h={"20"}
        borderRadius={"3xl"}
        ml={"2"}
        mr={"2"}
        pr={"3"}
        bgColor={"honeydew"}  
        onClick={()=>startChat()}
      >
        <Image
          src={picture}
          alt="dp2"
          w={"16"}
          h={"12"}
          pl={"2"}
          borderRadius={"full"}
        />
        <VStack justifyContent={"flex-start"} h={"16"}>
          <Text fontWeight={"bold"}>{name}</Text>
          <Text noOfLines={1} pos={"relative"} top={"-2"}>
            {"subject is a good."}
          </Text>
        </VStack>
        <Spacer />
        <Center w={"7"} h={"7"} borderRadius={"full"} bgColor={"whatsapp.300"}>
          10
        </Center>
      </HStack>
    </>
  );
};

export default SingleChat;
