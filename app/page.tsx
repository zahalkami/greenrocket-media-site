import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Leaf,
  Globe,
  Share2,
  Package,
  Zap,
  Heart,
  Users,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Rocket className="h-8 w-8 text-green-600 transform rotate-45" />
              <Leaf className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-bold text-green-800">GreenRocket Media</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-green-700 hover:text-green-600">Služby</Link>
            <Link href="#about" className="text-green-700 hover:text-green-600">O nás</Link>
            <Link href="#portfolio" className="text-green-700 hover:text-green-600">Portfolio</Link>
            <Link href="#contact" className="text-green-700 hover:text-green-600">Kontakt</Link>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Získat nabídku</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Rocket className="h-16 w-16 text-green-600 animate-pulse transform rotate-45" />
              <Leaf className="h-8 w-8 text-green-500 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">GreenRocket Media</h1>
          <p className="text-2xl md:text-3xl text-green-700 mb-8 font-medium">Vystřelíme vaši značku rychle zeleně!</p>
          <p className="text-lg text-green-600 mb-10 max-w-2xl mx-auto">
            Spojujeme rychlost rakety s přirozenou silou přírody. Pomáháme značkám růst udržitelně a efektivně v digitálním světě.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Získat cenovou nabídku
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 bg-transparent"
            >
              Prohlédnout portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Naše služby</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">Poskytujeme komplexní digitální řešení pro růst vaší značky.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full group-hover:bg-green-200">
                  <Globe className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Web Development</CardTitle>
                <CardDescription className="text-green-600">Moderní, rychlé a SEO optimalizované webové stránky.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Responzivní design</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />SEO optimalizace</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Rychlé načítání</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full group-hover:bg-orange-200">
                  <Share2 className="h-12 w-12 text-orange-600" />
                </div>
                <CardTitle className="text-green-800">Social Media</CardTitle>
                <CardDescription className="text-green-600">Správa sociálních sítí a tvorba engaging obsahu.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-orange-500 mr-2" />Tvorba obsahu</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-orange-500 mr-2" />Plánování příspěvku</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-orange-500 mr-2" />Analýza výsledků</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full group-hover:bg-blue-200">
                  <Package className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-green-800">Balíčky</CardTitle>
                <CardDescription className="text-green-600">Cenově dostupné balíčky pro malé a střední firmy.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Flexibilní ceny</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Bez skrytých poplatků</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Měsíční platby</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">O nás</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto">Jsme tým kreativních profesionálů, kteří věří v sílu přírody a rychlost inovací.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="mx-auto mb-4 p-6 bg-green-100 rounded-full w-fit">
                <Zap className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Rychlost</h3>
              <p className="text-green-600">Dodáváme projekty rychle a efektivně.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-6 bg-orange-100 rounded-full w-fit">
                <Rocket className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Chytrost</h3>
              <p className="text-green-600">Používáme moderní technologie a kreativní přístupy.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-6 bg-blue-100 rounded-full w-fit">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Přátelskost</h3>
              <p className="text-green-600">Věříme v otevřenou komunikaci a partnerství.</p>
            </div>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-8">Náš tým</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">Anna Zelená</CardTitle>
                  <CardDescription className="text-green-600">Creative Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm">Specialistka na brand design a kreativní strategie.</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                    <Rocket className="h-12 w-12 text-orange-600" />
                  </div>
                  <CardTitle className="text-green-800">Tomáš Rychlý</CardTitle>
                  <CardDescription className="text-green-600">Lead Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm">Full-stack vývojář s láskou k rychlým a efektivním řešením.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <Share2 className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-green-800">Petra Sociální</CardTitle>
                  <CardDescription className="text-green-600">Social Media Manager</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm">Expertka na sociální sítě a digital marketing.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Portfolio</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">Podívejte se na některé z našich projektů.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600">
                <Image src="/placeholder.svg?height=200&width=400" alt="EcoShop" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-green-800">EcoShop</CardTitle>
                <CardDescription className="text-green-600">E-commerce pro udržitelé produkty</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Next.js</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">E-commerce</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">SEO</Badge>
                </div>
                <p className="text-green-700 text-sm">Moderní e-shop zaměřený na ekologické produkty.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-600">
                <Image src="/placeholder.svg?height=200&width=400" alt="Bistro Verde" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-green-800">Bistro Verde</CardTitle>
                <CardDescription className="text-green-600">Social Media kampaň</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Instagram</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Facebook</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Content</Badge>
                </div>
                <p className="text-green-700 text-sm">Komplexní správa sociálních sítí pro restauraci.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                <Image src="/placeholder.svg?height=200&width=400" alt="TechStart" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-green-800">TechStart</CardTitle>
                <CardDescription className="text-green-600">Firemní web pro startup</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">React</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Branding</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">UX/UI</Badge>
                </div>
                <p className="text-green-700 text-sm">Moderní prezentační web pro technologický startup.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Co říkají naši klienti</h2>
            <p className="text-xl text-green-600">Jsme hrdí na spokojenost našich klientů.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}
                </div>
                <CardTitle className="text-green-800">Marie Nováková</CardTitle>
                <CardDescription className="text-green-600">Majitelka EcoShop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">"GreenRocket Media vytvořili úžasný e-shop, který perfektně odráží naše hodnoty udržitelnosti."</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}
                </div>
                <CardTitle className="text-green-800">Pavel Svoboda</CardTitle>
                <CardDescription className="text-green-600">Šéfkuchař Bistro Verde</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">"Díky jejich správě sociálních sítí se naše restaurace stala známou a vyhledávanou."</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}
                </div>
                <CardTitle className="text-green-800">Jana Technická</CardTitle>
                <CardDescription className="text-green-600">CEO TechStart</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">"Náš nový web je nejen krásný, ale i velmi rychlý a funkční."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Kontaktujte nás</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">Máte projekt? Napište nám a společně vystřelíme vaši značku k úspěchu!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Napište nám</CardTitle>
                  <CardDescription className="text-green-600">Rádi si s vámi promluvíme o vašem projektu.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-700 mb-1">Jméno</label>
                    <Input id="name" placeholder="Vaše jméno" className="border-green-200 focus:border-green-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="vas@email.cz" className="border-green-200 focus:border-green-400" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-1">Zpráva</label>
                    <Textarea id="message" placeholder="Popište nám váš projekt..." rows={4} className="border-green-200 focus:border-green-400" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Odeslat zprávu
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Kontaktní informace</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">info@greenrocketmedia.cz</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">+420 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">Praha, Česká republika</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Sledujte nás</h3>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"><Facebook className="h-4 w-4" /></Button>
                  <Button size="icon" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"><Instagram className="h-4 w-4" /></Button>
                  <Button size="icon" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"><Twitter className="h-4 w-4" /></Button>
                  <Button size="icon" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"><Linkedin className="h-4 w-4" /></Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-green-800 mb-2">Rychlá odpověď zaručena!</h4>
                <p className="text-green-700">Odpovídáme na všechny dotazy do 24 hodin. Jsme tu pro vás!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Rocket className="h-8 w-8 text-green-400 transform rotate-45" />
                  <Leaf className="h-4 w-4 text-green-300 absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold">GreenRocket Media</span>
              </div>
              <p className="text-green-200">Vystřelíme vaši značku rychle zeleně!</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Služby</h4>
              <ul className="space-y-2 text-green-200">
                <li><Link href="#" className="hover:text-white">Web Development</Link></li>
                <li><Link href="#" className="hover:text-white">Social Media</Link></li>
                <li><Link href="#" className="hover:text-white">SEO Optimalizace</Link></li>
                <li><Link href="#" className="hover:text-white">Branding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Společnost</h4>
              <ul className="space-y-2 text-green-200">
                <li><Link href="#about" className="hover:text-white">O nás</Link></li>
                <li><Link href="#portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link href="#contact" className="hover:text-white">Kontakt</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <div className="space-y-2 text-green-200">
                <p>info@greenrocketmedia.cz</p>
                <p>+420 123 456 789</p>
                <div className="flex space-x-3 mt-4">
                  <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
                  <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
                  <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
                  <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; {new Date().getFullYear()} GreenRocket Media. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
