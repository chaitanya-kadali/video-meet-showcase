import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "" 
  })
],
  callbacks:{
    signIn(account) { // the by default params passed to callbacks/signIn() is the google account all details
      console.log(account);
      return true;
    }
  }

})

export { handler as GET, handler as POST }