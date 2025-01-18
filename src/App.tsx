import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, School, Users, HandHeart, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and NGO Name */}
            <div className="flex items-center space-x-2">
              <img 
                src="./src/image/NGO_logo.jpg" 
                alt="Asha Foundation Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Asha Foundation</span>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
              <Button variant="outline" className="mr-2">Login</Button>
              <Button className="bg-red-600 hover:bg-red-700">Donate</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              {/* Search Bar - Mobile */}
              <div className="px-2 pt-2 pb-3">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full"
                />
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">About</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Contact</a>
                <div className="px-3 py-2 space-y-2">
                  <Button variant="outline" className="w-full">Login</Button>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Donate</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-top z-0"
          style={{ 
            backgroundImage: 'url("./src/image/NGO_intro.jpg")',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Empowering Lives Through Education</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to provide quality education and support to underprivileged children across communities
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Donate Now
          </Button>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Welcome to ASHA WELFARE SOCIETY</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Our mission is to create and sustain a strong, effective community that acknowledges and responds to the potential, achievements and interdependence of its diverse members. Rooted in and primarily focused on the Chelsea neighborhood, we seek to empower all individuals and families to achieve their highest potential, while maintaining a priority focus on those in economic need.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <School className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="text-gray-600">
                  Providing access to quality education for underprivileged children
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  Building strong communities through education and empowerment
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Heart className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Child Welfare</h3>
                <p className="text-gray-600">
                  Ensuring the well-being and development of every child
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">1000+</p>
              <p className="text-gray-600">Children Supported</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">50+</p>
              <p className="text-gray-600">Schools</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">100+</p>
              <p className="text-gray-600">Volunteers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">20+</p>
              <p className="text-gray-600">Communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600">Stay updated with our latest initiatives and make a difference in the community.</p>
          </div>
          <Card className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName"
                    type="text" 
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName"
                    type="text" 
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email address"
                />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Subscribe to Newsletter
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <HandHeart className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Volunteer With Us</h3>
                <p className="text-gray-600 mb-4">
                  Join our community of dedicated volunteers and make a difference in children's lives
                </p>
                <Button variant="outline" className="group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Heart className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Make a Donation</h3>
                <p className="text-gray-600 mb-4">
                  Support our mission by contributing to our programs and initiatives
                </p>
                <Button variant="outline" className="group">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src="./src/image/NGO_logo.jpg" 
                  alt="Asha Foundation Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Empowering lives through education and community support since 2010
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>About</li>
                <li>Programs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@asha.org</li>
                <li>+1 (555) 123-4567</li>
                <li>123 NGO Street, City</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Asha Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;