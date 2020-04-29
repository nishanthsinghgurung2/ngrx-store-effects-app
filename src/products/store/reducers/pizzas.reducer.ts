import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';
import { Action } from 'rxjs/scheduler/Action';
import { Identifiers } from '@angular/compiler';


export interface PizzaState {
    entities: { [id: number] : Pizza };
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromPizzas.PizzasAction
): PizzaState {
        switch(action.type) {
            case fromPizzas.LOAD_PIZZAS: {
                return {
                    ...state,
                    loading: true
                }
            }

            case fromPizzas.LOAD_PIZZAS_SUCCESS: {
                const pizzas: Pizza[] = action.payload;

                const entities: any = pizzas.reduce((entities: { [id: number]: Pizza}, pizza: Pizza) => {
                    return {
                        ...entities,
                        [pizza.id]: pizza
                    }
                }, {
                    ...state.entities
                })
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    entities
                }
            }

            case fromPizzas.LOAD_PIZZAS_FAIL: {
                return {
                    ...state,
                    loaded: false,
                    loading: false
                }
            }

            case fromPizzas.UPDATE_PIZZA_SUCCESS: 
            case fromPizzas.CREATE_PIZZA_SUCCESS: {
                const pizza = action.payload;
                const entities = {
                    ...state.entities,
                    [pizza.id]: pizza
                };

                return {
                    ...state,
                    entities
                };
            }

            case fromPizzas.REMOVE_PIZZA_SUCCESS: {
                const pizza = action.payload;
                const { [pizza.id]: removed, ...entities } = state.entities;

                return {
                    ...state,
                    entities
                };
            }
        }
    return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzaEntities = (state: PizzaState) => state.entities;