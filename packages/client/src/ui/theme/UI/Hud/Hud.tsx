import React, { useState } from 'react';
import OwnerHouseData from './OwnerHouseData';

const Hud = () => {
  // State to control sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className='z-30 fixed top-0 left-0 h-10 w-10 m-3' onClick={toggleSidebar}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>      </div>

      
      <div style={{ 
          position: 'fixed',
          top: 0,
          left: showSidebar ? '0px' : '-100%', 
          height: '600px',
          width: '300px',
          opacity: '80%',
          backgroundColor: '#052c76'
        }}>
        <OwnerHouseData />
      </div>
    </>
  );
};

export default Hud;
