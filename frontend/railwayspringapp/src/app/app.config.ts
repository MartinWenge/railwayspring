import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { counterReducer } from './store/my-counter/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
      {
        count: counterReducer
      }
    ),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25})
  ]
};
