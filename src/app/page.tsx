import { redirect } from "next/navigation";

export default function Home() {
  const tocken = null;
  if (!tocken) {
    redirect("/auth/login");
  } else {
    redirect("/dashboard");
  }
}
