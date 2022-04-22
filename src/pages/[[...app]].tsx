// This file is required for using Next.js as SPA
// For more info please refer to https://nextjs.org/docs/migrating/from-create-react-app#single-page-app-spa

import { useState, useEffect } from 'react';
import EntryPoint from '..';

function App() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return <EntryPoint />;
}

export default App;
