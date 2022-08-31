import Head from "next/head";
import Image from "next/image";
import { Box, Link, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>8.31.2022 | Technology Center | BGCUV</title>
        <meta
          name="description"
          content="Daily links for the tech center @ BGCUV"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" padding={2}>
        <Flex direction="column" gap={4}>
          <Text>
              Please complete this survey before you start building your team:<br />
            <Link href="https://forms.gle/esnsSuvzrCbMifdF8">eSports survey</Link>
          </Text>
          <Text>
              To play Pokemon Showdown:<br />
          <Link href="https://play.pokemonshowdown.com">Pokemon Showdown</Link>
          </Text>
          <Text>
            If you need inspiration for your team:<br />
          <Link href="https://www.smogon.com/roa/?format=gen2ou">
            Pokemon Showdown Teams
          </Link>
          </Text>
        </Flex>
      </Box>

      <Box as="footer"></Box>
    </Box>
  );
}
