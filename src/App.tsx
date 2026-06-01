import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, ShieldCheck, Sparkles, Clock, Check, ChevronRight, Instagram } from 'lucide-react';

const WA_LINK = "https://wa.me/5511989064525?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20na%20Esmalteria%20Jana!";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
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
    <div className="font-sans text-brand-dark bg-brand-bg min-h-screen overflow-hidden">
      
      {/* HEADER / NAVIGATION */}
      <nav className="fixed w-full z-50 glass-panel py-4 transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-display font-bold tracking-tighter">
            JANA<span className="text-brand">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-brand-muted">
            <a href="#sobre" className="hover:text-brand transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-brand transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-brand transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="hover:text-brand transition-colors">Avaliações</a>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand transition-all flex items-center gap-2">
            Agendar <ChevronRight size={16} />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-transparent z-10"></div>
          <img 
            src="/images/img_1.jpg" 
            alt="Interior Esmalteria" 
            className="w-full h-full object-cover object-right"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6"
            >
              <div className="flex text-brand">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <span className="text-xs font-semibold tracking-wide uppercase">5.0 (179 Avaliações no Google)</span>
            </motion.div>
            
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              A Arte do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand/70">Nail Design</span> em São Bernardo.
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-lg lg:text-xl text-brand-muted mb-10 max-w-lg leading-relaxed"
            >
              Exclusividade, biossegurança e resultados impecáveis. Descubra a referência em estética para unhas na Vila Campestre.
            </motion.p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-8 py-4 rounded-full text-center font-medium hover:bg-brand transition-all flex items-center justify-center gap-2 shadow-2xl">
                Reservar Meu Horário
              </a>
              <a href="#servicos" className="glass-panel text-brand-dark px-8 py-4 rounded-full text-center font-medium hover:bg-white/90 transition-all flex items-center justify-center">
                Ver Procedimentos
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/img_2.jpg" 
                  alt="Jana Nail Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl max-w-[250px]">
                <p className="font-display font-bold text-2xl text-brand mb-1">5+ Anos</p>
                <p className="text-sm text-brand-muted">Elevando a autoestima de mulheres em São Bernardo do Campo.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">A Profissional</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6">Muito além de uma esmalteria.</h3>
              <div className="space-y-4 text-brand-muted text-lg leading-relaxed mb-8">
                <p>
                  Na Esmalteria Jana Nail Designer, acreditamos que suas mãos são o seu cartão de visita. Localizada no coração da Vila Campestre, criamos um santuário de beleza e relaxamento para mulheres exigentes.
                </p>
                <p>
                  Não fazemos apenas "unhas". Entregamos uma experiência completa de design, utilizando técnicas internacionais de alongamento e esmaltação em gel, com foco absoluto na saúde e integridade das suas unhas naturais.
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                {[
                  "Atendimento 100% Personalizado e Vip",
                  "Esterilização Rigorosa (Padrão Hospitalar)",
                  "Produtos Premium Importados"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                      <Check size={14} />
                    </div>
                    <span className="font-medium text-brand-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO VIP EXCLUSIVIDADE */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
              src="/images/img_3.jpg" 
              alt="Textura Luxo" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-brand mx-auto mb-6" />
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">A Experiência VIP Jana</h2>
            <p className="text-xl text-gray-300 font-light mb-10 leading-relaxed">
              O SPA Exclusivo da Esmalteria Jana Nail Designer. Um protocolo de relaxamento e estética criado unicamente para o público de São Bernardo do Campo. Sinta a diferença do alto padrão.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
              Garantir meu Atendimento VIP
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">Nosso Menu</h2>
            <h3 className="text-4xl font-display font-bold mb-4">Procedimentos de Alto Padrão</h3>
            <p className="text-brand-muted">Técnicas refinadas para resultados naturais, duradouros e impecáveis.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Alongamento em Fibra",
                desc: "Estrutura natural, fina e ultra resistente. O formato perfeito e duradouro.",
                img: "/images/img_4.jpg"
              },
              {
                title: "Esmaltação em Gel",
                desc: "Brilho intenso e secagem imediata. Unhas perfeitas por até 21 dias.",
                img: "https://image.pollinations.ai/prompt/close%20up%20perfect%20red%20gel%20nails%20manicure%20luxury%20shiny%208k%20photorealistic?width=800&height=800&nologo=true"
              },
              {
                title: "Spa dos Pés",
                desc: "Tratamento profundo com hidratação, esfoliação e relaxamento muscular.",
                img: "https://image.pollinations.ai/prompt/luxury%20foot%20spa%20treatment%20pedicure%20water%20flowers%20aesthetic%208k%20photorealistic?width=800&height=800&nologo=true"
              }
            ].map((srv, i) => (
              <motion.div key={i} variants={fadeIn} className="group rounded-3xl overflow-hidden bg-white shadow-glass border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-display font-bold mb-3">{srv.title}</h4>
                  <p className="text-brand-muted mb-6">{srv.desc}</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-brand font-semibold flex items-center gap-2 group-hover:text-brand-dark transition-colors">
                    Agendar Agora <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="w-full lg:w-1/2">
                <h2 className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">Padrão Ouro</h2>
                <h3 className="text-4xl font-display font-bold mb-8">Biossegurança e Conforto Absoluto.</h3>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
                      title: "Esterilização Hospitalar",
                      desc: "Todo material em aço passa por ultrassom e autoclave. 100% de segurança para sua saúde."
                    },
                    {
                      icon: <Sparkles className="w-6 h-6 text-brand" />,
                      title: "Produtos Internacionais",
                      desc: "Utilizamos apenas marcas de primeira linha, garantindo durabilidade extrema e zero danos."
                    },
                    {
                      icon: <Clock className="w-6 h-6 text-brand" />,
                      title: "Atendimento Pontual",
                      desc: "Respeitamos seu tempo. Seu horário é exclusivo e o atendimento é feito sem pressa."
                    }
                  ].map((diff, i) => (
                    <motion.div 
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center shrink-0">
                        {diff.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{diff.title}</h4>
                        <p className="text-brand-muted">{diff.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
             
             <div className="w-full lg:w-1/2">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="aspect-square rounded-[40px] overflow-hidden shadow-2xl"
               >
                  <img 
                    src="https://image.pollinations.ai/prompt/luxury%20nail%20tools%20sterilization%20clean%20aesthetic%20clinic%208k%20photorealistic?width=1000&height=1000&nologo=true" 
                    alt="Biossegurança" 
                    className="w-full h-full object-cover"
                  />
               </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center text-brand mb-4">
               <Star fill="currentColor" size={24}/>
               <Star fill="currentColor" size={24}/>
               <Star fill="currentColor" size={24}/>
               <Star fill="currentColor" size={24}/>
               <Star fill="currentColor" size={24}/>
            </div>
            <h3 className="text-4xl font-display font-bold mb-4">O que dizem nossas clientes</h3>
            <p className="text-brand-muted">Mais de 179 avaliações 5 estrelas atestam a qualidade Jana Nail Designer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Mariana S.",
                text: "Melhor nail designer de SBC! O alongamento fica super natural, fininho e não descola por nada. O ambiente é um luxo e super limpo."
              },
              {
                name: "Fernanda L.",
                text: "Achei a Jana pelo Google e foi a melhor descoberta. O SPA dos pés é surreal de bom, saí de lá pisando nas nuvens. Atendimento VIP mesmo!"
              },
              {
                name: "Camila R.",
                text: "Faço manutenção todo mês. A biossegurança me passa muita tranquilidade. As unhas estão sempre impecáveis. Recomendo de olhos fechados."
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-3xl"
              >
                <div className="flex text-brand mb-4">
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                </div>
                <p className="text-brand-dark italic mb-6">"{review.text}"</p>
                <p className="font-bold font-display">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTATO */}
      <footer className="bg-brand-dark text-white pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            <div>
              <div className="text-3xl font-display font-bold tracking-tighter mb-6">
                JANA<span className="text-brand">.</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Elevando o padrão de nail design em São Bernardo do Campo. Beleza, técnica e sofisticação em cada detalhe.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">R. Príncipe Humberto, 102 - Sala 1<br/>Vila Campestre, São Bernardo do Campo - SP<br/>09725-200</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-brand shrink-0" size={20} />
                  <p className="text-gray-300">(11) 98906-4525</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors">
                    <Instagram size={20} />
                 </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
              <iframe 
                title="Localização Esmalteria Jana"
                className="w-full h-full border-0" 
                loading="lazy" 
                allowFullScreen 
                src="https://maps.google.com/maps?q=-23.705261,-46.55369&z=15&output=embed">
              </iframe>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Esmalteria Jana Nail Designer. Todos os direitos reservados.</p>
            <p>Design de Alta Performance</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

