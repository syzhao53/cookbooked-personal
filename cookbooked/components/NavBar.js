import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { useState } from 'react'

const NavBar = () => {
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => {
    setMenuToggled(!menuToggled);
  };

  const sidebar = (
    <div className="sidebar" style={{ display: menuToggled ? 'flex' : 'none' }}>
      <svg id="sidebar-close-icon" onClick={async () => {toggleMenu();}} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292892C1.31658 -0.0976315 0.683416 -0.0976314 0.292891 0.292893C-0.0976328 0.683416 -0.0976328 1.31658 0.292892 1.70711L9.58579 11L0.292893 20.2929C-0.0976311 20.6834 -0.0976311 21.3166 0.292893 21.7071C0.683418 22.0976 1.31658 22.0976 1.70711 21.7071L11 12.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L12.4142 11L21.7071 1.70711C22.0976 1.31658 22.0976 0.683416 21.7071 0.292893C21.3166 -0.0976313 20.6834 -0.0976312 20.2929 0.292893L11 9.58578L1.70711 0.292892Z" fill="#787878"/>
      </svg>
      <button
        type="button"
        onClick={''}
      >
        WORK
      </button>
      <button
          type="button"
          onClick={''}

        >
          RESUME
        </button>
        <button
          type="button"
          onClick={''}

        >
          ABOUT
        </button>
    </div>
  );

  return (
    <>
      <Head>
        <title>CookBooked</title>
        <meta
          name="description"
          content="An interactive website to follow recipes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <nav
        className="flex h-16 bg-bg_white px-9 z-50"
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
          position: 'sticky',
          top: '0',
        }}
      >
        <Link href="/" className="my-auto">
          <div className="flex">
            <Image
              src="/logo.svg"
              width={36}
              height={36}
              alt="CookBooked chefs hat logo"
            />
            <span className="font-medium align-middle mx-3 pt-1">CookBooked</span>
          </div>
        </Link>
        <img id="hamburger" src="/hamburger.svg"    className={`${
        menuToggled ? 'hidden' : 'inline md:hidden'
      } md:hidden ml-auto w-6 pt-1`} alt="hamburger menu" onClick={async () => toggleMenu()} />
      </nav>
    </>
  )
}

export default NavBar
