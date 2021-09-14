import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { meQuery } from "../__generated__/meQuery";

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      name
      address
      phoneNumber
      email
      role
    }
  }
`;

export const useMe = () => {
  return useQuery<meQuery>(ME_QUERY);
};
