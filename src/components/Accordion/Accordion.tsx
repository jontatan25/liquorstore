import React, { FC, useState } from "react";
import "./accordion.css";

type Props = {
  products: Product[];
  categories: Category[];
  filterCategory: string;
};
type Product = {
  category: string;
  name: string;
  description: string;
};
type Category = {
  name: string;
  description: string;
  price: number;
};

const Accordion: FC<Props> = ({ products, categories, filterCategory }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const handleToogle = (i: number) => {
    if (selected === i) return setSelected(null);
    setSelected(i);
  };
  return (
    <div className="w1__container -flex">
      <div className="w1__left">
        <h3 className="w1__title">{categories[0].name}</h3>
        <p className="w1__description">{categories[0].description}</p>
        <div className="w1__accordion-wrapper">
          {products
            .filter((product) => product.category == filterCategory)
            .map((filteredProduct, i) => (
              <>
                <button
                  className="w1__accordion-title -flex -acenter -btn-primary"
                  onClick={() => handleToogle(i)}
                >
                  <h2> {filteredProduct.name}</h2>
                  <span></span>
                </button>
                <div
                  className="w1__accordion-content"
                  aria-expanded={selected === i ? true : false}
                >
                  {filteredProduct.description}
                </div>
              </>
            ))}
        </div>
      </div>
      <div className="w1__right">hi</div>
    </div>
  );
};

export default Accordion;
