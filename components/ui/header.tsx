// import Link from "next/link";
// import MobileMenu from "./mobile-menu";

// export default function Header() {
//   return (
//     <header className="absolute w-full z-30">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Site branding */}
//           <div className="shrink-0 mr-2 mb-2">
//             {/* Logo */}
//             <p>Yahav Mesika </p>
//           </div>

//           <div className="md:flex md:items-center md:justify-between">
//             {/* Social links */}
//             <ul className="flex  md:order-1 md:ml-4 md:mb-0">
//               <p className="mr-2"> 054-2522677</p>
//               <p>Social:</p>
//               <li className="ml-2">
//                 <Link
//                   href="https://www.linkedin.com/in/yahav-mesika/"
//                   className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
//                   aria-label="LinkedIn"
//                 >
//                   <svg
//                     className="w-8 h-8 fill-current"
//                     viewBox="0 0 32 32"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
//                   </svg>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-2 mb-2">
            {/* Logo */}
            <p>Yahav Mesika </p>
          </div>

          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex  md:order-1 md:ml-4 md:mb-0">
              <p className="mr-2">054-2522677</p>
              <p>Social:</p>
              <li className="ml-2">
                <Link href="https://www.linkedin.com/in/yahav-mesika/">
                  <a className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="LinkedIn">
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </Link>
              </li>
              <li className="ml-2">
                <a href="mailto:yahavmesika@gmail.com" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Email">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 2.9c3.8 0 6.9 3.1 6.9 6.9 0 1.7-.6 3.4-1.8 4.8v.2l-.2.3c-2.8 3.1-3.8 4.3-4 4.6-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.2-.2-1.2-1.5-4-4.6l-.2-.3v-.2c-1.2-1.4-1.8-3.1-1.8-4.8 0-3.8 3.1-6.9 6.9-6.9zm0 3.6l7.5 5.1c.1.1.1.3.1.4s-.1.3-.1.4l-7.5 5.1c-.1.1-.2.1-.3.1-.1 0-.3-.1-.4-.1l-7.5-5.1c-.1-.1-.1-.3-.1-.4s.1-.3.1-.4L15.7 6.6c.1-.1.2-.1.3-.1s.3.1.4.1z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}


