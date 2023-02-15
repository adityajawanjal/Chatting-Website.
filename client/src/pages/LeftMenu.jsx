import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/api";
import { useAccountState } from "../context/AccountProvider";
import SingleChat from "./SingleChat";

const LeftMenu = () => {
  const { account, text, setText } = useAccountState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let data = await getAllUsers();
      const filterData = data.filter(e=>e.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filterData);
    };
    fetchUsers();
  }, [text]);

  return (
    <>
      <HStack
        justifyContent={"space-between"}
        m={"2"}
        borderBottom={"3px solid black"}
        pb={"3"}
      >
        <Image
          src={account.picture}
          alt="dp"
          w={"16"}
          h={"16"}
          borderRadius={"full"}
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        />
        <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Profile Page</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack gap={5}>
                <Image
                  src={account.picture}
                  alt="dp"
                  w={"32"}
                  h={"32"}
                  borderRadius={"full"}
                />
                <Heading>{account.name}</Heading>
                <Text>
                  <Text fontWeight={"bold"}>About : </Text>Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Officia, laboriosam.
                </Text>
              </VStack>
            </DrawerBody>
            <DrawerFooter>footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
        <HStack gap={2}>
          <Text>Chat</Text>
          <Menu placement={"bottom-end"}>
            <MenuButton as={"text"} style={{ cursor: "pointer" }}>
              More
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onOpen}>profile</MenuItem>
              <MenuItem>status</MenuItem>
              <MenuItem>download</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
      <Input
        // "Search or start a new Chat ..."
        type={"text"}
        placeholder={account.sub}
        w={"99%"}
        mb={"5"}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {users.map((e) => {
        return (
          <SingleChat
            key={e.id}
            name={e.given_name}
            picture={e.picture}
            user={e}
          />
        );
      })}
    </>
  );
};

export default LeftMenu;
