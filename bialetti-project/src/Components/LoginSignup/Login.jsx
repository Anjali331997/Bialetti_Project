import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

const Login = ({onLoginClose,isLoginOpen,onLoginOpen}) => {
 

  return (
    <>
      {/* <Button onClick={onOpenL}>Login</Button> */}

      <Modal onClose={onLoginClose} isOpen={isLoginOpen} isCentered >
        <ModalOverlay  />
        <ModalContent borderRightRadius="0" borderLeftRadius="0" >

          <ModalHeader>
            LOGIN</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box
              align="center"
              justify="center"
              bg="white"
              p={1} 
            >
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          
                        />
                      </FormControl>

                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type="password"
                          variant="filled"
                          validate={(value) => {
                            let error;

                            if (value.length < 6) {
                              error =
                                "Password must contain at least 6 characters";
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>

                      <Field
                        as={Checkbox}
                        id="rememberMe"
                        name="rememberMe"
                        colorScheme={"blackAlpha"}
                      >
                        Remember me?
                      </Field>

                      <Button type="submit" bgColor="black" color={"white"}  width="full" >
                        Login
                      </Button>
                      
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
