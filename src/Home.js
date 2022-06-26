import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61UtjpK5SjL._SX3000_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id={1}
            title="Eisenhower y el Caribe: Muñoz Marín, Castro y Trujillo (Carpeta dura)"
            price={44.95}
            image="https://cdn.shopify.com/s/files/1/2482/2494/products/MOCKU0P_dfghghgFINAL-1_512x.jpg?v=1651846989"
            rating={5}
          />
          <Product
            id={2}
            title="Conceptos básicos de Bitcoins y Blockchains"
            price={24.99}
            image="https://cdn.shopify.com/s/files/1/2482/2494/products/MOCdfgfhfgKU0P_FINAL-1_512x.jpg?v=1652281321"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="La novia gitana"
            price={19.95}
            image="https://cdn.shopify.com/s/files/1/2482/2494/products/MOCKUfghjghjkhj0P_FINAL-1_512x.jpg?v=1655129199"
            rating={5}
          />
          <Product
            id={4}
            title="La mirada quieta (de Pérez Galdós)"
            price={23.95}
            image="https://cdn.shopify.com/s/files/1/2482/2494/products/123444_714216e7-0458-44cc-9976-51a0f589d100_512x.jpg?v=1655743905"
            rating={5}
          />
          <Product
            id={5}
            title="Dolores Cardona: Detective"
            price={26.99}
            image="https://cdn.shopify.com/s/files/1/2482/2494/products/Dolores-Cardona-Detective-Francisco-R-Velazquez_512x.jpg?v=1634392953"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Asesinato de un culpable"
            price={21.99}
            image="https://cdn.shopify.com/s/files/1/2482/2494/products/1233333_82caf583-0ad0-4306-bd83-b8e04818faee_512x.jpg?v=1655750912"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
