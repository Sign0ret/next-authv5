import { auth } from "../../auth";
import SignIn from "./_components/signin";
import SignOut from "./_components/signout";

export default async function Home() {
  const session = await auth()
  console.log({session})
  return (
    <div>
      {session?.user?.name ? (
        <>
          <p>Hello {session.user.name}</p>
          <SignOut />  
        </>
      ) : (
        <>
          <p>quien sos</p>
          <SignIn />
        </>
      )}
    </div>
  );
}
