
import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div className="mx-4 md:mx-0">
      <Header></Header>
      <Component {...state} />
      {/* <Footer translation={translation.footer}/> */}
    </div>
  )
}