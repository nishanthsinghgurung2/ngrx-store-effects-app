import { Action } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Sucess';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor( public payload: Pizza[] ) {}
}

// create pizza
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

export class CreatePizza implements Action {
    readonly type = CREATE_PIZZA;
    constructor( public payload: Pizza ) {}
}

export class CreatePizzaFail implements Action {
    readonly type = CREATE_PIZZA_FAIL;
    constructor( public payload: any ) {}
}

export class CreatePizzaSuccess implements Action {
    readonly type = CREATE_PIZZA_SUCCESS;
    constructor( public payload: Pizza) {}
}

// update pizza

export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';

export class UpdatePizza implements Action {
    readonly type = UPDATE_PIZZA;
    constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
    readonly type = UPDATE_PIZZA_FAIL;
    constructor(public payload: any) {}
}

export class UpdatePizzaSuccess implements Action {
    readonly type = UPDATE_PIZZA_SUCCESS;
    constructor(public payload: Pizza) {}
}

// remove pizza
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove Pizza Success';
export const REMOVE_PIZZA_FAILURE = '[Products] Remove Pizza Failure';

export class RemovePizza implements Action {
    readonly type = REMOVE_PIZZA;
    constructor(public payload: Pizza) {}
}

export class RemovePizzaSuccess implements Action {
    readonly type = REMOVE_PIZZA_SUCCESS;
    constructor(public payload: Pizza) {}
}

export class RemovePizzaFailure implements Action {
    readonly type = REMOVE_PIZZA_FAILURE;
    constructor(public payload: any) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess
    | CreatePizza | CreatePizzaSuccess | CreatePizzaFail
    | UpdatePizza | UpdatePizzaFail | UpdatePizzaSuccess
    | RemovePizza | RemovePizzaSuccess | RemovePizzaFailure;