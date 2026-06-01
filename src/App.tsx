import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Phone, Clock, CheckCircle2, ChevronRight, Sparkles, Gem, ShieldCheck, Heart } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511989064525";

const FADE_IN = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden font-sans">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 glass bg-white/60 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand-500" />
            <span className="font-display font-bold text-xl tracking-tight">Esmalteria Jana</span>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 bg-brand-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/30">
            <Phone className="w-4 h-4" />
            Agendar Horário
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image.pollinations.ai/prompt/luxurious%20nail%20salon%20interior%20warm%20lighting%20photorealistic%208k%20neutral%20colors?width=1920&height=1080&nologo=true" 
            alt="Interior Esmalteria" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/80 to-[#FAF9F6]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.div variants={FADE_IN} className="flex items-center gap-2 mb-6 inline-flex bg-white/50 backdrop-blur-sm border border-brand-200 px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-brand-500 fill-brand-500" />
              <span className="text-sm font-semibold text-brand-900">Nota 5.0 (179 Avaliações no Google)</span>
            </motion.div>
            
            <motion.h1 variants={FADE_IN} className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900">
              A Referência em <span className="text-gradient">Nail Design</span> em São Bernardo do Campo
            </motion.h1>
            
            <motion.p variants={FADE_IN} className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Descubra a Esmalteria Jana, onde a arte de fazer unhas encontra o luxo absoluto. Localizada na Vila Campestre, oferecemos uma experiência de alto padrão para mulheres que exigem a perfeição.
            </motion.p>
            
            <motion.div variants={FADE_IN} className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all text-lg shadow-xl shadow-slate-900/20">
                Agendar via WhatsApp
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#experiencia" className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all text-lg border border-slate-200">
                Conhecer o Espaço
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / EXCLUSIVE SECTION */}
      <section id="experiencia" className="py-24 bg-sage-50 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={FADE_IN} className="relative">
              <div className="absolute inset-0 bg-brand-200 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://image.pollinations.ai/prompt/professional%20nail%20designer%20working%20on%20beautiful%20nails%20close%20up%20luxury%20salon%20brazilian%20woman%20elegant?width=800&height=900&nologo=true" 
                alt="Jana Nail Designer em ação" 
                className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[600px]"
              />
              <div className="absolute -bottom-8 -left-8 z-20 glass bg-white/80 p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-100 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-slate-900">+5000</p>
                    <p className="text-sm font-medium text-slate-600">Atendimentos VIP</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={FADE_IN}>
              <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3">A Experiência VIP</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
                O SPA Exclusivo da <br/>Esmalteria Jana
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Na Vila Campestre, criamos um refúgio pensado exclusivamente para você. Não somos apenas um salão de beleza; somos um ateliê de arte para suas unhas. Utilizamos técnicas avançadas, esterilização hospitalar e produtos importados para garantir durabilidade e sofisticação inigualáveis.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Ambiente Climatizado e Aromaterapia",
                  "Instrumentos 100% Esterilizados em Autoclave",
                  "Esmaltes Importados de Alta Durabilidade",
                  "Atendimento Personalizado e Exclusivo"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_IN}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3">Menu de Serviços</h2>
            <h3 className="text-4xl font-display font-bold mb-4">Arte e Cuidado em Cada Detalhe</h3>
            <p className="text-slate-600">Trabalhamos com as técnicas mais modernas do mercado para entregar um resultado perfeito, natural e duradouro.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Alongamento em Fibra de Vidro",
                desc: "Resistência extrema com acabamento ultra natural. Ideal para quem busca unhas longas e impecáveis sem perder a delicadeza.",
                img: "https://image.pollinations.ai/prompt/elegant%20long%20fiberglass%20nails%20manicure%20luxury%20diamond%20details%20photorealistic?width=600&height=800&nologo=true"
              },
              {
                title: "Banho de Gel",
                desc: "Proteção e brilho intenso para suas unhas naturais, prevenindo quebras e mantendo a esmaltação perfeita por muito mais tempo.",
                img: "https://image.pollinations.ai/prompt/perfect%20gel%20nails%20nude%20color%20luxury%20salon%20lighting%20photorealistic?width=600&height=800&nologo=true"
              },
              {
                title: "Spa dos Pés VIP",
                desc: "Um momento de puro relaxamento. Esfoliação, hidratação profunda, cutilagem impecável e massagem revigorante para seus pés.",
                img: "https://image.pollinations.ai/prompt/relaxing%20spa%20pedicure%20floral%20water%20luxury%20salon%20photorealistic?width=600&height=800&nologo=true"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }
                }}
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
                  <p className="text-slate-600 mb-6 line-clamp-3">{service.desc}</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700">
                    Agendar agora <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://image.pollinations.ai/prompt/luxury%20black%20and%20gold%20abstract%20marble%20texture?width=1920&height=1080&nologo=true" alt="Background Texture" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
            >
              <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">O Padrão Jana</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Por que somos a escolha número 1 em São Bernardo do Campo?
              </h3>
              
              <div className="space-y-8">
                {[
                  { icon: Gem, title: "Qualidade Premium", desc: "Utilizamos apenas as melhores marcas internacionais para garantir um resultado impecável e estonteante." },
                  { icon: ShieldCheck, title: "Biossegurança Rigorosa", desc: "Sua saúde em primeiro lugar. Processos completos de higienização e esterilização em autoclave de todos os equipamentos." },
                  { icon: Clock, title: "Durabilidade Comprovada", desc: "Técnicas exclusivas e aperfeiçoadas que garantem unhas perfeitas por semanas, sem lascas ou descolamentos." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-brand-900/50 p-4 rounded-2xl h-fit border border-brand-500/30">
                      <item.icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-dark border border-white/10">
                <img 
                  src="https://image.pollinations.ai/prompt/vip%20spa%20treatment%20room%20dark%20theme%20gold%20accents%20luxurious%20ambience%208k?width=800&height=1000&nologo=true" 
                  alt="Ambiente VIP" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_IN}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-brand-500 fill-brand-500" />
              ))}
            </div>
            <h3 className="text-4xl font-display font-bold mb-4">179 Avaliações de 5 Estrelas</h3>
            <p className="text-slate-600">O que nossas clientes falam sobre a experiência e transformação na Esmalteria Jana.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Amanda Silva", text: "Trabalho impecável! A Jana é super detalhista e as unhas de fibra duram horrores. O ambiente é super aconchegante, um luxo." },
              { name: "Carolina Mendes", text: "Melhor nail designer de São Bernardo do Campo! O banho de gel salvou minhas unhas e a esmaltação sempre fica perfeita. Recomendo de olhos fechados." },
              { name: "Fernanda Costa", text: "Atendimento maravilhoso, a gente se sente uma verdadeira rainha. O spa dos pés é incrível. Vale cada centavo investido, qualidade inquestionável!" }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
                }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-brand-100 relative"
              >
                <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-700 text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{review.name}</h5>
                    <p className="text-xs text-brand-600 uppercase tracking-wider font-semibold">Cliente VIP</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & LOCATION */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-8 h-8 text-brand-500" />
                <span className="font-display font-bold text-3xl">Esmalteria Jana</span>
              </div>
              <p className="text-slate-400 mb-10 max-w-md text-lg leading-relaxed">
                Elevando o padrão de estética para suas mãos e pés em São Bernardo do Campo. Um espaço exclusivo onde o luxo e o cuidado profundo se encontram.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-500 shrink-0 mt-1" />
                  <p className="text-slate-300 text-lg">
                    R. Príncipe Humberto, 102 - Sala 1<br/>
                    Vila Campestre, São Bernardo do Campo - SP<br/>
                    CEP: 09725-200
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-brand-500 shrink-0" />
                  <p className="text-slate-300 text-lg">11 98906-4525</p>
                </div>
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-600 transition-all text-lg shadow-xl shadow-brand-500/20 w-full sm:w-auto">
                Agendar Horário Agora
              </a>
            </div>

            <div className="relative rounded-3xl overflow-hidden glass-dark border border-white/10 shadow-2xl h-[450px]">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600" /> Nossa Localização
              </div>
              <iframe 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                loading="lazy" 
                allowFullScreen 
                src="https://maps.google.com/maps?q=-23.705261,-46.55369&z=15&output=embed">
              </iframe>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} Esmalteria Jana Nail Designer. Todos os direitos reservados.</p>
            <p className="font-semibold text-brand-500/50 hover:text-brand-500 transition-colors">Design & Development por Elite Agência</p>
          </div>
        </div>
      </footer>
    </div>
  );
}