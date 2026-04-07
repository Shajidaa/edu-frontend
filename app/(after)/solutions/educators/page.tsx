import EducatorHero from '@/app/(after)/components/educators/EducatorHero'
import ImpactFeatures from '@/app/(after)/components/educators/ImpactFeatures'
import InstructionSupport from '@/app/(after)/components/educators/InstructionSupport'
import PlanningSection from '@/app/(after)/components/educators/Plan'
import SupportSection from '@/app/(after)/components/educators/Support'
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
