import React, { useEffect, useState } from 'react';
import {
  Browse,
  Header,
  Hero,
  Arrived,
  Clients,
  AsideMenu,
  Footer,
} from './components';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc',
        {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'x-api-key': 'e12dae64-e563-4def-b98d-3779f81e31ee',
          },
        }
      );
      const { nodes } = await response.json();
      setItems(nodes);
    })();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
