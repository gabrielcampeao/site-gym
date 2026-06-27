import Header     from '@/components/Header'
import Hero        from '@/components/Hero'
import Features    from '@/components/Features'
import CTASection  from '@/components/CTASection'
import Plans       from '@/components/Plans'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTASection />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
