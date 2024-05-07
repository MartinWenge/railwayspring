import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { counterReducer } from './store/my-counter/counter.reducer';
import { CounterBackendEffects } from './store/my-counter/counter.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { workitemStateReducers } from './store/workitems/workitems.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
      {
        count: counterReducer,
        workitemState: workitemStateReducers
      }
    ),
    provideStoreDevtools({ maxAge: 25}),
    importProvidersFrom(HttpClientModule),
    provideEffects([CounterBackendEffects]),
    provideAnimationsAsync()
  ]
};
