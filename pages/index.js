import Head from "next/head";
import Image from "next/image";
import { Box, Link, Flex } from "@chakra-ui/react";

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
          <Link href="https://forms.gle/esnsSuvzrCbMifdF8">eSports survey</Link>
          <Link href="https://play.pokemonshowdown.com">Pokemon Showdown</Link>
          <Link href="https://www.smogon.com/roa/?format=gen2ou">
            Pokemon Showdown Teams
          </Link>
        </Flex>
      </Box>

      <Box as="footer"></Box>
    </Box>
  );
}
