import { Link } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import SearchBar from './SearchBar'

const navigation = [
  { name: 'Sports', href: "/category/sports" , colour: 'bg-blue-200' },
  { name: 'Business', href: "/category/business" , colour: 'bg-red-200' },
  { name: 'Entertainment', href: "/category/entertainment" , colour: 'bg-pink-200' },
  { name: 'Health', href: "/category/health" , colour: 'bg-green-200' },
  { name: 'Science', href: "/category/science" , colour: 'bg-purple-200' },
  { name: 'Technology', href: "/category/technology" , colour: 'bg-yellow-200' },
]

export default function Example() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 py-8 sm:shadow-md">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    to="/" 
                    className='block lg:hidden w-full'
                  >
                    <h1 className='text-3xl font-bold'>News App</h1>
                  </Link>
                  <Link
                    to="/" 
                    className='hidden lg:block w-full '
                  >
                    <h1 className='text-3xl font-bold'>News App</h1>
                  </Link>
                </div>
                <div className="items-center hidden px-3 md:flex">
                  <SearchBar />
                </div>
                <div className="hidden sm:flex sm:ml-6 items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`sm:px-3 lg:px-5 hover:${item.colour} font-semibold rounded-xl`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden shadow-md">
            <div className="items-center py-3">
              <SearchBar />
            </div>
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-5 hover:${item.colour} font-semibold rounded-xl`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
