# jp-product-card

This a test pack to deploy in NPM

### Jhosua Pachón

## Ejemplo

```
import {ProductCard,ProductImage,ProductTitle,ProductButtons} from "jp-product-card"
```

```
<ProductCard
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
</ProductCard>

```
