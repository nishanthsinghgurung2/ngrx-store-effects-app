
import { createSelector } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';

import { Pizza } from '../../models/pizza.model';

// pizza state
export const getPizzaState = createSelector(
    fromFeature.getProductState,
    (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzaEntities = createSelector(getPizzaState, fromPizzas.getPizzaEntities);

export const getSelectedPizza = createSelector(
    getPizzaEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza => {
        return router.state && entities[router.state.params.pizzaId];
    }
);

export const getPizzaVisualised = createSelector(
    getSelectedPizza,
    fromToppings.getToppingEntities,
    fromToppings.getSelectedToppings,
    (pizza, toppingEntities, selectedToppings) => {
        const toppings =  selectedToppings.map(id => toppingEntities[id]);
        return {
            ...pizza,
            toppings
        };
    }
);
export const getAllPizzas = createSelector(
    getPizzaEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
)
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);