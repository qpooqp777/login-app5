import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"
import LineProvider from 'next-auth/providers/line';

import EmailProvider from 'next-auth/providers/email';

import withAuth from "next-auth/middleware"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
      
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */

    LineProvider({
        // clientId: process.env.LINE_ID,
        // clientSecret: process.env.LINE_SECRET,
        clientId: '1657206241',
        clientSecret: 'a327f5e4be90d0c0ada69ba669894d3f',
      }),
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID,
      // clientSecret: process.env.GOOGLE_SECRET ,
      clientId: '779385427801-5524515rc0kmlpp3rcnctrgrhjg7tp9o.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
//   pages: {
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error', // Error code passed in query string as ?error=
//     verifyRequest: '/auth/verify-request', // (used for check email message)
//     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
//   },

session: {
  // Choose how you want to save the user session.
  // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
  // If you use an `adapter` however, we default it to `"database"` instead.
  // You can still force a JWT session by explicitly defining `"jwt"`.
  // When using `"database"`, the session cookie will only contain a `sessionToken` value,
  // which is used to look up the session in the database.
  strategy: "jwt",

  // Seconds - How long until an idle session expires and is no longer valid.
  maxAge: 30 * 24 * 60 * 60, // 30 days

  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
  updateAge: 24 * 60 * 60, // 24 hours
},
jwt: {
  secret: process.env.SECRET,

  // The maximum age of the NextAuth.js issued JWT in seconds.
  // Defaults to `session.maxAge`.
  maxAge: 60 * 60 * 24 * 30,
  // You can define your own encode/decode functions for signing and encryption

},
  theme: {
    colorScheme: "light",
  },
  secret: process.env.SECRET,
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.idToken = token.idToken;
      session.provider = token.provider;
      session.id = token.id;
      return session;
    },
async jwt({ token, user, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token;
          token.refreshToken = account.refresh_token;
          token.idToken = account.id_token;
          token.provider = account.provider;
          token.role = ["admin"]
        }
        if (user) {
          token.id = user.id.toString();
        }
        return token;
      },
  },
})