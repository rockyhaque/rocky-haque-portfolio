'use client'

import { useState } from 'react'
import { Search, ChevronDown, Code, Globe, Zap, Database, Shield } from 'lucide-react'
// import { Input } from "@/components/ui/input"

const faqItems = [
  {
    question: "What's the difference between server-side and client-side rendering?",
    answer: "Server-side rendering (SSR) generates full HTML on the server, offering better initial load times and SEO. Client-side rendering (CSR) loads minimal HTML and uses JavaScript to render content in the browser, providing a more app-like experience but potentially slower initial loads.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    question: "How does React's Virtual DOM work?",
    answer: "React's Virtual DOM is a lightweight copy of the actual DOM. When state changes, React updates the Virtual DOM, compares it with the previous version (diffing), and efficiently updates only the changed parts in the real DOM, significantly improving performance.",
    icon: <Code className="w-6 h-6" />
  },
  {
    question: "What are Web Components?",
    answer: "Web Components are a set of web platform APIs for creating custom, reusable, encapsulated HTML tags. They use Custom Elements, Shadow DOM, and HTML Templates to create modular components that work across modern browsers.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    question: "What is the JAMstack?",
    answer: "JAMstack (JavaScript, APIs, and Markup) is a modern web development architecture. It pre-renders pages and serves them directly from a CDN, using client-side JavaScript and reusable APIs for dynamic functionalities, resulting in faster and more secure websites.",
    icon: <Database className="w-6 h-6" />
  },
  {
    question: "How does CORS (Cross-Origin Resource Sharing) work?",
    answer: "CORS is a security mechanism allowing web pages to request resources from a different domain. It uses HTTP headers to specify which origins can access resources, with browsers restricting cross-origin requests unless the response includes correct CORS headers.",
    icon: <Shield className="w-6 h-6" />
  }
]

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItem, setOpenItem] = useState<number | null>(null)

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Web Developer FAQ
        </h2>
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="pl-8 bg-white dark:bg-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredFaqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setOpenItem(openItem === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
              </div>
              <div className="px-6 py-2 bg-gray-50 dark:bg-gray-700 flex justify-end">
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}