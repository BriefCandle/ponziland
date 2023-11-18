import React from 'react'
import OwnerHouseData from './OwnerHouseData'
import Hamburger from '/assets/hamburger.svg';

const ownedHouses : string[] = []

for (let i = 0; i < 4; i++) {
  ownedHouses.push('house')
}

export default function Hud() {
  return (
    <>
    <div className='z-30 fixed top-0 left-0 h-10 w-10 m-3'>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>    </div>
      <OwnerHouseData />
    </>
  )
}
 