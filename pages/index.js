// pages/index.js
import React from 'react';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Event Platform</h1>
        <p className="text-lg mb-4">Discover, register, and follow university events.</p>

        {/* You can add more content or components here */}
      </div>
    </Layout>
  );
};

export default Home;
