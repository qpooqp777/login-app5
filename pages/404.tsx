import { Heading, VStack ,Box} from "@chakra-ui/layout";
import Head from "next/head";

export default function Custom404() {
  return (
    <div>
    <Head>
      <title>404 - Page Not Found | No-code by Jade</title>
      <meta
        key="description"
        name="description"
        content="404 - Page Not Found | No-code personal website by Jade"
      />
    </Head>

    <main>
      <VStack minH="60vh" spacing="8" textAlign="center" justify="center">
        <Heading
          size="4xl"
          bgClip="text"
          fontWeight="extrabold"
        >
          404
        </Heading>
        <Heading size="xl">404 Not Found</Heading>
        <Heading size="lg">
          The page you were looking for does not exist.
        </Heading>
      </VStack>
    </main>
  </div>
  )
}
