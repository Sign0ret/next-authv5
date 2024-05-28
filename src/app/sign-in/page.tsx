import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import SignIn from "../_components/signin";

export default async function SignInPage() {
  const session = await auth()
  if (session?.user) redirect('/')

  return (
    <SignIn />
  )
}
