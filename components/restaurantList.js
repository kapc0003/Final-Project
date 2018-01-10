import React, {Component} from "react";
import { List } from "native-base";
import RestaurantItem from "./restaurantItem";
import { connect } from "react-redux";

class RestaurantList extends Component {
    render() {

        const restaurants = this.props.restaurants.map((item) => {

            return (
                <RestaurantItem {...item} key={item.id}/>
            );
        });

        return (
            <List>
                {restaurants}
            </List>
        );
    }
}

function mapStateToProps(state){
    return {
        restaurants: state.restaurants
    };
}

export default connect(mapStateToProps)(RestaurantList);
