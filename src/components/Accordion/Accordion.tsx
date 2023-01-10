import React, { FC } from "react";

type Props = {
    products: Product[],
    categories: Category[]
  }
type Product = {
    category: string,
    name: string,
    description: string,
  }
type Category = {
    name: string,
    description: string,
    price: number,
  }

const Accordion: FC<Props> = ({products,categories}) => {
  return (
    <div className="w1__container -flex">
      <div className="w1__left">
        <h3 className="w1__title">{categories[0].name}</h3>
        <p className="w1__description">{categories[0].description}</p>
        <div className="w1__accordion">
          <div className="w1__accordion-title -flex -acenter">
            <h2> {products[0].name}</h2>
            <span>+</span>
          </div>
          <div className="w1__accordion-content">
            {products[0].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
