import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InfoCards } from './components/InfoCards'
import { MembersSection } from './components/MembersSection'
import { Navbar } from './components/Navbar'
import { NewsPlaceholder } from './components/NewsPlaceholder'
import { PartnersStrip } from './components/PartnersStrip'
import { ProjectsSection } from './components/ProjectsSection'
import { SolutionsSection } from './components/SolutionsSection'

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <PartnersStrip />
        <InfoCards />
        <ProjectsSection />
        <NewsPlaceholder />
        <MembersSection />
        <SolutionsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
