import { LayoutProps } from "$fresh/server.ts";
// import Footer from "../components/footer.tsx";

export default function Layout({ Component, state }: LayoutProps) {
  return (
    <div className="mx-4 md:mx-0">
      <div className="md:grid grid-cols-7">
        <div className="col-span-1"></div>
        <div className="col-start-2 col-span-5">
          <Component {...state} />
        </div>
        <div className="col-span-1"></div>
      </div>
      {/* <Footer translation={translation.footer}/> */}
    </div>
  )
}