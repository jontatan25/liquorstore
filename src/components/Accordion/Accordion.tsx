import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="w1__container -flex -acenter">
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
                  <span className={selected === i ? "w1__icon-minus" : "w1__icon-plus"}></span>
                </button>
                <div
                  className="w1__accordion-content"
                  aria-expanded={selected === i ? true : false}
                >
                  {" "}
                  <p> {filteredProduct.description}</p>
                </div>
              </>
            ))}
        </div>
          <Link className="accordion__recipes" to="/">Click here for Recipes</Link>
      </div>
      <div className="w1__right">hi</div>
    </div>
  );
};

export default Accordion;
