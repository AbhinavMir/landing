import React from "react";
import { AiFillGithub } from "react-icons/ai";
function Footer() {
  return (
    <footer class=" p-4 bg-transparent rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 border-t border-grayy">
      <span class="text-sm text-white sm:text-center dark:text-gray-400">
        © 2022 {/* <a href="https://flowbite.com" class="hover:underline"> */}
        EVM Security
        {/* </a> */}. All Rights Reserved.
      </span>
      <ul class=" hidden md:flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://github.com/evm-security" target="_blank" class="mr-6 hover:underline md:mr-24 ">
            <AiFillGithub style={{fontSize:'2rem'}} />
          </a>
        </li>
        {/* <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li> */}
      </ul>
    </footer>
  );
}

export default Footer;
