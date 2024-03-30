import Landing from "../components/Landing.tsx";
import AboutUs from "../components/AboutUs.tsx";
import Sessions from "../components/Sessions.tsx";
import Events from "../components/Events.tsx";
import Productions from "../components/Productions.tsx";

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutUs />
      <Sessions />
      <Events />
      <Productions />
    </div>
  );
}
