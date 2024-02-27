import HeroSection from "@/components/hero section/hero-section";
import HomeTabs from "@/components/tabs/home-tabs";



export default function Home({searchParams: {tabValue}}: {searchParams: {tabValue?:string}}) {
 
  
  return (<main>
       <HeroSection />       
       <HomeTabs tabValue={tabValue}/>
  </main>);
}
