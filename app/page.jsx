
import ChurchNavbr from '@/app/ui/Navbar'
import ChurchHero  from '@/app/ui/heroSection'
import MonthlyProgram from '@/app/ui/section'
import SermonGrid from '@/app/ui/virtualLibrary'
import ChurchFooter from '@/app/ui/socialAddress'

export default function Home() {
  return (
    <>
      <ChurchNavbr />
      <ChurchHero/>
      <SermonGrid/>
      <MonthlyProgram/>
      <ChurchFooter/>
      
    </>

  );
}
