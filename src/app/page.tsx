import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { CoverDemo } from "./components/coverDemo";
import { FeaturesSectionDemo } from "./components/FeaturesSectionDemo";
import { NavbarDemo } from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-black">
    <NavbarDemo />
    <BackgroundLinesDemo />
    <CoverDemo/>
    <FeaturesSectionDemo />
  </div>
  
  );
}
