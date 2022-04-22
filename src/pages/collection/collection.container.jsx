import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";

import CollectionPage from "./collection.component";
import Spinner from "../../components/spinner/spinner.component";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = () => {
  const { collectionId } = useParams();
  return (
    <Query query={GET_COLLECTION_BY_TITLE} variables={{ title: collectionId }}>
      {({ loading, data }) => {
        if (loading) return <Spinner />;
        return <CollectionPage collection={data} />;
      }}
    </Query>
  );
};

export default CollectionPageContainer;
