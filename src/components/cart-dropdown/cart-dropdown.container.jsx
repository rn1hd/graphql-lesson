import React from "react";
// import { Query, Mutation } from "react-apollo";
import { flowRight } from "lodash";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import CartDropdown from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = ({ data: { cartItems }, toggleCartHidden }) => (
  // <Mutation mutation={TOGGLE_CART_HIDDEN}>
  //   {(toggleCartHidden) => (
  //     <Query query={GET_CART_ITEMS}>
  //       {({ data: { cartItems } }) => (
  //         <CartDropdown
  //           cartItems={cartItems}
  //           toggleCartHidden={toggleCartHidden}
  //         />
  //       )}
  //     </Query>
  //   )}
  // </Mutation>

  <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
);

export default flowRight(
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" }),
  graphql(GET_CART_ITEMS)
)(CartDropdownContainer);
