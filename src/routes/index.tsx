import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

const HERO_BACKGROUND = "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/bg-sobremesaszero.webp";
const HERO_PRIMARY_IMAGE = "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/09/new-hero-mockup_szero.webp";
const HERO_SECONDARY_IMAGE = "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/04/receitas-hero_books-vert_mobile1-1.webp";
const HERO_TESTIMONIAL_IMAGE = "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/amanda-ballis-e1743041083343.webp";

const heroHighlights: { title: string; description: string }[] = [
  {
    title: "Zero Açúcar",
    description: "Receitas equilibradas para controlar a glicemia sem abrir mão do sabor.",
  },
  {
    title: "Zero Glúten",
    description: "Massas e bases com farinhas funcionais fáceis de encontrar em qualquer mercado.",
  },
  {
    title: "Zero Lactose",
    description: "Cremes e recheios com leites vegetais que preservam a cremosidade.",
  },
  {
    title: "Sabor Original",
    description: "Texturas e aromas fiéis às sobremesas tradicionais de família.",
  },
];

type RecipeCardData = {
  title: string;
  image: string;
  tags: string[];
  flavor: string;
};

const recipeShowcase: RecipeCardData[] = [
  {
    title: "Brownie",
    image: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/bownie.jpg",
    tags: ["Sem Açúcar", "Sem Lactose", "Sem Glúten"],
    flavor: "Textura úmida com o sabor do original",
  },
  {
    title: "Manjar",
    image: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/manjar-branco.jpg",
    tags: ["Sem Açúcar", "Sem Lactose", "Sem Glúten"],
    flavor: "Calda suave e especiarias na medida certa",
  },
  {
    title: "Doce de Leite",
    image: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/doce-de-leite.jpg",
    tags: ["Sem Açúcar", "Sem Lactose"],
    flavor: "Cremoso e com caramelização lenta",
  },
  {
    title: "Pavê",
    image: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pave.jpg",
    tags: ["Sem Açúcar", "Sem Glúten"],
    flavor: "Camadas firmes e equilibradas",
  },
  {
    title: "Pudim",
    image: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pudim.jpg",
    tags: ["Sem Açúcar", "Sem Lactose"],
    flavor: "Calda brilhante e estrutura perfeita",
  },
  {
    title: "Rocambole",
    image: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/rocambole.jpg",
    tags: ["Sem Açúcar", "Sem Glúten"],
    flavor: "Recheio cremoso e massa fofinha",
  },
];

const socialProofImages = [
  {
    src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250311_192557.jpg",
    alt: "Depoimento real sobre as receitas zero no WhatsApp.",
  },
  {
    src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/depo-wpp.jpg",
    alt: "Cliente compartilhando resultados com o Sobremesas Zero.",
  },
  {
    src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250325_145243.jpg",
    alt: "Avaliação positiva enviada para a Amanda Ballis.",
  },
];

type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselGroup = {
  title: string;
  description: string;
  direction: "forward" | "backward";
  images: CarouselImage[];
};

const carouselImageGroups: CarouselGroup[] = [
  {
    title: "Clássicos em versão Zero",
    description: "Pavê, torta de chocolate, rocambole e muito mais com o sabor de sempre.",
    direction: "forward",
    images: [
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pave.jpg", alt: "Pavê zero açúcar" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/mousse-maracuja.jpg", alt: "Mousse de maracujá zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/doce-de-leite.jpg", alt: "Doce de leite zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/beijinho.jpg", alt: "Beijinho funcional" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/torta-morango.jpg", alt: "Torta de morango zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/torta-chocolate.jpg", alt: "Torta de chocolate zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/rocambole.jpg", alt: "Rocambole zero" },
    ],
  },
  {
    title: "Doces brasileiros favoritos",
    description: "Cocada, quindim, geleia e forrobodó com ingredientes acessíveis.",
    direction: "backward",
    images: [
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pudim.jpg", alt: "Pudim zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/manjar-branco.jpg", alt: "Manjar zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/bownie.jpg", alt: "Brownie zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/forrobodo.jpg", alt: "Forrobodó zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/geleia.jpg", alt: "Geleia sem açúcar" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/cocada.jpg", alt: "Cocada cremosa zero" },
      { src: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/quindim.jpg", alt: "Quindim zero" },
    ],
  },
];

