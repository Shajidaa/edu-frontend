import EducatorHero from '@/app/(marketing)/components/educators/EducatorHero'
import ImpactFeatures from '@/app/(marketing)/components/educators/ImpactFeatures'
import InstructionSupport from '@/app/(marketing)/components/educators/InstructionSupport'
import PlanningSection from '@/app/(marketing)/components/educators/Plan'
import SupportSection from '@/app/(marketing)/components/educators/Support'
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
