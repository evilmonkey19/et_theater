
import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="">
      <Header></Header>
      <Component {...state} />
      <Footer></Footer>
    </div>
  )
}