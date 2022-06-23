import Layout from "../components/layout"

export default function PolicyPage() {
  return (
    <Layout>
      <p>
        This is an example site to demonstrate how to use
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
      <h2>Terms of Service</h2>
      <p>
        test
      </p>
      <h2>Privacy Policy</h2>
      <p>
        This site uses JSON Web Tokens and an in-memory database which resets
        every ~2 hours.
      </p>
      <p>
        Data provided to this site is exclusively used to support signing in and
        is not passed to any third party services, other than via SMTP or OAuth
        for the purposes of authentication.
      </p>
    </Layout>
  )
}
