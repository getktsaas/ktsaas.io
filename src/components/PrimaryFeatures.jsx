import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotSqlDelight from '@/images/screenshots/sqldelight.png'
import screenshotMiskConfig from '@/images/screenshots/misk-admin-dashboard-config.png'
import screenshotMiskWebActions from '@/images/screenshots/misk-admin-dashboard-web-actions.png'
import screenshotPayments from '@/images/screenshots/payments.png'

const features = [
  {
    title: 'Service Framework',
    description:
      'KtSaaS is built on Misk, a Kotlin microservice framework, used at 40k+ QPS scale by Cash App, Faire, Square, and other big companies. Misk is open source and well proven on all dimensions of performance, product, and team scale.',
    image: screenshotMiskConfig,
  },
  // TODO fix Authelia screenshot
  {
    title: 'Login Auth',
    description:
      'KtSaaS uses Authelia to handle email based login authentication. Authelia is an established project and open source so you can trust that your SaaS authentication is secure.',
    image: screenshotSqlDelight,
  },
  {
    title: 'Database',
    description:
      'Use SqlDelight to interact with your database: generated Kotlin to code against in your service + all queries still written in SQL. KtSaaS ships with MySQL8, but SqlDelight supports alternative databases including PostgreSql.',
    image: screenshotSqlDelight,
  },
  // {
  //   title: 'CI (Github Actions or BuildKite)',
  //   description:
  //     "Already configured with CI, green builds from day one.",
  //   image: screenshotVatReturns,
  // },
  // {
  //   title: 'Deploy with Docker Swarm',
  //   description:
  //     "Docker Swarm deploys with Traefik reverse proxy, automatic SSL certs, and logins handled by Authelia sidecar.",
  //   image: screenshotVatReturns,
  // },
  {
    title: 'Admin Dashboard',
    description:
      'Includes a powerful admin dashboard where you can hit your authenticated endpoints, see live service config, & more.',
    image: screenshotMiskWebActions,
  },
  {
    title: 'Coming soon...',
    description:
      'Payments integration, full signup flow, containerized AI models, and database dashboard... all coming later this year.',
    image: screenshotPayments,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Use a high velocity stack that will grow with you.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Time to ship matters. That is why KtSaaS focuses on a productive stack which makes it easy to ship your first MVP without sacrificing your ability to grow to 1.0 and beyond.
            <br/><br/>Missing something you need? Submit a request and we will do our best to add it to KtSaaS in a future update. Rememmber, ongoing updates are included with your licence so you can always get the latest.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="max-h-600px mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
