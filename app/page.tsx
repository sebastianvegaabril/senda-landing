"use client"

import {
  ArrowRight,
  CheckCircle,
  Users,
  MessageSquare,
  Search,
  Bell,
  Menu,
  Calendar,
  Shield,
  Award,
  Star,
  AlertTriangle,
  Lock,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function SendaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="w-full">
      <style jsx global>{`
      ::selection {
        background-color: #00A86B;
        color: white;
      }
      
      ::-moz-selection {
        background-color: #00A86B;
        color: white;
      }
    `}</style>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-[60px] md:h-[70px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-[#00A86B] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">S</span>
            </div>
            <span className="font-bold text-xl md:text-2xl text-gray-900">SENDA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#problema"
              className="text-gray-700 hover:text-[#00A86B] transition-colors duration-200 font-medium relative group py-2"
            >
              Problema
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A86B] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="#solucion"
              className="text-gray-700 hover:text-[#00A86B] transition-colors duration-200 font-medium relative group py-2"
            >
              Solución
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A86B] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="#demo"
              className="text-gray-700 hover:text-[#00A86B] transition-colors duration-200 font-medium relative group py-2"
            >
              Idea
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A86B] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="#equipo"
              className="text-gray-700 hover:text-[#00A86B] transition-colors duration-200 font-medium relative group py-2"
            >
              Equipo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A86B] transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop Contact Button */}
          <Button className="hidden lg:block bg-[#00A86B] hover:bg-[#00915C] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
            Contactar
          </Button>

          {/* Mobile Menu Button */}
          <Button
            size="sm"
            variant="ghost"
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              <a
                href="#problema"
                className="block px-4 py-3 text-gray-700 hover:text-[#00A86B] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Problema
              </a>
              <a
                href="#solucion"
                className="block px-4 py-3 text-gray-700 hover:text-[#00A86B] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Solución
              </a>
              <a
                href="#demo"
                className="block px-4 py-3 text-gray-700 hover:text-[#00A86B] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Demo
              </a>
              <a
                href="#equipo"
                className="block px-4 py-3 text-gray-700 hover:text-[#00A86B] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Equipo
              </a>
              <div className="pt-2 border-t border-gray-100 mt-2">
                <Button
                  className="w-full bg-[#00A86B] hover:bg-[#00915C] text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
                  onClick={handleLinkClick}
                >
                  Contactar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="pt-[60px] md:pt-[70px]">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen relative overflow-hidden flex items-center justify-center px-4"
          style={{
            background: "linear-gradient(180deg, #00A86B 0%, #E6F5EC 100%)",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {/* Food-related pattern */}
            <div className="absolute top-10 left-10 text-6xl opacity-30">🌿</div>
            <div className="absolute top-32 right-20 text-4xl opacity-20">🌾</div>
            <div className="absolute bottom-40 left-20 text-5xl opacity-25">🍃</div>
            <div className="absolute top-1/2 right-1/3 text-3xl opacity-15">🌱</div>
            <div className="absolute bottom-20 right-10 text-4xl opacity-20">🥬</div>

            {/* Subtle geometric pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-left space-y-6 lg:space-y-8">
                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Cumplí con las <span className="text-green-100">normativas alimentarias</span> sin complicaciones
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl text-green-50 leading-relaxed max-w-2xl">
                  SENDA automatiza y centraliza el cumplimiento normativo para que tu empresa esté siempre al día.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-green-50 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Demo Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 h-auto font-semibold bg-transparent transition-all duration-300"
                  >
                    Conocer Beneficios
                  </Button>
                </div>

                {/* Trust Indicator */}
                <div className="flex items-center gap-3 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Apoyado por el CIE – Universidad ORT Uruguay</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Dashboard Mockup */}
              <div className="relative">
                {/* Main Dashboard Mockup */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500">
                      app.senda.com.uy
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">Dashboard SENDA</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">En línea</span>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">98%</div>
                        <div className="text-xs text-emerald-700">Cumplimiento</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">24</div>
                        <div className="text-xs text-blue-700">Normativas</div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Actividad Reciente</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-gray-600">Normativa MSP actualizada</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <Bell className="h-4 w-4 text-orange-500" />
                          <span className="text-xs text-gray-600">Nueva alerta disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>

                <div className="absolute top-1/4 -right-6 bg-white rounded-full p-3 shadow-lg animate-bounce delay-500">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>

                <div className="absolute -bottom-2 left-1/4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1000">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>

                <div className="absolute top-1/2 -left-8 bg-white rounded-full p-3 shadow-lg animate-bounce delay-700">
                  <Award className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problema" className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            {/* Title - Same style as Hero */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                El Problema que Enfrentan las <span className="text-[#E53935]">Empresas Alimentarias</span>
              </h2>
            </div>

            {/* Problem Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 max-w-5xl mx-auto">
              {/* Normativas Complejas */}
              <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <AlertTriangle className="h-12 w-12 lg:h-16 lg:w-16 text-[#E53935]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Normativas Complejas</h3>
                  <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                    Cambian cada semana y no existe un sistema que indique qué normas son relevantes para tu empresa.
                  </p>
                </CardContent>
              </Card>

              {/* Acceso Engorroso */}
              <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Lock className="h-12 w-12 lg:h-16 lg:w-16 text-[#E53935]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Acceso Engorroso</h3>
                  <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                    La información está dispersa, sin búsquedas inteligentes ni contenido estructurado.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto relative">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" stroke="#E5E7EB" strokeWidth="6" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#E53935"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${78 * 2.83} ${(100 - 78) * 2.83}`}
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl lg:text-6xl font-bold text-[#E53935]">78%</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Complejidad de Acceso</h4>
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                  Identifica la complejidad de acceso como principal dificultad
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto relative">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" stroke="#E5E7EB" strokeWidth="6" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#E53935"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${23 * 2.83} ${(100 - 23) * 2.83}`}
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl lg:text-6xl font-bold text-[#E53935]">23%</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Revisiones Frecuentes</h4>
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                  Logra mantener revisiones periódicas frecuentes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solucion" className="min-h-screen bg-[#E6F5EC] flex items-center justify-center px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            {/* Title - Same style as Hero and Problem */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Nuestra Solución: <span className="text-emerald-600">SENDA</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Un portal inteligente que centraliza toda la normativa alimentaria uruguaya y utiliza IA para filtrar
                automáticamente la información según el perfil de cada empresa.
              </p>
            </div>

            {/* Features Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
              <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105 hover:bg-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 lg:h-12 lg:w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Búsqueda Inteligente</h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    Encuentra normativas específicas en segundos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105 hover:bg-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Bell className="h-10 w-10 lg:h-12 lg:w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Alertas Personalizadas</h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    Recibe notificaciones solo de cambios relevantes
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105 hover:bg-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-10 w-10 lg:h-12 lg:w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Chatbot Especializado</h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    Consultor virtual disponible 24/7
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105 hover:bg-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 lg:h-12 lg:w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Foro Colaborativo</h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    Intercambia experiencias con otros usuarios
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Row 2 */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Beneficios Clave</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Reduce 90% el tiempo</h4>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      invertido en tareas de seguimiento normativo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Filtrado automático</h4>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      Solo recibes normativas aplicables a tu empresa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Más económico</h4>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      USD 50-150/mes vs USD 250+ de consultoras
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Democratiza el acceso</h4>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      Ideal para PYMEs sin recursos especializados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section
          id="demo"
          className="min-h-screen bg-[#E6F5EC] flex items-center justify-center px-4 py-16"
        >
          <div className="container mx-auto max-w-7xl">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Ve <span className="text-emerald-600">SENDA</span> en Acción
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Descubre cómo SENDA puede transformar la gestión normativa de tu empresa con nuestra plataforma inteligente.
              </p>
            </div>

            {/* Video Container */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border-4 border-emerald-100">
                <div className="aspect-video rounded-2xl overflow-hidden relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/qjfc0_FwIO0?vq=hd1080"
                    title="SENDA Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipo" className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            {/* Title - Same style as Hero and Problem */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Nuestro <span className="text-emerald-600">Equipo</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Conoce al equipo que está transformando la gestión normativa alimentaria en Uruguay.
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-6xl mx-auto">
              {/* Alejo Fraga */}
              <a
                href="https://www.linkedin.com/in/alejo-fraga/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105">
                  <CardContent className="p-8 lg:p-12 text-center h-full flex flex-col">
                    {/* Avatar */}
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <img
                        src="/ALEJO2.jpg"
                        alt="Alejo Fraga Segarra"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Alejo Fraga Segarra</h3>
                    <p className="text-emerald-600 font-semibold mb-6 text-lg lg:text-xl">Co-fundador & CEO</p>

                    {/* Description */}
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                      Estudiante avanzado de Ingeniería en Sistemas (Universidad ORT). Perfil emprendedor con experiencia
                      en desarrollo de negocios y cercanía a la industria alimentaria a través de negocio familiar.
                    </p>

                    {/* Skills */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Estrategia de Negocios</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Liderazgo Empresarial</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Industria Alimentaria</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Sebastián Vega */}
              <a
                href="https://www.linkedin.com/in/sebastian-vega-88410223b/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105">
                  <CardContent className="p-8 lg:p-12 text-center h-full flex flex-col">
                    {/* Avatar */}
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <img
                        src="/SEBASTIAN.jpeg"
                        alt="Sebastian Vega Abril"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Sebastián Vega Abril</h3>
                    <p className="text-emerald-600 font-semibold mb-6 text-lg lg:text-xl">Co-fundador & CTO</p>

                    {/* Description */}
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                      Estudiante avanzado de Ingeniería en Sistemas (Universidad ORT). Experiencia en desarrollo con IA
                      para Comunidad InfoNegocios. Especialista en tecnología e innovación.
                    </p>

                    {/* Skills */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Inteligencia Artificial</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Desarrollo Full-Stack</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Innovación Tecnológica</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Experiencia Conjunta</h3>
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                  Ambos fundadores son docentes universitarios y han trabajado juntos en la mayoría de proyectos
                  académicos, desarrollando una dinámica colaborativa sólida. Su formación en Ingeniería en Sistemas les
                  brinda las herramientas necesarias para abordar desafíos complejos con metodologías ágiles y enfoque
                  en resolución de problemas.
                </p>

                {/* Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Docentes Universitarios</h4>
                    <p className="text-gray-600">Universidad ORT Uruguay</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Colaboración Sólida</h4>
                    <p className="text-gray-600">Múltiples proyectos conjuntos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Metodologías Ágiles</h4>
                    <p className="text-gray-600">Enfoque en resolución de problemas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-[#00A86B] flex items-center justify-center px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                ¿Listo para Revolucionar tu Cumplimiento Normativo?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
                Únete a la validación de nuestro MVP y sé parte de la transformación digital del sector alimentario
                uruguayo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md sm:max-w-none mx-auto">
                <Button
                  size="lg"
                  className="bg-white text-[#00A86B] hover:bg-gray-100 text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  Participar en Beta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#00A86B] text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 h-auto font-semibold bg-transparent transition-all duration-300 transform hover:scale-105"
                >
                  Contactar Equipo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0F172A] text-white py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Logo and Tagline */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg lg:text-xl">S</span>
                  </div>
                  <span className="font-bold text-2xl lg:text-3xl">SENDA</span>
                </div>
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-md">
                  Sistema Especializado en Normativas y Documentación Alimentaria
                </p>
              </div>

              {/* Contact by Person */}
              <div>
                <h4 className="font-bold text-xl lg:text-2xl mb-6 text-white">Contacto</h4>
                <div className="space-y-6">
                  {/* Alejo Fraga */}
                  <div>
                    <h5 className="font-semibold text-lg text-emerald-400 mb-2">Alejo Fraga</h5>
                    <div className="space-y-1 text-gray-400 text-base lg:text-lg">
                      <p className="hover:text-white transition-colors cursor-pointer">alejofraga22v2@gmail.com</p>
                      <p className="hover:text-white transition-colors cursor-pointer">+598 99 854 090</p>
                    </div>
                  </div>

                  {/* Sebastián Vega */}
                  <div>
                    <h5 className="font-semibold text-lg text-emerald-400 mb-2">Sebastián Vega</h5>
                    <div className="space-y-1 text-gray-400 text-base lg:text-lg">
                      <p className="hover:text-white transition-colors cursor-pointer">sebastian@vega.uy</p>
                      <p className="hover:text-white transition-colors cursor-pointer">+598 92 144 150</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400 text-base lg:text-lg">&copy; 2025 SENDA. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
