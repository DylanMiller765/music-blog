import React from 'react';
import Link from 'next/link';

type Post = {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
};

const BlogPostCard = ({ post }: { post: Post }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <Link href={`/posts/${post.slug}`}>
                    <a className="mt-4 text-blue-500 hover:underline">Read More</a>
                </Link>
            </div>
        </div>
    );
};

export default BlogPostCard;
