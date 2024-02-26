import { Banner } from "@/components";
import { FormLogin } from "./auth/components/form-login";
import { auth } from "@/app/api/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth();
    if (session) {
        redirect("/user");
    } else {
        redirect("/auth");
    }

    return <></>;
}
