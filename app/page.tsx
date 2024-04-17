// import { pages } from "next/dist/build/templates/app-page";
import { redirect } from "next/navigation";
async function Page() {
  redirect("/dashboard")
}
export default Page;