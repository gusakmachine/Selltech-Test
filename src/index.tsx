import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://152.228.215.94:83/api',
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);