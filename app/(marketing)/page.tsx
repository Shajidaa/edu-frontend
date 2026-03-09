import AudienceSection from "./components/home/AudienceSection";
import Banner from "./components/home/Banner";
import FeatureSection from "./components/home/FeatureSection";
import LessonFeature from "./components/home/LessonFeature";
import Statistics from "./components/home/Statistics";



export default function Home() {
  return (
    <>
    <Banner/>
    <Statistics/>
    <FeatureSection/>
    <LessonFeature/>
    <AudienceSection/>
  </>
  );
}
