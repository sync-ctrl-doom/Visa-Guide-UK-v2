import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import FloatingChat from "@/components/FloatingChat";
import { CookieConsent } from "@/components/CookieConsent";
import InstallPrompt from "@/components/InstallPrompt";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";

import { PageLayout } from "@/components/layout/PageLayout";
import Home from "@/pages/home";
import Services from "@/pages/services";
import VisaTypes from "@/pages/visa-types";
import About from "@/pages/about";
import FreeAssessment from "@/pages/free-assessment";
import Contact from "@/pages/contact";
import Insights from "@/pages/insights";
import ArticlePage from "@/pages/insights/article";
import EligibilityChecker from "@/pages/eligibility-checker";
import FAQ from "@/pages/faq";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import ComplaintsProcedure from "@/pages/complaints-procedure";
import SiteMap from "@/pages/site-map";
import NotFound from "@/pages/not-found";
import SecurePortal from "@/pages/secure-portal";

import VisaApplications from "@/pages/services/visa-applications";
import EntryClearance from "@/pages/services/entry-clearance";
import EEASettledStatus from "@/pages/services/eea-settled-status";
import RightOfAbode from "@/pages/services/right-of-abode";
import NationalityCitizenship from "@/pages/services/nationality-citizenship";
import Asylum from "@/pages/services/asylum";
import Appeals from "@/pages/services/appeals";

import SkilledWorker from "@/pages/visa-types/skilled-worker";
import Student from "@/pages/visa-types/student";
import Family from "@/pages/visa-types/family";
import Visitor from "@/pages/visa-types/visitor";
import ILR from "@/pages/visa-types/ilr";
import BritishCitizenship from "@/pages/visa-types/british-citizenship";
import BNO from "@/pages/visa-types/bno";
import Graduate from "@/pages/visa-types/graduate";

import SpouseVisa from "@/pages/visa-types/family/spouse-visa";
import AncestryVisa from "@/pages/visa-types/family/ancestry-visa";
import UnmarriedPartnerVisa from "@/pages/visa-types/family/unmarried-partner-visa";
import ChildDependantVisa from "@/pages/visa-types/family/child-dependant-visa";
import AdultDependentRelative from "@/pages/visa-types/family/adult-dependent-relative";
import LongTermVisitor from "@/pages/visa-types/visitor/long-term";
import LongResidence from "@/pages/visa-types/ilr/long-residence";
import Naturalisation from "@/pages/visa-types/british-citizenship/naturalisation";
import ChildRegistration from "@/pages/visa-types/british-citizenship/child-registration";

import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/index";
import NewClient from "@/pages/admin/new-client";
import ClientRecord from "@/pages/admin/client-record";
import AdminSettings from "@/pages/admin/settings";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function AdminRoutes() {
  return (
    <Switch>
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/clients/new" component={NewClient} />
      <Route path="/admin/clients/:id">
        {(params) => <ClientRecord id={params.id} />}
      </Route>
      <Route path="/admin/settings" component={AdminSettings} />
      <Route path="/admin" component={AdminDashboard} />
    </Switch>
  );
}

function Router() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  if (isAdmin) {
    return (
      <>
        <ScrollToTop />
        <AdminRoutes />
      </>
    );
  }

  return (
    <PageLayout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />

        {/* Services */}
        <Route path="/services" component={Services} />
        <Route path="/services/visa-applications" component={VisaApplications} />
        <Route path="/services/entry-clearance" component={EntryClearance} />
        <Route path="/services/eea-settled-status" component={EEASettledStatus} />
        <Route path="/services/right-of-abode" component={RightOfAbode} />
        <Route path="/services/nationality-citizenship" component={NationalityCitizenship} />
        <Route path="/services/asylum" component={Asylum} />
        <Route path="/services/appeals" component={Appeals} />

        {/* Visa Types */}
        <Route path="/visa-types" component={VisaTypes} />
        <Route path="/visa-types/skilled-worker" component={SkilledWorker} />
        <Route path="/visa-types/student" component={Student} />
        <Route path="/visa-types/family" component={Family} />
        <Route path="/visa-types/family/spouse-visa" component={SpouseVisa} />
        <Route path="/visa-types/family/ancestry-visa" component={AncestryVisa} />
        <Route path="/visa-types/family/unmarried-partner-visa" component={UnmarriedPartnerVisa} />
        <Route path="/visa-types/family/child-dependant-visa" component={ChildDependantVisa} />
        <Route path="/visa-types/family/adult-dependent-relative" component={AdultDependentRelative} />
        <Route path="/visa-types/visitor" component={Visitor} />
        <Route path="/visa-types/visitor/long-term" component={LongTermVisitor} />
        <Route path="/visa-types/ilr" component={ILR} />
        <Route path="/visa-types/ilr/long-residence" component={LongResidence} />
        <Route path="/visa-types/british-citizenship" component={BritishCitizenship} />
        <Route path="/visa-types/british-citizenship/naturalisation" component={Naturalisation} />
        <Route path="/visa-types/british-citizenship/child-registration" component={ChildRegistration} />
        <Route path="/visa-types/bno" component={BNO} />
        <Route path="/visa-types/graduate" component={Graduate} />

        {/* Info & Contact */}
        <Route path="/about" component={About} />
        <Route path="/free-assessment" component={FreeAssessment} />
        <Route path="/contact" component={Contact} />

        {/* Tools */}
        <Route path="/eligibility-checker" component={EligibilityChecker} />
        <Route path="/faq" component={FAQ} />

        {/* Insights */}
        <Route path="/insights" component={Insights} />
        <Route path="/insights/:slug" component={ArticlePage} />

        {/* Legal */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/complaints-procedure" component={ComplaintsProcedure} />
        <Route path="/sitemap" component={SiteMap} />

        {/* Portal */}
        <Route path="/secure-portal" component={SecurePortal} />

        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
            <FloatingChat />
            <CookieConsent />
            <InstallPrompt />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
