import React, {Component} from "react";
import { Text, Right, Body, ListItem, Icon, Thumbnail } from "native-base";
import * as actions from "../actions";
import { connect } from "react-redux";

class RestaurantItem extends Component {
    render() {

        return (
            <ListItem avatar id={this.props.id} onPress={this.props.getDetails}>
                <Body>
                <Text>{this.props.name}</Text>
                <Text note>{(this.props.distance / 1000).toFixed(2)} KM</Text>
                </Body>

                <Right>
                    <Icon name="ios-arrow-forward" />
                </Right>
            </ListItem>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getDetails : () => dispatch(actions.getRestaurantDetail(ownProps.id))
    };
}

export default connect(undefined, mapDispatchToProps)(RestaurantItem);
