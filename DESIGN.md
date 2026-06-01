# Software Design Document (SDD) - Esmalteria Jana Nail Designer

## 1. Visão Geral
Este documento define a arquitetura de UI/UX, o design system e a estratégia de conversão para a landing page "high-ticket" da **Esmalteria Jana Nail Designer**. O objetivo é criar uma presença digital que transpire luxo, higiene impecável e exclusividade, diferenciando a Jana de salões comuns e justificando um ticket premium.

## 2. Identidade Visual e Design System

### 2.1 Paleta de Cores
A paleta foi desenhada para o nicho de estética de luxo, misturando tons suaves de nude com toques contemporâneos de ouro rosa e contrastes marcantes para legibilidade e elegância.
- **Background Principal:** `#FAFAFA` (Off-white puro, limpo e clínico).
- **Background Secundário / Seções:** `#FDFBF7` (Creme muito suave, remete a pele e cuidado).
- **Acentos Premium (Botões, Ícones, Destaques):** `#D4AF37` (Ouro envelhecido suave / Rose Gold sutil).
- **Texto Principal:** `#1A1A1A` (Grafite escuro, quase preto, para máximo contraste elegante).
- **Texto Secundário:** `#5E5E5E` (Cinza médio-escuro).

### 2.2 Tipografia (Premium 2026)
Fontes geométricas, finas e modernas que passam uma sensação de exclusividade e vanguarda.
- **Headings (H1, H2, H3):** `Syne` - Traz um toque vanguardista, com proporções que remetem à alta moda.
- **Body & UI:** `Plus Jakarta Sans` - Limpa, ultra-legível, contemporânea.

### 2.3 UI/UX Patterns (Apple Liquid Glass & UX 2026)
- **Glassmorphism:** Uso agressivo de fundos translúcidos (`backdrop-blur-md`, `bg-white/70`) sobre imagens ricas.
- **Bordas e Sombras:** Bordas reflexivas (`border-white/20`) e sombras suaves e multicamadas (`shadow-[0_20px_50px_rgba(0,0,0,0.05)]`) para criar profundidade extrema sem pesar.
- **Animações (Framer Motion):** Micro-interações de reveal (fade up, slow scale) conforme o scroll do usuário. Nenhum elemento entra seco na tela.

## 3. Estrutura da Landing Page (High-Ticket Flow)

1. **Hero Section (A Primeira Impressão):**
   - Imagem cinemática gerada por IA de unhas perfeitas e luxuosas.
   - Headline agressiva e focada em localidade e status.
   - Badge social proof: "⭐⭐⭐⭐⭐ 5.0 (179 Avaliações)".
   - CTA primário para WhatsApp.

2. **Sobre (A Artista por trás do Luxo):**
   - Focado na exclusividade do atendimento em Vila Campestre, São Bernardo do Campo.
   - Posicionamento da Jana como "Nail Designer" e não apenas "manicure".

3. **Seção de Exclusividade (Oferta VIP):**
   - "A Experiência Jana: SPA de Unhas e Alongamento de Alta Retenção".
   - Uso do nome da empresa para forçar a autoridade e a exclusividade do serviço.

4. **Serviços Detalhados (O Cardápio de Luxo):**
   - Cards com imagens fotorealistas geradas por IA (Alongamento, Esmaltação em Gel, SPA dos Pés).
   - Glassmorphism nos cards, hover effects sofisticados.

5. **Por que nos Escolher (Diferenciais Técnicos e Perceptuais):**
   - Foco em esterilização (autoclave), produtos premium importados e ambiente climatizado.

6. **Depoimentos (Prova Social Incontestável):**
   - Destaque para as 179 avaliações 5 estrelas do Google.
   - Design dos depoimentos imitando cards flutuantes.

7. **Footer e Localização (Conversão Final):**
   - Integração do Google Maps com as coordenadas exatas (Lat: -23.705261, Long: -46.55369).
   - Informações de contato e último CTA para o WhatsApp.

## 4. Integração de Imagens Reais (Pollinations.ai)
Serão utilizadas URLs geradas dinamicamente com prompts focados em realismo 8K.
- Exemplo de Prompt: `luxurious%20nail%20salon%20interior%20rose%20gold%20details%20warm%20lighting%208k%20photorealistic%20cinematic`

## 5. Requisitos Técnicos
- **Framework:** React 18 + Vite.
- **Estilo:** Tailwind CSS.
- **Ícones:** Lucide React.
- **Animações:** Framer Motion.
- **Mapa:** Iframe nativo do Google Maps usando coordenadas.
