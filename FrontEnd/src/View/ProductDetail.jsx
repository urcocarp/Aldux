import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products } from "../data/products";
import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --------------------- Styled Components ---------------------

const PageWrapper = styled.main`
  background-color: #fef6e6;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
`;

const Breadcrumb = styled.nav`
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 0.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Header = styled.div`
  margin-bottom: 0.75rem;
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700;
  color: #1e1e1e;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background-color: #f16436;
  color: #fff;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  margin-top: 0.25rem;
  
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;
  overflow: hidden;
 

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: ${({ hasThumbs }) => (hasThumbs ? "500px" : "600px")};
  object-fit: cover;
  border-radius: 0.75rem;

  @media (max-width: 900px) {
    height: ${({ hasThumbs }) => (hasThumbs ? "260px" : "340px")};
  }
`;

const Thumbs = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.75rem;
`;

const Thumb = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ active }) =>
    active ? "2px solid #f16436" : "2px solid transparent"};
  opacity: ${({ active }) => (active ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }

  @media (max-width: 900px) {
    width: 56px;
    height: 56px;
  }
`;


const DescriptionWrapper = styled.section`
  width: 60%;
  overflow-y: auto;
  padding: 0 1rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  

  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`;

const Section = styled.section`
  margin-bottom: 1.25rem;

  h2 {
    font-size: 1.3rem;
    margin: 0 0 0.4rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
    margin: 0 0 0.5rem 0;
  }

  ul {
    padding-left: 1.1rem;

    li {
      margin-bottom: 0.35rem;
      font-size: 0.95rem;
      color: #444;
    }
  }
`;

const FaqCard = styled.section`
  background: #f7efe3;
  border-radius: 18px;
  padding: 1.25rem 1.5rem;
  margin-top: 0.1rem;
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.08),
    0 18px 40px rgba(0, 0, 0, 0.12);

  @media (max-width: 900px) {
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.06),
      0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #eee;
`;

const FaqQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 0.85rem 0;
  text-align: left;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FaqAnswer = styled(motion.div)`
  overflow: hidden;

  p {
    font-size: 0.9rem;
    color: #555;
    padding-bottom: 0.75rem;
    line-height: 1.5;
  }
`;

const CtaWrapper = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`;

const CotizaButtonWrapper = styled(motion.button)`
  height: 48px;
  min-width: 140px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #f16436;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.2),
    0 4px 10px rgba(0,0,0,0.15);

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;

// --------------------- Componente ---------------------

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <h1>Producto no encontrado</h1>;

  const images = product.images || [];
  const hasThumbs = images.length > 1;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: images,
    description: product.seo.description,
    brand: { "@type": "Brand", name: "Aldux" },
    url: product.seo.canonical,
  };

  const faqSchema = product.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: product.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  const handleCtaClick = () => {
    const phoneNumber = "5493518509477";
    const message = `Hola! Estoy viendo el producto "${product.name}" en la web de Aldux y quiero más información. Gracias`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>{product.seo.title}</title>
        <meta name="description" content={product.seo.description} />
        <link rel="canonical" href={product.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <Breadcrumb>
        <Link to="/">Inicio</Link> › <Link to="/productos">Productos</Link> › {product.name}
      </Breadcrumb>

      <Header>
        <Title>{product.name}</Title>
        <CategoryBadge>{product.category}</CategoryBadge>
      </Header>

      <ContentWrapper>
        <ImageColumn>
          <MainImage
            src={images[activeImage]}
            alt={product.name}
            hasThumbs={hasThumbs}
          />
          {hasThumbs && (
            <Thumbs>
              {images.map((img, idx) => (
                <Thumb
                  key={idx}
                  src={img}
                  active={idx === activeImage}
                  onClick={() => setActiveImage(idx)}
                />
              ))}
            </Thumbs>
          )}
        </ImageColumn>

        <DescriptionWrapper>
          <Section>
            <p>{product.content.intro}</p>
          </Section>

          {product.content.sections.map((section, i) => (
            <Section key={i}>
              <h2>{section.h2}</h2>

              {section.p && <p>{section.p}</p>}

              {section.list && (
                <ul>
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </Section>
          ))}

          {product.faq?.length > 0 && (
            <FaqCard>
              <h2>Preguntas Frecuentes</h2>

              {product.faq.map((item, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <FaqItem key={idx}>
                    <FaqQuestion onClick={() => setOpenFaq(isOpen ? null : idx)}>
                      {item.q}
                      <span>{isOpen ? "−" : "+"}</span>
                    </FaqQuestion>

                    <AnimatePresence>
                      {isOpen && (
                        <FaqAnswer
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p>{item.a}</p>
                        </FaqAnswer>
                      )}
                    </AnimatePresence>
                  </FaqItem>
                );
              })}
            </FaqCard>
          )}

          <CtaWrapper>
            <CotizaButtonWrapper onClick={handleCtaClick}>
              Cotizá este producto por WhatsApp
            </CotizaButtonWrapper>
          </CtaWrapper>
        </DescriptionWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}
