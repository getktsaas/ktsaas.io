import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is KtSaaS?',
      answer:
        "KtSaaS is a boilerplate codebase that let's you focus your efforts on business logic & UI. You get a lot of batteries included: initial service structure, DB connectivity, deploys with Docker Swarm, devops (CI/CD, observability, SSL certs), and more. For small teams, this can save you months of setup. Skip straight to high velocity, productive software development.",
    },
    {
      question: 'Who is this for?',
      answer:
        'KtSaaS is for Kotlin developers who want to build and ship new projects faster. If you\'d prefer to spend your time writing business logic or UI instead of mucking with devops or choosing between libraries, the KtSaaS starter gives you sane defaults so you can start running. This is not a "no code" framework, so if you aren\'t confident in your general development abilities, this might not be for you.',
    },
    {
      question: 'Can I see the product before purchasing?',
      answer:
        'You bet! Try the live demo to see what the boilerplate comes with. Check the documentation to understand how you can get started once you buy your licence.',
    },
    {
      question: 'Can I use the code for multiple projects?',
      answer:
        'Yes, all licences are for unlimited commercial or non-commercial use. You are not allowed to sell or open source the codebase itself or redistribute without permission of the original author.',
    },
  ],
  [
    {
      question: 'How will I get access to the boilerplate source code?',
      answer:
        'Use the email associated with your Github account during purchase. Once your payment is processed, your Github account will be granted access to the private repository containing the KtSaaS starter code.',
    },
    {
      question: 'How will I receive updates?',
      answer:
        "Updates will be pushed to the starter repo regularly. Additional functionality is planned to be added in the coming year. Version bumps and bug fixes will also be pushed on an ongoing basis so anytime you purchase, you're getting the latest and greatest.",
    },
    {
      question: 'What happens if I find a bug?',
      answer:
        "File an issue in the Github private repo and we'll work with you to investigate, land a fix, and get your team unblocked.",
    },
  ],
  [
    {
      question: 'I bought the code. Can I get help?',
      answer:
        "Reach out via email or in the Github repo conversation to get support. We'll reply with help as soon as possible. Licences which include priority support will be at the front of the support queue.",
    },
    {
      question: 'Can I get a discount?',
      answer:
        "We offer student discounts, reach out from your academic institution email address and we'll apply your discount.",
    },
    {
      question: 'Can I get a refund?',
      answer:
        "Given the non-refundable nature of the product, we do not offer refunds. If you have any further questions before you purchase, please get in touch. We're happy to help you understand if KtSaaS is a good fit for you.",
    },
    {
      question: 'What if I have a different question?',
      answer: "Email us and we'll answer as soon as possible.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {
              "Got a question that isn't answered below? Email us and we'll get back to you."
            }
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
