import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { MembersSection } from './components/MembersSection'
import { Navbar } from './components/Navbar'
import { Industries } from './components/Industries'
import { SolutionsSection } from './components/SolutionsSection'

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <MembersSection />
        <SolutionsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