const ctaBenefits: { title: string; description: string }[] = [
  {
    title: "+300 receitas atualizadas",
    description: "Doces, bolos, tortas, recheios e bebidas testadas pela nutricionista Amanda Ballis.",
  },
  {
    title: "Ingredientes acessíveis",
    description: "Versões zero com produtos encontrados em mercados tradicionais ou apps de entrega.",
  },
  {
    title: "Rotina sem culpa",
    description: "Sugestões de porções, armazenamento e cardápios completos para cada dia da semana.",
  },
  {
    title: "Bônus nutricionais",
    description: "Tabela de substituições, lista de adoçantes aprovados e suporte por e-mail.",
  },
];

const trustBadges = ["Download imediato", "Pagamento 100% seguro", "Garantia de 7 dias"];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#fcfbf8]">
      <HeroSection />
      <RecipesSection />
      <SocialProofSection />
      <CarouselShowcaseSection />
      <CtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(67,39,23,0.9), rgba(67,39,23,0.65)), url(${HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row">
        <div className="w-full text-white lg:w-1/2">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/20"
          >
            Restrição alimentar?
          </a>
          <h1 className="mt-6 text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl">
            Agora você pode comer sua sobremesa favorita de domingo a domingo, sem culpa!
          </h1>
          <p className="mt-6 text-lg text-white/90">
            + de 300 sobremesas zero açúcar, glúten e lactose, criadas pela nutricionista Amanda Ballis para quem quer cuidar da saúde sem abrir mão do prazer.
          </p>
          <div className="mt-8 space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              <RatingStars />
              <p className="text-sm font-semibold text-white">
                5.0 · 2.137 avaliações reais
              </p>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/20" role="progressbar" aria-valuenow={97} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-full rounded-full bg-[#fb6073]" style={{ width: "97%" }} />
            </div>
            <p className="text-sm text-white/80">97% das alunas recomendam o Sobremesas Zero.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {heroHighlights.map((highlight) => (
              <li key={highlight.title} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-lg font-semibold text-white">{highlight.title}</p>
                <p className="mt-1 text-sm text-white/80">{highlight.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-[#fb6073] px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white shadow-xl shadow-[#fb6073]/40 transition hover:translate-y-0.5"
            >
              Quero aproveitar o desconto
            </a>
            <p className="text-sm font-semibold text-white/70">Oferta digital por R$10</p>
          </div>
          <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white/95 p-4 text-[#432717] shadow-2xl">
            <img
              src={HERO_TESTIMONIAL_IMAGE}
              alt="Amanda Ballis, nutricionista do Sobremesas Zero"
              className="h-20 w-20 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-base font-semibold text-[#432717]">Amanda Ballis</p>
              <p className="text-sm text-[#aa6c39]">Nutricionista responsável pelo Sobremesas Zero</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-[45px] bg-[#fff8f4]/90 p-6 shadow-[0_35px_120px_rgba(67,39,23,0.35)] backdrop-blur">
              <img
                src={HERO_PRIMARY_IMAGE}
                alt="Coleção digital Sobremesas Zero"
                className="h-full w-full rounded-[35px] object-cover"
                loading="lazy"
              />
            </div>
            <img
              src={HERO_SECONDARY_IMAGE}
              alt="Livros digitais das receitas zero"
              className="absolute -left-10 bottom-6 hidden w-40 drop-shadow-2xl sm:block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RecipesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#aa6c39]">O que você vai poder comer</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#432717]">Ingredientes acessíveis e + de 300 receitas simples para manter a dieta e o prazer em dia.</h2>
          <p className="mt-4 text-base text-[#7a7a7a]">Cada preparo traz versões zero açúcar, glúten e lactose com passo a passo detalhado, tempo de preparo e lista de substituições.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipeShowcase.map((recipe) => (
            <RecipeCard key={recipe.title} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="bg-[#fff4ee] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#aa6c39]">Avaliações reais</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#432717]">Quem já baixou as receitas não abre mão das versões zero.</h2>
          <p className="mt-4 text-base text-[#7a7a7a]">São 2.137 avaliações com nota máxima e 97% de recomendação espontânea.</p>
          <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-[#fb6073]" style={{ width: "97%" }} />
          </div>
          <p className="mt-2 text-sm text-[#aa6c39]">97% das alunas recomendam</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {socialProofImages.map((proof) => (
            <figure key={proof.src} className="overflow-hidden rounded-3xl border border-[#f4d6c5] bg-white/80 p-3 shadow-xl">
              <img src={proof.src} alt={proof.alt} className="h-96 w-full rounded-2xl object-cover" loading="lazy" />
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-[#aa6c39]">Provas sociais reais</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselShowcaseSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#aa6c39]">Sim! São mais de 300 receitas</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#432717]">Zero açúcar, glúten e lactose com o sabor das versões tradicionais.</h2>
          <p className="mt-4 text-base text-[#7a7a7a]">Explore uma biblioteca completa de sobremesas para todas as ocasiões, com divisão por ingredientes, tempo e objetivo nutricional.</p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {carouselImageGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#432717]">{group.title}</h3>
              <p className="text-base text-[#7a7a7a]">{group.description}</p>
              <ImageCarousel images={group.images} direction={group.direction} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="bg-[#432717] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[40px] bg-gradient-to-b from-[#5a3320] to-[#2e160c] p-10 shadow-[0_40px_120px_rgba(8,0,0,0.6)]">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#f2cbb3]">Oferta por tempo limitado</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">Baixe agora o Sobremesas Zero por apenas R$10.</h2>
          <p className="mt-4 text-base text-[#f7d8c3]">De R$127 por R$10 à vista, com acesso imediato para desktop e celular.</p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-xs uppercase text-[#f5c5a8]">De</p>
              <p className="text-3xl font-semibold text-[#f5c5a8] line-through">R$127</p>
            </div>
            <div>
              <p className="text-xs uppercase text-[#fbe3d4]">Por apenas</p>
              <p className="text-5xl font-bold text-white">R$10</p>
              <p className="text-sm text-[#f7d8c3]">Pagamento único · Acesso vitalício</p>
            </div>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {ctaBenefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#fb6073]">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold">{benefit.title}</p>
                  <p className="text-sm text-[#f7d8c3]">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center">
            <a
              href="https://sobremesas-zero.descontoagora.site/oferta-por-10/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-[#fb6073] px-10 py-4 text-lg font-semibold uppercase tracking-wide text-white shadow-xl shadow-[#fb6073]/40 transition hover:translate-y-0.5"
            >
              Quero garantir meu acesso
            </a>
            <div className="flex flex-wrap items-center gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecipeCard({ recipe }: { recipe: RecipeCardData }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#f5d4c3] bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <img src={recipe.image} alt={`${recipe.title} versão zero`} className="h-56 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#aa6c39]">Receita</p>
          <h3 className="mt-1 text-2xl font-semibold text-[#432717]">{recipe.title}</h3>
        </div>
        <ul className="space-y-1 text-sm text-[#7a7a7a]">
          {recipe.tags.map((tag) => (
            <li key={tag} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fb6073]" />
              {tag}
            </li>
          ))}
        </ul>
        <p className="text-sm font-semibold text-[#aa6c39]">{recipe.flavor}</p>
      </div>
    </article>
  );
}

function RatingStars() {
  return (
    <div className="flex items-center gap-1 text-[#f0ad4e]" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-5 w-5 fill-current"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.89.94 5.51L10 13.9l-4.94 2.81.94-5.51-4-3.89 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className={className}>
      <path d="M5 12.5l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ImageCarousel({ images, interval = 3200, direction }: { images: CarouselImage[]; interval?: number; direction: "forward" | "backward" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((prev) => {
        if (direction === "backward") {
          return prev === 0 ? images.length - 1 : prev - 1;
        }
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, [direction, images.length, interval]);

  useEffect(() => {
    if (current >= images.length) {
      setCurrent(0);
    }
  }, [current, images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <div className="w-full rounded-3xl border border-[#f8dccc] bg-white/80 p-4 shadow-xl">
      <div className="relative h-72 w-full overflow-hidden rounded-2xl">
        {images.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
            style={{ transform: index === current ? "scale(1)" : "scale(0.97)" }}
            loading="lazy"
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <span key={`dot-${index}`} className={`h-2 w-6 rounded-full transition-colors ${index === current ? "bg-[#fb6073]" : "bg-[#fbd7dd]"}`} />
        ))}
      </div>
    </div>
  );
}
