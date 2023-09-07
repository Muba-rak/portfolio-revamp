import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Text,
  Flex,
  Avatar,
  HStack,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { MdLocationOn, MdMail } from "react-icons/md";
import { ImTwitter } from "react-icons/im";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

import { client } from "../../client";
import { Loading } from "../../constants";

export default function About() {
  const [experiences, setExperiences] = useState([]);
  const [abouts, setAbouts] = useState({
    title: "ok",
    description: "idan",
  });
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   const query = '*[_type == "experiences"] | order(year desc)'
  //   const aboutQuery = '*[_type == "abouts"] | order(title)'
  //   client.fetch(query).then((data) => {
  //     setExperiences(data)
  //     setLoading(false)
  //   })
  //   client.fetch(aboutQuery).then((data) => {
  //     setAbouts(data)
  //     setLoading(false)
  //   })
  // }, [])

  return (
    <Box py={5}>
      <Container maxW="container.lg">
        <Flex direction={{ base: "column", lg: "row" }} mt="5rem" w="100%">
          <Flex
            flex="0.65"
            flexWrap="wrap"
            justify={{ base: "center", lg: "flex-start" }}
            align={{ base: "center", lg: "flex-start" }}
            direction={{ base: "row", lg: "column" }}
            mb="4rem"
            p={4}
            as={motion.div}
          >
            <Box
              mx={{ base: "1.5rem", lg: "0rem" }}
              as={motion.div}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Flex justify={{ base: "center", lg: "flex-start" }} mb={2}>
                <Avatar
                  src="https://res.cloudinary.com/ceenobi/image/upload/q_auto/v1653075291/icons/1AE31A5C-9AE2-4A25-850F-67ACF1CF0E61_vmvcsv.webp"
                  boxSize="250px"
                  name="Mubarak Oladapo"
                />
              </Flex>

              <Heading as="h4" fw="bold" letterSpacing="0.04em">
                Mubarak Oladapo
              </Heading>
              <Text textStyle="p">Frontend developer</Text>
              <HStack
                spacing="3px"
                mb={4}
                justify={{ base: "center", lg: "flex-start" }}
              >
                <Icon as={MdLocationOn} w={8} h={8} />
                <Text textStyle="p">Lagos, Nigeria</Text>
              </HStack>
              <HStack
                spacing="10px"
                justify={{ base: "center", lg: "flex-start" }}
              >
                <LinkBox>
                  <LinkOverlay
                    href="mailto:oladapomubarak@gmail.com"
                    _hover={{ color: "cyan.400" }}
                  >
                    <Icon as={MdMail} w={10} h={10} />
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay
                    href="https://github.com/Muba-rak"
                    isExternal
                    _hover={{ color: "cyan.600" }}
                  >
                    {" "}
                    <Icon as={FaGithubSquare} w={10} h={10} />
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay
                    href="https://www.twitter.com/i_am_mubarak"
                    isExternal
                    _hover={{ color: "blue.300" }}
                  >
                    {" "}
                    <Icon as={ImTwitter} w={10} h={10} />
                  </LinkOverlay>
                </LinkBox>
              </HStack>
            </Box>
          </Flex>
          {
            <Flex flex="1" justify="flex-start" as={motion.div}>
              <Box
                p={4}
                as={motion.div}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                {
                  <Box
                    key={abouts.title}
                    as={motion.div}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <br />
                    <br />
                    <Heading as="h4" fw="bold" letterSpacing="0.04em">
                      {about.title}
                    </Heading>
                    <Text textStyle="sm" mt="2rem">
                      {about.description}
                    </Text>
                  </Box>
                }
                <Divider
                  orientation="horizontal"
                  mt="2rem"
                  bg="pallete.deepPurple"
                />

                {/* {experiences.map((experience) => (
                  <Box
                    as={motion.div}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    key={experience.year}
                    mt="2rem"
                  >
                    <Text textStyle="p">{experience.year}</Text>
                    <Box>
                      {experience.works.map((work, index) => (
                        <Box key={index}>
                          <Text textStyle="p" fontWeight="bold">
                            {work.company}
                          </Text>
                          <Text textStyle="p">{work.name}</Text>
                          <UnorderedList>
                            <ListItem fontSize="18px">{work.desc}</ListItem>
                          </UnorderedList>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))} */}
              </Box>
            </Flex>
          }
        </Flex>
      </Container>
    </Box>
  );
}
