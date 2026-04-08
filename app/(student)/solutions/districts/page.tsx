import Assessment from '@/app/(student)/components/districtsComponent/Assessment';
import DistrictBanner from '@/app/(student)/components/districtsComponent/DistrictBanner';
import DistrictDeck from '@/app/(student)/components/districtsComponent/DistrictDeck';
import DistrictEdu from '@/app/(student)/components/districtsComponent/DistrictEdu';
import DistrictPractice from '@/app/(student)/components/districtsComponent/DistrictPractice';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Districts | Next Gen Learning",
  
};
export default function districts() {
  return (
    <>
    <DistrictBanner/>
    <DistrictEdu/>
    <DistrictDeck/>
    <DistrictPractice/>
    <Assessment/>
        </>
  )
}
