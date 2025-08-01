"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Shield, Star, Quote, Target, Eye, Lightbulb, HandHeart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Director & Licensed Psychologist",
    credentials: "Ph.D., Licensed Psychologist",
    specialties: ["Trauma Therapy", "Cognitive Behavioral Therapy", "EMDR"],
    experience: "15+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Johnson specializes in trauma-informed care and has helped over 1,000 clients overcome PTSD and anxiety disorders.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Psychiatrist & Medical Director",
    credentials: "M.D., Board Certified Psychiatrist",
    specialties: ["Medication Management", "Bipolar Disorder", "Depression"],
    experience: "12+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Chen brings extensive experience in psychopharmacology and integrative treatment approaches to mental health care.",
  },
  {
    name: "Lisa Rodriguez, LCSW",
    role: "Senior Therapist",
    credentials: "LCSW, Certified Family Therapist",
    specialties: ["Family Therapy", "Couples Counseling", "Adolescent Therapy"],
    experience: "10+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Lisa specializes in family systems therapy and has a passion for helping families heal and grow together.",
  },
  {
    name: "Dr. James Wilson",
    role: "Research Director",
    credentials: "Ph.D., Clinical Psychology",
    specialties: ["Research", "Evidence-Based Practice", "Group Therapy"],
    experience: "18+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Wilson leads our research initiatives and ensures all treatments are grounded in the latest scientific evidence.",
  },
]

const statistics = [
  { number: "10,000+", label: "Lives Transformed", icon: Heart },
  { number: "150+", label: "Licensed Therapists", icon: Users },
  { number: "95%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Crisis Support", icon: Shield },
]

const testimonials = [
  {
    name: "Emily R.",
    rating: 5,
    text: "WEvolve changed my life. The therapists are incredibly compassionate and skilled. I finally feel like I have the tools to manage my anxiety.",
    treatment: "Individual Therapy for Anxiety",
  },
  {
    name: "Mark & Jennifer T.",
    rating: 5,
    text: "Our marriage was on the brink of divorce. The couples counseling at WEvolve helped us rediscover our love and communication skills.",
    treatment: "Couples Counseling",
  },
  {
    name: "David L.",
    rating: 5,
    text: "After struggling with depression for years, I found hope again through WEvolve's comprehensive treatment approach. Highly recommended.",
    treatment: "Depression Treatment",
  },
]

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every client with empathy, understanding, and genuine care for their well-being and healing journey.",
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description:
      "We maintain the highest standards of privacy and confidentiality, creating a safe space for healing and growth.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We are committed to providing the highest quality mental health care through evidence-based practices and continuous improvement.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We welcome and celebrate diversity, providing culturally sensitive care to individuals from all backgrounds and identities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new technologies and treatment approaches to enhance the effectiveness and accessibility of mental health care.",
  },
  {
    icon: HandHeart,
    title: "Empowerment",
    description:
      "We believe in empowering our clients with the knowledge, skills, and confidence to take control of their mental health journey.",
  },
]

const certifications = [
  "Joint Commission Accredited",
  "HIPAA Compliant",
  "APA Approved",
  "CARF Accredited",
  "ISO 27001 Certified",
  "SOC 2 Type II Compliant",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/wevolve-logo.png" alt="WEvolve Logo" width={40} height={40} className="w-10 h-10" />
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">WEVOLVE</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <span className="text-green-600 dark:text-green-400 px-3 py-2 text-sm font-medium">About Us</span>
                <Link
                  href="/doctors"
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium"
                >
                  Find Doctors
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                About <span className="text-green-600 dark:text-green-400">WEvolve</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We are a leading mental health platform dedicated to making quality mental health care accessible,
                affordable, and effective for everyone. Our mission is to evolve minds and empower lives through
                compassionate, evidence-based treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    Start Your Journey
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 bg-transparent"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {statistics.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                        <stat.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-3xl font-bold text-gray-800 dark:text-white">{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                      <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</CardTitle>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To provide accessible, compassionate, and evidence-based mental health care that empowers
                    individuals to overcome challenges, build resilience, and live fulfilling lives. We believe that
                    everyone deserves quality mental health support, regardless of their background or circumstances.
                  </p>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                      <Eye className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Our Vision</CardTitle>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To create a world where mental health care is as accessible and normalized as physical health care.
                    We envision a future where stigma around mental health is eliminated, and every person has the tools
                    and support they need to thrive mentally and emotionally.
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team of licensed professionals brings decades of combined experience in mental health care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full p-2">
                        <Award className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">{member.role}</p>
                    <Badge variant="outline" className="mb-3">
                      {member.credentials}
                    </Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Experience: {member.experience}</div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach to mental health care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="h-10 w-10 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from real people who have transformed their lives through our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Accreditations & Certifications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of care through rigorous accreditation and certification processes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-md transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">{cert}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of individuals who have found hope, healing, and happiness through WEvolve. Your mental
            health matters, and we're here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Begin Assessment
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 bg-transparent"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
