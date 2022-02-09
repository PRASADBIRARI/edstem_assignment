import { useEffect } from 'react'
import React from 'react'
import Preloader from '../../../components/preloader/index'
import StartArea from '../startArea/index'
import OurPartners from '../ourPartners/index'
import Counter from '../counter/index'
import Services from '../services/index'
import WorkingProgress from '../workingProgress/index'
import Feature from '../feature/index'
import PopularCaseStudy from '../popularCaseStudy/index'
import Testimonial from '../testimonial/index'
import Media from '../media/index'
import TaskmoApp from '../taskmoApp/index'
import Consultation from '../consultation/index'
import GrowWithUs from '../growWithUs/index'
import LatestBlogs from '../latestBlogs/LatestBlogs'
import Technology from '../technology/Technology'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <StartArea />
      <OurPartners />
      {/* <Counter/> */}
      <Services />
      <WorkingProgress />
      <Feature />
      <Technology />  

      <TaskmoApp />
      
      <PopularCaseStudy />
      <Testimonial />



      <Media />



      <Consultation />
      <LatestBlogs />
      <GrowWithUs /> 

    </div>
  )
}

