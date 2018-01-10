import {LOAD_RESTAURANTS, GET_RESTAURANT_DETAIL, BACK_TO_LIST, LOAD_DATA} from "./actions";
import {RESTAURANT_LIST, RESTAURANT_DETAIL, RESTAURANT_LOAD} from "./pages";

export default function reducers(state, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {

        case LOAD_DATA:

            newState = Object.assign({}, loadData(newState, action.id));

            break;

        case LOAD_RESTAURANTS:

            newState = Object.assign({},loadRestaurants(newState, action.restaurants));

            break;

        case GET_RESTAURANT_DETAIL:

            newState = Object.assign({}, getRestaurantDetail(newState, action.id));

            break;

        case BACK_TO_LIST:

            nnewState = Object.assign({}, backToList(newState));

            break;

        default:
            return state;
    }

    return newState;
}

function loadData(newState){

    newState.page = RESTAURANT_LOAD;

    return newState;
}

function loadRestaurants(newState, restaurants){

    newState.page = RESTAURANT_LIST;

    newState.restaurants = restaurants;
    return newState;
}

function getRestaurantDetail(newState, id){

    newState.page = RESTAURANT_DETAIL;

    restaurant = newState.restaurants.find(item => item.id == id ? true: false);
    newState.selectedItem = restaurant;
    return newState;
}

function backToList(newState){

    newState.page = RESTAURANT_LIST;

    newState.selectedItem = undefined;
    return newState;
}
