import React, { ReactNode } from 'react';
import { MockedApolloProvider } from '../lib/mockedApolloClient';
import './globals.css';

type LayoutProps = {
    children: ReactNode;
};

export const metadata = {
    title: 'Something About Music',
    description: 'Discover the latest music releases, reviews, and more.',
};

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <html lang="en">
            <body>
                <MockedApolloProvider>
                    {children}
                </MockedApolloProvider>
            </body>
        </html>
    );
};

export default RootLayout;
