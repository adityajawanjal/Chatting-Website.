import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Center,
  HStack,
  Image,
} from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useAccountState } from "../context/AccountProvider";
import { adduser } from "../api/api";

const LoginDialogue = () => {

  const { setAccount } = useAccountState();

  const LoggedIn = async(res) =>{
    const userEmailInfo = jwtDecode(res.credential);
    console.log(userEmailInfo);
    setAccount(userEmailInfo);
    await adduser(userEmailInfo);
  }



  return (
    <>
      <Box bgColor={"whatsapp.300"} h={"44"}></Box>
      <AlertDialog isOpen={true} size={"6xl"}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Chat Web Page !
            </AlertDialogHeader>
            <AlertDialogBody>
              <HStack>
                <Box w={"45%"}>
                  Are you sure? You can't undo this action afterwards. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Magnam odit
                  blanditiis, quos vero eligendi aliquid doloribus quia totam
                  libero quidem id sed. Tenetur, libero esse!
                </Box>
                <Image
                  src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
                  alt="qrcode"
                  w={"96"}
                />
              </HStack>
              <Center h={"24"}>
                <GoogleLogin
                  onSuccess={LoggedIn}
                  onError={() => {
                    console.log("Login Failed...");
                  }}
                  useOneTap
                />
              </Center>
            </AlertDialogBody>
            <AlertDialogFooter>Created by : Aditya jawanjal</AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default LoginDialogue;
