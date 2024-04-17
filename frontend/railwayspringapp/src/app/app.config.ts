import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { counterReducer } from './counter.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CounterBackendEffects } from './counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
      {
        count: counterReducer
      }
    ),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25}),
    importProvidersFrom(HttpClientModule),
    provideEffects([CounterBackendEffects])
  ]
};
