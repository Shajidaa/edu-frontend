import Logo from '@/app/(marketing)/components/share/Logo'
import Link from 'next/link'



export default function Navbar() {
  return (
    <div className='flex justify-between'>
        <Logo/>
        <div>
            <Link href="/kidsForCoding/courses">Courses</Link>
            <Link href="/kidsForCoding/camps">Camps</Link>
        </div>
  </div>
  )
}
