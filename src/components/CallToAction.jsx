import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Start Building Today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {"Your next SaaS product doesn't need months of setup. "}
            <br />
            1. Get KtSaaS. <br />
            2. Write your business code & UI. <br />
            3. Launch! Your service is already ready to scale.
          </p>
          <Button
            href="https://ktsaas.lemonsqueezy.com/checkout/buy/64d19867-599c-4599-b3e8-ebe69b392ce3"
            color="white"
            className="mt-10"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  )
}
