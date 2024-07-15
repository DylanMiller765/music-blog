import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Hero from '../components/Hero';
import BlogPostCard from '../components/BlogPostCard';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      excerpt
      image
      slug
    }
  }
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Hero />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {data.posts.map((post: any) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Home;
