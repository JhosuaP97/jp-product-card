import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Show component correctly with personalize image', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);

    expect(wrapper.toJSON).toMatchSnapshot();
  });

  test("It must to show the component with the product's image", () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
