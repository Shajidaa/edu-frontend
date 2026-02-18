import DistrictBanner from '@/app/components/districtsComponent/DistrictBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Districts | Next Gen Learning",
  
};
export default function districts() {
  return (
    <div><DistrictBanner/></div>
  )
}
