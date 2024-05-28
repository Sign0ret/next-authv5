import { signIn } from "../../../auth"

export default function SignIn() {
  return (
    <div>
        <form action={
            async () => {
                "use server"
                await signIn('github')
            }
        }>
            <h2>Sign In</h2>
            <button type="submit">
                Sign in with GitHub
            </button>
        </form>
    </div>
  )
}
