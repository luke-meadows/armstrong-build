import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import 'react-slideshow-image/dist/styles.css';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import TopHeader from '../components/TopHeader';

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Page>
      <AnimatePresence initial={false}>
        {showSidebar && (
          <SideBar key="sidebar" setShowSidebar={setShowSidebar} />
        )}
      </AnimatePresence>
      <div className="main-content">
        <TopHeader />
        <Header setShowSidebar={setShowSidebar} />
        <Component {...pageProps} />
      </div>
    </Page>
  );
}

export default MyApp;

const Page = styled.div`
  position: relative;
`;
