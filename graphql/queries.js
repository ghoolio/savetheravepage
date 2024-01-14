// corresponding query
import { gql } from '@apollo/client';

export const CATEGORYLIST_BY_TITLE = gql`
    query MyQuery($title: String!) {
        categoryListByTitle(title: $title) {
            id
            description
            profile
            created_at
        }
    }
`;
