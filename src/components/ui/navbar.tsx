"use client";
import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { MdArrowBackIosNew } from "react-icons/md";

import { useState } from "react";

function NavbarDemo() {
  const navItems = [
    {
      name: "عن محسوب",
      link: "#",
    },
    {
      name: " ليش محسوب ",
      link: "#",
    },
    {
      name: "الاسئله الشائعه ",
      link: "#",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className=" absolute w-full" dir="ltr">
      <Navbar>
        {/* for desktop */}
        <NavBody className="border border-black rounded-xl">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              className="rounded-lg text-black hover:bg-gray-50 flex gap-1"
              href="/mahsoob"
            >
              جـرّب محـسـوب <MdArrowBackIosNew className="mt-1" />
            </NavbarButton>
          </div>
        </NavBody>

        {/* for mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 "
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="w-full border border-white/10"/>
            <div className="flex w-full flex-col gap-4  ">
                <NavbarButton
                  variant="primary"
                  className="rounded-lg text-black hover:bg-gray-50 flex gap-1 item-center justify-between "
                  href="/mahsoob"
                >
                  جـرّب محـسـوب <MdArrowBackIosNew className="mt-1" />
                </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavbarDemo;
