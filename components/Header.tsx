"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  ChatBubbleLeftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const products = [
    {
      name: "Book a Stay",
      description: "Get a better understanding of your traffic",
      href: "/#",
      icon: HomeIcon,
    },
    {
      name: "Book a Flight",
      description: "Speak directly to your customers",
      href: "/#",
      icon: PaperAirplaneIcon,
    },
    {
      name: "Contact our Support Team",
      description: "your customers data will be safe and secure",
      href: "/#",
      icon: ChatBubbleLeftIcon,
    },
  ];
  const callsToAction = [
    {
      name: "See Demo Booking",
      href: "#",
      icon: PlayCircleIcon,
    },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
  ];

  return (
    <header className="bg-[#003580]">
      <nav className="mx-auto">
        <div className="relative flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              className="h-12 w-auto"
              src="data:image/png;base64,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"
            ></img>
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12 mt-2">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Stays
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                ></ChevronDownIcon>
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                transition
                className="bg-gray-50 rounded-lg flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                {products.map((product) => {
                  return (
                    <div
                      className="group relative flex items-center pl-3"
                      key={product.name}
                    >
                      <product.icon className="w-5 h-5 m-1 text-[#013B94]" />
                      <div className="m-1 ">
                        <a className="text-sm" href={product.href}>
                          {product.name}
                        </a>
                        <p className="text-xs">{product.description}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => {
                    return (
                      <a
                        className="flex items-center justify-center  p-3 text-sm font-semibold leading-6 text-[#013B94]"
                        key={item.name}
                        href={item.href}
                      >
                        <item.icon className="w-5 h-5 m-1 text-[#013B94]" />
                        <div className="m-1 "></div>
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </PopoverPanel>
            </Popover>

            <a className="text-sm font-semibold leading-6 text-white" href="#">
              Flights
            </a>
            <a className="text-sm font-semibold leading-6 text-white" href="#">
              Car Rentals
            </a>
            <a className="text-sm font-semibold leading-6 text-white" href="#">
              Attractions
            </a>
            <a className="text-sm font-semibold leading-6 text-white" href="#">
              Flight + Hotel
            </a>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white mr-3"
              >
                Log in
              </a>
            </div>
          </PopoverGroup>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10"></div>
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#003580] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"> Booking.com</span>
              <img
                className="h-8 w-auto  "
                src="data:image/png;base64,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"
                alt=""
              ></img>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">close Menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"></XMarkIcon>
            </button>
          </div>
          <div className=" flow-root">
            <div className="my-6 divide-y divide-gray-500/10">
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <DisclosureButton className="w-full flex items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white -mx-3 hover:bg-blue-800">
                      Stays
                      <ChevronDownIcon
                        className={cn(
                          "h-5 w-5 flex-none",
                          open && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          className="flex items justify  p-3 text-sm font-semibold leading-6 text-[#0FFFFF]"
                          key={item.name}
                          as="a"
                          href={item.href}
                        >
                          <item.icon className="w-5 h-5 m-1 text-[#FFFFF]" />
                          <div className="m-1 "></div>
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              <a
                href="#"
                className="block rounded-lg py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
              ></a>
              <a
                href="#"
                className="block rounded-lg py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
              >
                Flights
              </a>
              <a
                href="#"
                className="block rounded-lg py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
              >
                Car Rentals
              </a>
              <a
                href="#"
                className="block rounded-lg py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
              >
                Attractions
              </a>
              <a
                href="#"
                className="block rounded-lg py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
              >
                Flight + Hotel
              </a>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="block rounded-lg py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
              >
                Log in
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
