import AudienceSection from "./(marketing)/components/home/AudienceSection";
import Banner from "./(marketing)/components/home/Banner";
import FeatureSection from "./(marketing)/components/home/FeatureSection";
import LessonFeature from "./(marketing)/components/home/LessonFeature";
import Statistics from "./(marketing)/components/home/Statistics";


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
