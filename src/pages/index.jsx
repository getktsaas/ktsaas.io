import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>KtSaaS - A simple, scalable, starter all in Kotlin</title>
        <meta
          name="description"
          content="Most starters are too simple to scale quickly. Start with a framework which is ready to grow. KtSaas is remarkably simple, scalable, & productive; all in Kotlin."
        />
      </Head>
      <Header />
      <main>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FJ9SZT3CN0"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FJ9SZT3CN0');`}
        </script>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
