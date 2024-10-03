import { CanDeactivateFn } from '@angular/router';

export const areyousureGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
