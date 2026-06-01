import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Star, CheckCircle, Clock, ArrowRight, Instagram, Sparkles, Diamond } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511989064525?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20com%20a%20Jana%20Nail%20Designer.";
const MAP_LAT = "-23.705261";
const MAP_LONG = "-46.55369";

// Fade Up Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-pearl text-slate-900 selection:bg-rosegold selection:text-white">
      
      {/* 1. Navbar (Glassmorphism) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Diamond className="w-6 h-6 text-rosegold" />
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900">Jana Nail Designer</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-800">
            <a href="#sobre" className="hover:text-rosegold transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-rosegold transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-rosegold transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="hover:text-rosegold transition-colors">Avaliações</a>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-rosegold transition-colors flex items-center gap-2 shadow-lg">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Agendar Agora</span>
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/img_1.jpg" 
            alt="Unhas perfeitas background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pearl/90 via-pearl/60 to-pearl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-rosegold/30 text-rosegold-700 text-sm font-medium">
              <Star className="w-4 h-4 fill-rosegold text-rosegold" />
              <span>Avaliação 5.0 (179 comentários)</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6 text-slate-900 drop-shadow-sm">
              A Referência em Nail Design Premium em <span className="text-gradient block mt-2">São Bernardo do Campo</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-800 mb-10 leading-relaxed font-light">
              Eleve sua autoestima com alongamentos sofisticados, acabamento impecável e uma experiência de luxo na Vila Campestre.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-rosegold hover:bg-rosegold-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-glow flex items-center justify-center gap-3">
                Agendar Meu Horário <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#servicos" className="w-full sm:w-auto glass-panel px-8 py-4 rounded-full font-semibold text-slate-900 hover:bg-white/60 transition-all text-center">
                Ver Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. About / Exclusividade (VIP Experience) */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://image.pollinations.ai/prompt/luxurious%20beauty%20salon%20interior%20elegant%20design%20warm%20lighting%208k%20photorealistic?width=800&height=1000&nologo=true" 
                  alt="Interior Esmalteria Jana" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl max-w-xs">
                <p className="font-heading font-bold text-2xl text-rosegold-700 mb-1">100%</p>
                <p className="text-sm text-slate-800 font-medium">Satisfação das clientes e biossegurança garantida.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                A Experiência VIP <br/> <span className="text-gradient">Jana Nail Designer</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Muito além de fazer as unhas, oferecemos um momento de autocuidado exclusivo. Localizada na R. Príncipe Humberto, no coração da Vila Campestre, nossa esmalteria foi projetada para ser o seu refúgio de luxo em São Bernardo do Campo.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Atendimento personalizado e sem pressa.",
                  "Produtos importados de altíssima durabilidade.",
                  "Ambiente climatizado, silencioso e acolhedor.",
                  "Técnicas atualizadas com as tendências mundiais."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-rosegold flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b-2 border-rosegold text-rosegold-700 font-bold pb-1 hover:text-rosegold-900 hover:border-rosegold-900 transition-colors">
                Descubra a diferença <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section id="servicos" className="py-24 bg-champagne-50 relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rosegold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-slate-900">Nossos Serviços <br/><span className="text-gradient">Premium</span></h2>
            <p className="text-slate-600 text-lg">Técnicas avançadas para entregar resultados naturais, resistentes e incrivelmente belos.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Card 1 */}
            <motion.div variants={fadeUp} className="group glass-panel rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-rosegold/10 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src="https://image.pollinations.ai/prompt/beautiful%20hands%20with%20elegant%20fiberglass%20nail%20extensions%20nude%20color%208k%20photorealistic?width=800&height=600&nologo=true" alt="Alongamento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-white">Alongamento em Gel/Fibra</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6">Estrutura resistente com naturalidade impressionante. Ideal para quem busca unhas longas e inquebráveis.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-rosegold-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">Agendar <ArrowRight className="w-4 h-4" /></a>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={fadeUp} className="group glass-panel rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-rosegold/10 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src="https://image.pollinations.ai/prompt/beautiful%20hands%20with%20glossy%20red%20gel%20polish%20elegant%208k%20photorealistic?width=800&height=600&nologo=true" alt="Esmaltação" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-white">Esmaltação em Gel</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6">Brilho intenso e secagem imediata. Diga adeus a unhas descascando nos primeiros dias. Duração de até 21 dias.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-rosegold-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">Agendar <ArrowRight className="w-4 h-4" /></a>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div variants={fadeUp} className="group glass-panel rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-rosegold/10 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src="https://image.pollinations.ai/prompt/luxurious%20pedicure%20spa%20feet%20treatment%20warm%20lighting%208k%20photorealistic?width=800&height=600&nologo=true" alt="Spa dos Pés" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-white">Spa dos Pés VIP</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6">Tratamento profundo de hidratação e relaxamento. Esfoliação, massagem e cuidados estéticos completos.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-rosegold-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">Agendar <ArrowRight className="w-4 h-4" /></a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Why Us / Diferenciais */}
      <section id="diferenciais" className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Por que somos a escolha número 1 em <span className="text-rosegold-400">São Bernardo?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Nossa reputação foi construída com base em excelência, ética profissional e resultados deslumbrantes. Cada detalhe da Esmalteria Jana é pensado para você.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="glass-panel-dark p-6 rounded-2xl">
                  <Star className="w-10 h-10 text-rosegold-400 mb-4 fill-rosegold-400" />
                  <h4 className="font-bold text-xl mb-2 font-heading">Nota Máxima</h4>
                  <p className="text-slate-400 text-sm">Orgulho das nossas 179 avaliações 5 estrelas no Google Maps.</p>
                </div>
                <div className="glass-panel-dark p-6 rounded-2xl">
                  <Diamond className="w-10 h-10 text-rosegold-400 mb-4" />
                  <h4 className="font-bold text-xl mb-2 font-heading">Produtos Premium</h4>
                  <p className="text-slate-400 text-sm">Utilizamos apenas as melhores marcas do mercado mundial.</p>
                </div>
                <div className="glass-panel-dark p-6 rounded-2xl">
                  <CheckCircle className="w-10 h-10 text-rosegold-400 mb-4" />
                  <h4 className="font-bold text-xl mb-2 font-heading">Biossegurança</h4>
                  <p className="text-slate-400 text-sm">Esterilização rigorosa em autoclave e materiais descartáveis.</p>
                </div>
                <div className="glass-panel-dark p-6 rounded-2xl">
                  <Clock className="w-10 h-10 text-rosegold-400 mb-4" />
                  <h4 className="font-bold text-xl mb-2 font-heading">Durabilidade</h4>
                  <p className="text-slate-400 text-sm">Técnicas aplicadas para garantir semanas de unhas perfeitas.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
               <img 
                  src="https://image.pollinations.ai/prompt/close%20up%20of%20manicurist%20tools%20sterilized%20elegant%20salon%20environment%208k%20photorealistic?width=800&height=1000&nologo=true" 
                  alt="Diferenciais" 
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl shadow-rosegold/20"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section id="depoimentos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-rosegold-500 fill-rosegold-500" />)}
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-slate-900">O que dizem nossas clientes</h2>
            <p className="text-slate-600 text-lg">Avaliações reais de quem já viveu a experiência Jana Nail Designer.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { name: "Amanda Silva", text: "Simplesmente o melhor alongamento de São Bernardo! A Jana é extremamente cuidadosa, o ambiente é um luxo e a durabilidade é surreal." },
              { name: "Camila Costa", text: "Faço minhas unhas aqui há meses e não troco. A esmaltação em gel dura perfeitamente e o spa dos pés é relaxante demais. Recomendo de olhos fechados!" },
              { name: "Juliana Mendes", text: "Atendimento impecável desde a recepção até o final. As unhas ficam fininhas, com aspecto super natural. Vale cada centavo!" }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-panel p-8 rounded-3xl relative">
                <Sparkles className="absolute top-6 right-6 w-8 h-8 text-rosegold-200" />
                <p className="text-slate-700 italic mb-6 relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-champagne-200 flex items-center justify-center font-bold text-rosegold-700 font-heading text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <div className="flex text-rosegold-500">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Location & Footer */}
      <footer className="bg-slate-900 pt-24 pb-10 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-heading text-4xl font-bold text-white mb-6">Visite nosso <span className="text-rosegold-400">Espaço VIP</span></h2>
              <p className="text-slate-400 text-lg mb-10">Estamos estrategicamente localizados na Vila Campestre para oferecer o melhor conforto e acessibilidade para você.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-rosegold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Endereço</h4>
                    <p className="text-slate-400">R. Príncipe Humberto, 102 - Sala 1<br/>Vila Campestre, São Bernardo do Campo - SP<br/>09725-200</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-rosegold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Contato</h4>
                    <p className="text-slate-400">(11) 98906-4525</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex bg-rosegold hover:bg-rosegold-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-glow items-center gap-3">
                  <Phone className="w-5 h-5" /> Agendar Via WhatsApp
                </a>
              </div>
            </div>
            
            <div className="h-[400px] rounded-3xl overflow-hidden glass-panel-dark p-2">
              <iframe 
                className="w-full h-full rounded-2xl border-0" 
                loading="lazy" 
                allowFullScreen 
                src={`https://maps.google.com/maps?q=${MAP_LAT},${MAP_LONG}&z=15&output=embed`}
              ></iframe>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Diamond className="w-5 h-5 text-rosegold-500" />
              <span className="font-heading font-bold text-lg text-white">Jana Nail Designer</span>
            </div>
            <p className="text-slate-500 text-sm">© 2026 Jana Nail Designer. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-rosegold-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
