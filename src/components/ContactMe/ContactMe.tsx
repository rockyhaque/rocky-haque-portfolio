'use client'

import { motion } from 'framer-motion'
import { Send, Phone, MapPin, Clock, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function ContactMe() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formState)
    // Reset form after submission
    setFormState({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'contact@example.com', href: 'mailto:contact@example.com' },
    { icon: MapPin, text: '123 Web Dev Street, Coding City, 12345', href: 'https://maps.google.com' },
    { icon: Clock, text: 'Monday - Friday, 9am - 5pm', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
    { icon: Twitter, href: 'https://twitter.com/yourusername' },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDMiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;m just a message away. Let&apos;s bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-5 p-6 rounded-lg backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="inline-block ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white bg-opacity-5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-400"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="h-5 w-5 mr-3 text-purple-400" />
                    <a href={item.href} className="hover:text-white transition-colors duration-300">
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-white bg-opacity-5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Connect with Me</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.icon.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}