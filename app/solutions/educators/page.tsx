import EducatorHero from '@/app/components/educators/EducatorHero'
import ImpactFeatures from '@/app/components/educators/ImpactFeatures'
import InstructionSupport from '@/app/components/educators/InstructionSupport'
import PlanningSection from '@/app/components/educators/Plan'
import SupportSection from '@/app/components/educators/Support'


export default function EducatorPage() {
  return (
    <>
      <EducatorHero/>
      <ImpactFeatures/>
      <InstructionSupport/>
      <PlanningSection/>
      <SupportSection/>
    </>
  )
}
