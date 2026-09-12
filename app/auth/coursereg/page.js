import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/Authorization-check"
import CourseRegistration from "../coursereg/couresreg"


export default async function () {
    const session = await auth();
    return (
        <>
        <AuthorizationCheck/>
        <CourseRegistration userId = {session?.user?.id} />
        </>
    )
} 