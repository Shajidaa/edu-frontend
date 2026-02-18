import DistrictBanner from '@/app/components/districtsComponent/DistrictBanner';
import DistrictDeck from '@/app/components/districtsComponent/DistrictDeck';
import DistrictEdu from '@/app/components/districtsComponent/DistrictEdu';
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
    </>
  )
}
