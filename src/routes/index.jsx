import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useHistory,
} from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog/blogMain";
import Header from "../pages/header";
import Footer from "../pages/footer";
import BlogDetails1 from "../pages/blog/blogDetails1";
import BlogDetails2 from "../pages/blog/blogDetails2";
import BlogDetails3 from "../pages/blog/blogDetails3";
import BlogDetails4 from "../pages/blog/blogDetails4";
import Contact from "../pages/contact";
import About from "../pages/about";
import Services from "../pages/services";
import findJobs from "../pages/findJobs";
import AmazonCaseStudy from "../pages/caseStudy/amazonCaseStudy";
import RapidoCaseStudy from "../pages/caseStudy/rapidoCaseStudy";
import PhonepayCaseStudy from "../pages/caseStudy/phonepayCaseStudy";
import ZomatoCaseStudy from "pages/caseStudy/zomatoCaseStudy";
import MarchantOnboarding from "../pages/services/marchant";
import BackgroundVerification from "../pages/services/backgroundVerification";
import taleSales from "../pages/services/taleSales";
import LastMileDelivery from "../pages/services/lastMileDelivery";
import CustomerAcquisition from "../pages/services/customerAcquisition";
import StockAudits from "../pages/services/stockAudits";
import GeoTagging from "../pages/services/geoTagging";
import PickingPacking from "../pages/services/pickingPacking";
import SurveyCollection from "../pages/services/surveyCollection";
import ProductSampling from "../pages/services/productSampling";
import InfluencerMarketing from "../pages/services/influencerMarketing";
import CustomerSupport from "../pages/services/customerSupport";
import WarehouseService from "../pages/services/warehouseService";
import ContentModeration from "../pages/services/contentModeration";
import PhlebotomyServices from "../pages/services/phlebotomyServices";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import NotFound from "../pages/notFound";
import NotFound500 from "../pages/notFound500";
import { localRoute } from "./localRoutes";

import AOS from "aos";

import "aos/dist/aos.css";


function RouterComponent(props) {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])
  
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>

          <Route exact path={localRoute.home} component={Home} />
          <Route exact path={localRoute.blog} component={Blog} />
          <Route exact path={localRoute.blogDetails1} component={BlogDetails1} />
          <Route exact path={localRoute.blogDetails2} component={BlogDetails2} />
          <Route exact path={localRoute.blogDetails3} component={BlogDetails3} />
          <Route exact path={localRoute.blogDetails4} component={BlogDetails4} />
          <Route exact path={localRoute.contact} component={Contact} />
          <Route exact path={localRoute.about} component={About} />
          <Route exact path={localRoute.services} component={Services} />
          <Route exact path={localRoute.findjobs} component={findJobs} />
          <Route exact path={localRoute.casestudyAmazon} component={AmazonCaseStudy} />
          <Route exact path={localRoute.casestudyZomato} component={ZomatoCaseStudy} />
          <Route exact path={localRoute.casestudyRapido} component={RapidoCaseStudy} />
          <Route exact path={localRoute.casestudyPhonepay} component={PhonepayCaseStudy} />
          <Route exact path={localRoute.merchantOnboarding} component={MarchantOnboarding} />
          <Route exact path={localRoute.backgroundVerification} component={BackgroundVerification} />
          <Route exact path={localRoute.teleSales} component={taleSales} />
          <Route exact path={localRoute.lastMileDelivery} component={LastMileDelivery} />
          <Route exact path={localRoute.customerAcquisition} component={CustomerAcquisition} />
          <Route exact path={localRoute.stockAudits} component={StockAudits} />
          <Route exact path={localRoute.geoTagging} component={GeoTagging} />
          <Route exact path={localRoute.pickingPacking} component={PickingPacking} />
          <Route exact path={localRoute.surveyCollection} component={SurveyCollection} />
          <Route exact path={localRoute.productSampling} component={ProductSampling} />
          <Route exact path={localRoute.influencerMarketing} component={InfluencerMarketing} />
          <Route exact path={localRoute.customerSupport} component={CustomerSupport} />
          <Route exact path={localRoute.warehouseService} component={WarehouseService} />
          <Route exact path={localRoute.contentModeration} component={ContentModeration} />
          <Route exact path={localRoute.phlebotomyServices} component={PhlebotomyServices} />
          <Route exact path={localRoute.privacyPolicy} component={PrivacyPolicy} />

          

          <Route
            exact
            path={`${localRoute.notFound}`}
            component={NotFound}
          />
          <Route
            exact
            path={`${localRoute.notFound500}`}
            component={NotFound500}
          />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default withRouter(RouterComponent);
