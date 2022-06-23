import { Heading, VStack ,Box} from "@chakra-ui/layout";
import Head from "next/head";

export default function Custom500() {
  return (
    <div>
    <Head>
      <title>500 - Server-side error occurred</title>
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
          500
        </Heading>
        <Heading size="xl">500</Heading>
        <Heading size="lg">
        500 - Server-side error occurred
        </Heading>
      </VStack>
    </main>
  </div>
  )
}
