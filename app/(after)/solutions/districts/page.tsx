import Assessment from '@/app/(after)/components/districtsComponent/Assessment';
import DistrictBanner from '@/app/(after)/components/districtsComponent/DistrictBanner';
import DistrictDeck from '@/app/(after)/components/districtsComponent/DistrictDeck';
import DistrictEdu from '@/app/(after)/components/districtsComponent/DistrictEdu';
import DistrictPractice from '@/app/(after)/components/districtsComponent/DistrictPractice';

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
