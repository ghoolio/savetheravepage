import { gql } from '@apollo/client';

export const ADD_CATEGORY = gql`
    mutation MyMutation($title: String!, $description: String!, $profile: ID!) {
        insertCategory(
            title: $title,
            description: $description,
            profile: $profile
        ) {
            id
            title
            description
            created_at
        }
    }
`;
