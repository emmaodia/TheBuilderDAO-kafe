import React from 'react';
import Navigation from './Navigation';
// import DAOSVG from '@app/components/SVG/DAOSVG';

const LeftSidebar = () => {
  return (
    <div className="sticky top-0 w-full">
      <Navigation />
      <a className="fixed bottom-10 left-8" href="#">
        {/* <DAOSVG /> */}
      </a>
    </div>
  );
};

export default LeftSidebar;
