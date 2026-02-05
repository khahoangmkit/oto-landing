import './App.css'
import HeroSection from './sections/HeroSection'
import ContextSection from './sections/ContextSection'
import EventSection from './sections/EventSection'
import ExpertMKTSection from './sections/ExpertMKTSection'
import CompanionOtoSection from './sections/CompanionOtoSection'
import SummarySection from './sections/SummarySection'
import ExpertMKTAltSection from './sections/ExpertMKTAltSection'
import FullBleedImageSection from './sections/FullBleedImageSection'
import MarketContextSection from './sections/MarketContextSection'
import CoverageSection from './sections/CoverageSection'
import InterestSection from './sections/InterestSection'
import SellerBoostSection from './sections/SellerBoostSection'
import ConsumerDemandSection from './sections/ConsumerDemandSection'
import MarketingEffectSection from './sections/MarketingEffectSection'

function App() {
  return (
    <div className="page">
      <HeroSection />

      <main className="main">
        <ContextSection />
        <EventSection />
        <ExpertMKTSection />
        <CompanionOtoSection />
        <SummarySection />
        <ExpertMKTAltSection />
        <FullBleedImageSection />
        <MarketContextSection />
        <CoverageSection />
        <InterestSection />
        <SellerBoostSection />
        <ConsumerDemandSection />
        <MarketingEffectSection />
      </main>
    </div>
  )
}

export default App
