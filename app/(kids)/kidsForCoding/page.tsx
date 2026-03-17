import React from 'react'
import Hero from '../components/Hero'
import CoursesSection from '../components/CoursesSection'
import Schedule from '../components/schedule'
import Benefits from '../components/benefits'
import Testimonials from '../components/Testimonials'

import TeacherSection from '../components/CoursesHero'
import Satisfaction from '../components/satisfaction'
import SectionWrapper from '@/app/(marketing)/components/share/SectionWrapper'

export default function KidsForCoding() {
  return (
   <>
   <Hero/>
   <SectionWrapper direction="up" delay={0.1}>
    <CoursesSection/>
     </SectionWrapper> 
      <SectionWrapper direction="right" >
         <Schedule/>   
         </SectionWrapper> 
   
      <SectionWrapper direction="left" >     <Benefits/>  </SectionWrapper> 

      <SectionWrapper direction="right" >      <Testimonials/> </SectionWrapper> 

    <SectionWrapper direction="left" >    <TeacherSection/>   </SectionWrapper> 


    <SectionWrapper direction="right" >    <Satisfaction/>   </SectionWrapper> 

   </>
  )
}
