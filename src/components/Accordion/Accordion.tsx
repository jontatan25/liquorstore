import React, { FC } from "react";
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
  return (
    <div className="w1__container -flex">
      <div className="w1__left">
        <h3 className="w1__title">{categories[0].name}</h3>
        <p className="w1__description">{categories[0].description}</p>
        <div className="w1__accordion-wrapper">
          {products.filter((product)=> product.category == filterCategory).map((filteredProduct) => (
            <>
              <button className="w1__accordion-title -flex -acenter -btn-primary">
                <h2> {filteredProduct.name}</h2>
                <span></span>
              </button>
              <div className="w1__accordion-content">
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
