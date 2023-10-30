import FrontPage from "../components/Frontpage.tsx";
import AboutUs from "../components/AboutUs.tsx";

export default function Home() {
  return (
    <div className="flex flex-col text-white gap-4">
      <FrontPage />
      <AboutUs />
    </div>
  );
}
