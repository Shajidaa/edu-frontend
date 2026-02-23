import Assessment from '@/app/(marketing)/components/districtsComponent/Assessment';
import DistrictBanner from '@/app/(marketing)/components/districtsComponent/DistrictBanner';
import DistrictDeck from '@/app/(marketing)/components/districtsComponent/DistrictDeck';
import DistrictEdu from '@/app/(marketing)/components/districtsComponent/DistrictEdu';
import DistrictPractice from '@/app/(marketing)/components/districtsComponent/DistrictPractice';

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
