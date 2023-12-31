"use client"
import React from "react";
import Image from "next/image";
import logo from "@assets/KeNIC Logo.png";

import sponsorpdf from '@assets/KDNS_Sponsorship_Package_V1.pdf';


import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#speakers" className="flex items-center">
          Our Speakers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Image src={logo} alt="DNS Logo" width={70} height={0.5} />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <a href="#contact" className="flex items-center">
                <span>Register</span>
              </a>
            </Button>
            {/* New Become a Sponsor Button */}
            <Button variant="gradient" size="sm" className="hidden lg:inline-block">
              <a
              href={sponsorpdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              >
                <span>Become a Sponsor</span>
              </a>
            </Button>

            {/* PDF Viewer */}
            <div className="hidden lg:inline-block">
              <Document file={sponsorpdf}>
                <Page pageNumber={1} />
              </Document>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {/* ... Menu icon ... */}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <a href="#contact"></a>
            <span>Register</span>
          </Button>
          {/* New Become a Sponsor Button */}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <a href="#Become a Sponsor"></a>
            <span>Become a Sponsor</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
