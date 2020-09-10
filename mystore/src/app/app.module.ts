import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, QualtricsConfig } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';
import { ThemeConfig, Theme } from './myfeature/config/theme.config';
import { BootcampConfigModule } from './myfeature/config/config.module';
import { BootcampComponentModule } from './components/component.module';
import { BootcampDataBindingModule } from './data-binding/data-binding.module';
import { BootcampRoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { BootcampOutletModule } from './outlet/outlet.module';
import { BootcampLayoutConfigModule } from './layout/layout.module';
import { NgrxEffectsModule } from './state/ngrx-effects/ngrx-effects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.1'
      },
      qualtrics: {
        scriptSource: ''
      }

    }),
   //BootcampConfigModule,
    // // Provide a custom theme to the `ThemeConfig`.
   // ConfigModule.withConfig({ theme: Theme.CHOCOLATE } as ThemeConfig),
    //BootcampComponentModule

   //BootcampDataBindingModule
   //BootcampRoutingModule,
   //RouterModule
   //BootcampOutletModule,
   //BootcampLayoutConfigModule

   NgrxEffectsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
