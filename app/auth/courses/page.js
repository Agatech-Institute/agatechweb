import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/Authorization-check"
import Courses from "../coursereg/couresreg"


export default async function () {
    const session = await auth();
    return (
        <>
        <AuthorizationCheck/>
        <Courses userId = {session?.user?.id} />
        </>
    )
} 