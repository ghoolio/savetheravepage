"use client";
import { gql, useMutation } from '@apollo/client'
import { useSession } from '@supabase/auth-helpers-react';
import React, { useState } from 'react'
//import { ADD_CATEGORY } from '@/graphql/mutations';

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

const PostBox = () =>  {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const session = useSession();
  const [addCategory, { data, loading, error }] = useMutation(ADD_CATEGORY);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const {data} = await addCategory({
        variables: {
          title,
          description,
          profile: session?.user?.id,
        },
      });
    } catch (e) {
      console.error('Mutation error:', e);
    }
  } 
 
  return (

    <div>
      contentGhool 0.0.1

      <form 
        onSubmit={(e) => submitHandler(e)}
        className='sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2'>
        <input
          className='flex-1 w-full outline-none text-black p-1 pl-5'
          type="text"
          value={title}
          placeholder='Enter event title...'
          onChange={(e) => setTitle(e.target.value)}
        />
        
        {title && (
          <textarea
            className='w-full outline-none text-black p-1 pl-5'
            type="text"
            value={description}
            placeholder='Enter event description...'
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
        {title && description && (
          <button className="px-3 py-2 rounded-xl bg-blue-500 text-white text-sm">
            Senden
          </button>
        )}
      </form>  
    </div>
  )
}

export default PostBox