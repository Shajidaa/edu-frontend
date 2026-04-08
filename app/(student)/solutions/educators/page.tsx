import EducatorHero from '@/app/(student)/components/educators/EducatorHero'
import ImpactFeatures from '@/app/(student)/components/educators/ImpactFeatures'
import InstructionSupport from '@/app/(student)/components/educators/InstructionSupport'
import PlanningSection from '@/app/(student)/components/educators/Plan'
import SupportSection from '@/app/(student)/components/educators/Support'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educators | Next Gen Learning",
};

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
