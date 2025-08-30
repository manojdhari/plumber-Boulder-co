import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Check,
  Clock,
  Droplet,
  Phone,
  MapPin,
  Mail,
  Star,
  WrenchIcon,
  ShowerHead,
  Wrench,
  Shield,
  Award,
  Users,
  Zap,
  ThumbsUp,
  Calendar,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Boulder Plumber | #1 Plumbing Services in Boulder, CO",
  description:
    "Boulder's #1 rated plumbing service! Same-day service. Call (720) 918-3388 for fast, reliable plumbing solutions in Boulder, CO.",
  keywords:
    "plumber boulder co, emergency plumber boulder, plumbing services boulder colorado, water heater repair boulder, drain cleaning boulder, licensed plumber boulder, same day plumbing boulder",
  metadataBase: new URL("https://plumbingboulderco.com"),
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <Droplet className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Boulder Pro Plumbing
                </h1>
                <p className="text-xs text-gray-600 font-medium">Licensed • Insured • Trusted</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-blue-600">
                <Phone className="h-5 w-5" />
                <div className="text-right">
                  <p className="text-xs text-gray-600">Call Now</p>
                  <Link href="tel:+17209183388" className="text-lg font-bold hover:text-blue-700">
                    (720) 918-3388
                  </Link>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-orange-100 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Available 24/7 • Emergency Service</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                      Boulder's
                    </span>
                    <br />
                    <span className="text-gray-900">#1 Plumber</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed">
                    Fast, reliable plumbing solutions when you need them most. Licensed professionals serving Boulder
                    County with <span className="text-orange-600 font-bold">same-day service</span>.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl shadow-xl text-lg"
                    asChild
                  >
                    <Link href="tel:+17209183388">
                      <Phone className="mr-3 h-5 w-5" />
                      Call (720) 918-3388
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg bg-transparent"
                    asChild
                  >
                    <Link href="#services">
                      <ArrowRight className="mr-3 h-5 w-5" />
                      View Services
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="font-bold text-gray-900">Licensed</p>
                    <p className="text-sm text-gray-600">& Insured</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-yellow-600" />
                    </div>
                    <p className="font-bold text-gray-900">5-Star</p>
                    <p className="text-sm text-gray-600">Rated</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                    <p className="font-bold text-gray-900">Same Day</p>
                    <p className="text-sm text-gray-600">Service</p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/images/hero-plumber.jpg"
                    alt="Professional Boulder plumber fixing kitchen sink"
                    width={600}
                    height={700}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <ThumbsUp className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">500+</p>
                        <p className="text-sm text-gray-600">Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">24/7</p>
                        <p className="text-sm text-gray-600">Emergency</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-orange-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Plumbing Emergency?</h3>
                  <p className="text-red-100">We're available 24/7 for urgent repairs</p>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl"
                asChild
              >
                <Link href="tel:+17209183388">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Call
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Expertise
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Complete Plumbing Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency repairs to complete installations, our licensed professionals handle every plumbing
                challenge with precision and care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Repairs</h3>
                  <p className="text-gray-600 mb-6">
                    Burst pipes, major leaks, and urgent plumbing issues resolved quickly to prevent property damage.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      24/7 availability
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      30-minute response
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Damage prevention
                    </li>
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShowerHead className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fixture Installation</h3>
                  <p className="text-gray-600 mb-6">
                    Professional installation of sinks, toilets, showers, and faucets with precision and care.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Bathroom remodels
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Kitchen upgrades
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Water-efficient options
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Droplet className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Drain Cleaning</h3>
                  <p className="text-gray-600 mb-6">
                    Advanced drain cleaning solutions using professional equipment to clear stubborn blockages.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Hydro jetting
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Camera inspection
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Root removal
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wrench className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Water Heater Service</h3>
                  <p className="text-gray-600 mb-6">
                    Complete water heater solutions including installation, repair, and maintenance services.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Tankless systems
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Energy efficient
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Same-day service
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <WrenchIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Leak Detection</h3>
                  <p className="text-gray-600 mb-6">
                    Advanced leak detection technology to find hidden leaks and prevent costly water damage.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Non-invasive methods
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Slab leak detection
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Pipe rerouting
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sewer Services</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive sewer line services including inspection, cleaning, repair, and replacement.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Video inspection
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Trenchless repair
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      Line replacement
                    </li>
                  </ul>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image
                  src="/images/plumbing-work.jpg"
                  alt="Professional plumbing services in Boulder Colorado"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <p className="text-3xl font-black">15+</p>
                    <p className="text-blue-100">Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Why Choose Us
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                    Boulder's Most Trusted Plumbing Experts
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    With over 15 years of experience serving Boulder County, we've built our reputation on quality
                    workmanship, honest pricing, and exceptional customer service.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Star className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-gray-600">Star Rating</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                      <p className="text-gray-600">
                        Fully licensed, bonded, and insured professionals who meet the highest industry standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                      <p className="text-gray-600">
                        Fast response times with same-day service available for most plumbing issues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ThumbsUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
                      <p className="text-gray-600">
                        We stand behind our work with a complete satisfaction guarantee on all services.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl"
                >
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Customer Reviews
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">What Boulder Says About Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers throughout Boulder County have to
                say.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Incredible service! They fixed our burst pipe emergency within 30 minutes of calling. Professional,
                    clean, and reasonably priced. Highly recommend!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">SM</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Sarah Martinez</p>
                      <p className="text-gray-600 text-sm">North Boulder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Best plumber in Boulder! They installed our new water heater and explained everything clearly. Fair
                    pricing and excellent workmanship."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-green-600">DL</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">David Lopez</p>
                      <p className="text-gray-600 text-sm">South Boulder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Finally found a plumber who shows up on time and does quality work. They solved our recurring drain
                    problem permanently. Will definitely call again!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-purple-600">JK</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Jennifer Kim</p>
                      <p className="text-gray-600 text-sm">Louisville</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Service Coverage
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Serving Boulder County</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional plumbing services throughout Boulder County and surrounding communities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Boulder",
                "Louisville",
                "Lafayette",
                "Superior",
                "Longmont",
                "Niwot",
                "Gunbarrel",
                "Erie",
                "Broomfield",
                "Westminster",
                "Thornton",
                "Arvada",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
                >
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-3" />
                  <p className="font-bold text-gray-900">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Get In Touch
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Fix Your Plumbing?</h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Don't let plumbing problems disrupt your day. Contact Boulder's most trusted plumbing professionals
                    for fast, reliable service.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Call or Text</p>
                      <Link href="tel:+17209183388" className="text-2xl font-bold hover:text-blue-400">
                        (720) 918-3388
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Service Address</p>
                      <p className="text-xl font-bold">2537 Pearl St, Boulder, CO 80302, USA</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email Us</p>
                      <Link href="mailto:info@plumbingboulderco.com" className="text-xl font-bold hover:text-green-400">
                        info@plumbingboulderco.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Business Hours</p>
                      <p className="text-xl font-bold">24/7 Emergency Service</p>
                      <p className="text-gray-300">Mon-Fri: 7AM-7PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="(720) 918-3388"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="installation">Fixture Installation</option>
                      <option value="drain">Drain Cleaning</option>
                      <option value="water-heater">Water Heater Service</option>
                      <option value="leak">Leak Detection</option>
                      <option value="sewer">Sewer Line Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Describe Your Issue
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us about your plumbing issue..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl text-lg">
                    Get Free Estimate
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Don't Wait - Call Boulder's Best Plumber Now!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Every minute counts when you have a plumbing emergency. Our licensed professionals are standing by to help
              you 24/7.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl text-2xl shadow-xl"
              asChild
            >
              <Link href="tel:+17209183388">
                <Phone className="mr-3 h-6 w-6" />
                (720) 918-3388
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <Droplet className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Boulder Pro Plumbing</h3>
                  <p className="text-sm text-gray-400">Licensed • Insured • Trusted</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Boulder County's most trusted plumbing service. Professional solutions for residential and commercial
                properties with 24/7 emergency service.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <Link href="tel:+17209183388" className="text-white font-bold hover:text-blue-400">
                  (720) 918-3388
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Emergency Repairs
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Fixture Installation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Drain Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Water Heater Service
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Leak Detection
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Sewer Line Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Service Areas</h4>
              <ul className="space-y-3">
                <li>Boulder</li>
                <li>Louisville</li>
                <li>Lafayette</li>
                <li>Superior</li>
                <li>Longmont</li>
                <li>Niwot</li>
                <li>Gunbarrel</li>
                <li>Erie</li>
                <li>Broomfield</li>
                <li>Westminster</li>
                <li>Thornton</li>
                <li>Arvada</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Business Info</h4>
              <ul className="space-y-3">
                <li>
                  <strong className="text-white">Hours:</strong>
                  <br />
                  Mon-Fri: 7AM-7PM
                  <br />
                  24/7 Emergency Service
                </li>
                <li>
                  <strong className="text-white">Address:</strong>
                  <br />
                  2537 Pearl St
                  <br />
                  Boulder, CO 80302, USA
                </li>
                <li>
                  <strong className="text-white">Email:</strong>
                  <br />
                  <Link href="mailto:info@plumbingboulderco.com" className="hover:text-white">
                    info@plumbingboulderco.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Boulder Pro Plumbing. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
