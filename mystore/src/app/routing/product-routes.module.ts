import { NgModule } from '@angular/core';
import {
  ConfigModule,
  OccConfig,
  PRODUCT_NORMALIZER,
  RouteConfig,
} from '@spartacus/core';
import {
  ProductCategoryNormalizer,
  ProductPrettyNameNormalizer,
} from './product-category.normalizer';

@NgModule({
  imports: [
    ConfigModule.withConfig({
      // configure product routes

      paramsMapping: {
        productCode: 'code',
        
      },
      routing: {
        routes: {
          product: {
            paths: [
              'pro/:manufacturer/:firstCategoryName/:productCode/:prettyName',
              'prod/:manufacturer/:productCode/:prettyName',
              'pro/:productCode/:prettyName',
              'producrt/:prodcutCode'
            ],
          },
        },
      },
    } as RouteConfig),

    // configure OCC product endpoint to get the manufacturer fields in the response
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            productSearch:
              // tslint:disable-next-line: max-line-length
              'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          },
        },
      },
    } as OccConfig),
  ],
  providers: [
    // normalize the product data to get the first product category in the Product model
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductPrettyNameNormalizer,
      multi: true,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductCategoryNormalizer,
      multi: true,
    },
  ],
})
export class CustomProductRoutesModule {}
