import { ArrowRight, CheckCircle, Users, Zap, Shield, MessageSquare, Search, Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SendaLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SENDA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problema" className="text-gray-600 hover:text-emerald-600 transition-colors">Problema</a>
            <a href="#solucion" className="text-gray-600 hover:text-emerald-600 transition-colors">Solución</a>
            <a href="#demo" className="text-gray-600 hover:text-emerald-600 transition-colors">Demo</a>
            <a href="#equipo" className="text-gray-600 hover:text-emerald-600 transition-colors">Equipo</a>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Contactar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              🚀 Financiado por ANDE/ANII
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-emerald-600">SENDA</span>
              <br />
              Sistema Especializado en Normativas y Documentación Alimentaria
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              La primera plataforma de software con inteligencia artificial diseñada específicamente 
              para facilitar el cumplimiento normativo en la industria alimentaria uruguaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Ver Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              El Problema que Enfrentan las Empresas Alimentarias
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Normativas Complejas</h3>
                  <p className="text-red-700">
                    Las regulaciones se actualizan semanalmente, pero no existe un mecanismo 
                    que garantice su difusión inmediata ni identifique qué normas son relevantes para cada empresa.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Acceso Engorroso</h3>
                  <p className="text-red-700">
                    La información está en plataformas difíciles de navegar, con grandes volúmenes 
                    de contenido no estructurado y sin herramientas de búsqueda eficientes.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto en las Empresas</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">78%</div>
                  <p className="text-gray-600">Identifica la complejidad de acceso como principal dificultad</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">23%</div>
                  <p className="text-gray-600">Logra mantener revisiones periódicas frecuentes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">50,000</div>
                  <p className="text-gray-600">UR en multas por incumplimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Nuestra Solución: SENDA
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Un portal inteligente que centraliza toda la normativa alimentaria uruguaya y 
              utiliza IA para filtrar automáticamente la información según el perfil de cada empresa.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Search className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Búsqueda Inteligente</h3>
                  <p className="text-gray-600 text-sm">Encuentra normativas específicas en segundos</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Bell className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Alertas Personalizadas</h3>
                  <p className="text-gray-600 text-sm">Recibe notificaciones solo de cambios relevantes</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Chatbot Especializado</h3>
                  <p className="text-gray-600 text-sm">Consultor virtual disponible 24/7</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Foro Colaborativo</h3>
                  <p className="text-gray-600 text-sm">Intercambia experiencias con otros usuarios</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Beneficios Clave</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduce 90% el tiempo</h4>
                    <p className="text-gray-600">invertido en tareas de seguimiento normativo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Filtrado automático</h4>
                    <p className="text-gray-600">Solo recibes normativas aplicables a tu empresa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Más económico</h4>
                    <p className="text-gray-600">USD 50-150/mes vs USD 250+ de consultoras</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Democratiza el acceso</h4>
                    <p className="text-gray-600">Ideal para PYMEs sin recursos especializados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ve SENDA en Acción
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Descubre cómo SENDA puede transformar la gestión normativa de tu empresa
            </p>
            
            {/* Video Container */}
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Video Demostrativo</h3>
                  <p className="text-gray-500">
                    Próximamente: Video explicativo del funcionamiento de SENDA
                    <br />
                    <span className="text-sm">(Duración máxima: 5 minutos)</span>
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 italic">
              * El video demostrativo será agregado durante el proceso de validación del MVP
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Nuestro Equipo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">AF</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Alejo Fraga Segarra</h3>
                  <p className="text-emerald-600 font-medium mb-3">Co-fundador & CEO</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Estudiante avanzado de Ingeniería en Sistemas (Universidad ORT). 
                    Perfil emprendedor con experiencia en desarrollo de negocios y cercanía 
                    a la industria alimentaria a través de negocio familiar.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary">Estrategia</Badge>
                    <Badge variant="secondary">Negocios</Badge>
                    <Badge variant="secondary">Liderazgo</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">SV</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sebastián Vega Abril</h3>
                  <p className="text-emerald-600 font-medium mb-3">Co-fundador & CTO</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Estudiante avanzado de Ingeniería en Sistemas (Universidad ORT). 
                    Experiencia en desarrollo con IA para Comunidad InfoNegocios. 
                    Especialista en tecnología e innovación.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary">IA</Badge>
                    <Badge variant="secondary">Desarrollo</Badge>
                    <Badge variant="secondary">Tecnología</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experiencia Conjunta</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Ambos fundadores son docentes universitarios y han trabajado juntos en la mayoría 
                de proyectos académicos, desarrollando una dinámica colaborativa sólida. Su formación 
                en Ingeniería en Sistemas les brinda las herramientas necesarias para abordar desafíos 
                complejos con metodologías ágiles y enfoque en resolución de problemas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Mercado Objetivo
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">4,100</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Empresas Alimentarias</h3>
                  <p className="text-gray-600 text-sm">en Uruguay que necesitan cumplir normativas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                  <h3 className="font-semibold text-gray-900 mb-2">PYMEs Objetivo</h3>
                  <p className="text-gray-600 text-sm">Pequeñas y medianas empresas sin recursos especializados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
                  <h3 className="font-semibold text-gray-900 mb-2">MiPYMEs</h3>
                  <p className="text-gray-600 text-sm">del sector empresarial alimentario uruguayo</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modelo de Suscripción</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Plan Empresarial</h4>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">USD 50-100</div>
                  <p className="text-gray-600 mb-4">por mes</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Filtrado automático por perfil</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Alertas personalizadas</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Chatbot básico</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Acceso al foro</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Plan Consultor</h4>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">USD 100-150</div>
                  <p className="text-gray-600 mb-4">por mes</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Acceso completo a normativas</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Búsquedas avanzadas</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Chatbot especializado</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />Herramientas profesionales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para Revolucionar tu Cumplimiento Normativo?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Únete a la validación de nuestro MVP y sé parte de la transformación 
              digital del sector alimentario uruguayo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3">
                Participar en Beta
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700 text-lg px-8 py-3">
                Contactar Equipo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-xl">SENDA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Sistema Especializado en Normativas y Documentación Alimentaria
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>alejofraga22v2@gmail.com</p>
                <p>sebastian@vega.uy</p>
                <p>+598 99 854 090</p>
                <p>+598 92 144 150</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ubicación</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Montevideo, Uruguay</p>
                <p>Canelones, Uruguay</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Financiado por</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>ANDE</p>
                <p>ANII</p>
                <p>CIE</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 SENDA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
