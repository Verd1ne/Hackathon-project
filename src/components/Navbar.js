import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  return (
    <nav className='w-screen flex justify-center'>
      <div className=' bottom-8 w-[296px] fixed bg-[#FFD700] rounded-[30px] h-[38px] drop-shadow-2xl'>
        <div className='grid grid-cols-5'>
        <Link className='mx-auto' to="/">
          <StaticImage
            src="../assets/navbar/navbarGraph.svg"
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="checklist"
            width={31}
            height={28}
          />
        </Link>
        <Link className='mx-auto' to="/">
          <StaticImage
            src="../assets/navbar/navbarWallet.svg"
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="checklist"
            layout="fixed"
            width={29}
            height={28}
          />
        </Link>
        <Link className='mx-auto -translate-y-6 !important' to="/">
          <StaticImage
            src="../assets/navbar/navbarScan.svg"
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="checklist"
            layout="fixed"
            width={59}
            height={49}
          />
        </Link>
        <Link className='mx-auto' to="/">
          <StaticImage
            src="../assets/navbar/navbarChecklist.svg"
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="checklist"
            layout="fixed"
            width={28}
            height={28}
          />
        </Link>
        <Link className='mx-auto' to="/">
          <StaticImage
            src="../assets/navbar/navbarPerson.svg"
            style={{
              position: 'relative',
              marginTop: '8px',
            }}  
            alt="checklist"
            layout="fixed"
            width={28}
            height={28}
          />
        </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;