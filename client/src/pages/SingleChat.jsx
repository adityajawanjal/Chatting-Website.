import {
  Center,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SingleChat = () => {
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
      >
        <Image
          src="https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw"
          alt="dp2"
          w={"16"}
          h={"12"}
          pl={"2"}
          borderRadius={"full"}
        />
        <VStack justifyContent={"flex-start"} h={"16"}>
          <Text fontWeight={"bold"}>Aditya</Text>
          <Text noOfLines={1} pos={"relative"} top={"-2"}>
            Aditya is a good boy
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
