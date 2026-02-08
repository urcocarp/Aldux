import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { products } from "../data/products";

// ------------------ Styled Components ------------------

const PageWrapper = styled.main`
  background-color: #fef6e6;
  min-height: 100vh;
  padding: 1.5rem 2rem;
  font-family: "Inter", sans-serif;
`;

const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;

  h1 {
    font-size: 2.6rem;
    margin-bottom: 0.6rem;
    color: #1e1e1e;
  }

  p {
    font-size: 1.05rem;
    color: #555;
    max-width: 720px;
    line-height: 1.6;
  }
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

const Grid = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  list-style: none;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2.2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #f7efe3;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.08),
    0 18px 40px rgba(0, 0, 0, 0.12);

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow:
      0 12px 26px rgba(0, 0, 0, 0.15),
      0 26px 60px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.3rem 1.4rem 1.5rem 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    color: #1e1e1e;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.55;
    margin-bottom: auto;
  }
`;

const CardButton = styled(Link)`
  margin-top: 1rem;
  align-self: flex-start;
  background: #f16436;
  color: #fff;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #d94f28;
    transform: translateY(-1px);
  }
`;

// ------------------ Componente ------------------

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Cortinas, Toldos y Cerramientos | Aldux</title>
        <meta
          name="description"
          content="Descubrí nuestra línea de cortinas roller, blackout, bandas verticales, toldos y cerramientos. Soluciones a medida para hogares y espacios comerciales."
        />
        <link rel="canonical" href="https://www.aldux.com.ar/productos" />
      </Helmet>

      <PageWrapper>
         <Breadcrumb aria-label="Breadcrumb">
          <Link to="/">Inicio</Link> › Productos
        </Breadcrumb>

        <Header>
          <h1>Nuestros Productos</h1>
          <p>
            Soluciones en cortinas, toldos y cerramientos diseñadas para mejorar
            el confort y la estética de tus espacios.
          </p>
        </Header>

       

        <section aria-label="Listado de productos">
          <Grid>
            {products.map((product) => (
              <li key={product.id}>
                <Card>
                  {product.images?.length > 0 && (
                    <CardImage
                      src={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                    />
                  )}

                  <CardBody>
                    <h2>{product.name}</h2>
                    <p>
                      {product.seo?.description?.substring(0, 120)}…
                    </p>

                    <CardButton
                      to={`/productos/${product.slug}`}
                      aria-label={`Ver detalles de ${product.name}`}
                    >
                      Ver producto
                    </CardButton>
                  </CardBody>
                </Card>
              </li>
            ))}
          </Grid>
        </section>
      </PageWrapper>
    </>
  );
}
