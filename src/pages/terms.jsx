import Head from 'next/head'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Terms } from '@/components/Terms'

export default function Page() {
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
        <Terms />
      </main>
      <Footer />
    </>
  )
}
