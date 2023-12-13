import { ApplicationConfig } from '@angular/core';
import {
  TitleStrategy,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategy } from './extensions/title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,

      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
};
