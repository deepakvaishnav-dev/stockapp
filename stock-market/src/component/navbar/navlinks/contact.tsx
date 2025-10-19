import { useState } from "react"
import Card from "../../card-table/card"
import Button from "../../card-table/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="text-gray-700 dark:text-gray-300">Get in touch with our team. We'd love to hear from you.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card title="Email">
            <p className="text-gray-700 dark:text-gray-300">support@stockhub.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">We'll respond within 24 hours</p>
          </Card>

          <Card title="Phone">
            <p className="text-gray-700 dark:text-gray-300">+91 (800) 123-4567</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Monday - Friday, 9 AM - 6 PM IST</p>
          </Card>

          <Card title="Office Address">
            <p className="text-gray-700 dark:text-gray-300">123 Financial District</p>
            <p className="text-gray-700 dark:text-gray-300">Mumbai, Maharashtra 400001</p>
            <p className="text-gray-700 dark:text-gray-300">India</p>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card title="Send us a Message">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Fill out the form below and we'll get back to you soon</p>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-800 font-semibold">Thank you for your message!</p>
                <p className="text-green-700 text-sm mt-1">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button type="submit">
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
