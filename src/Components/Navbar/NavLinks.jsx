
// import { FaSignInAlt } from "react-icons/fa";
// import { MdLogout } from "react-icons/md";
// import { NavLink, useLocation } from 'react-router-dom';
// import ImgTooltip from "../ImgTootip/ImgTooltip";
// import UseAuth from "../../Providers/UseAuth";
// import Switcher from "../DarkMode/SwitchDarkMode";
// const NavLinks = ({ open }) => {
//   const { user, logOut } = UseAuth()
//   const Links = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about" },
//     { name: "blogs", link: "/blogs" },
//   ];
//   const location = useLocation();
//   return (
//     <>
//       <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white dark:text-white text-slate-500 dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728] absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 border-2' : 'top-[-490px]'}`}>
//         {Links.map((link) => (
//           <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
//             <NavLink to={link.link} className={({ isActive }) => isActive ? 'active active-style' : 'default'}>{link.name}</NavLink>
//           </li>
//         ))}
//         {user?.email && (
//           <>
//             {currentUser?.role==='user' && <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <NavLink
//                 to={`/dashboard/select-classes`} className={({ isActive }) => isActive ? 'active active-style' : 'default'}>
//                 Dashboard
//               </NavLink>
//             </li>}
//             {currentUser?.role==='instructor' && <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <NavLink
//                 to={`/dashboard/add-class`} className={({ isActive }) => isActive ? 'active active-style' : 'default'}>
//                 Dashboard
//               </NavLink>
//             </li>}

//             {currentUser?.role==='admin' && <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <NavLink
//                 to={`/dashboard/manage-classes`} className={({ isActive }) => isActive ? 'active active-style' : 'default'}>
//                 Dashboard
//               </NavLink>
//             </li>}

//             <div className='flex gap-2 items-center md:ml-4 ml-0'>
//               <button onClick={logOut} className="login-btn" >Log Out <MdLogout className='w-5 h-5 ml-2 -mr-1' /></button>
//               <ImgTooltip />
//             </div>
//           </>
//         )}
//         {!user && (
//           <>
//             <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <NavLink
//                 to="/login"
//                 className={`text-gray-800 duration-500 ${location.pathname === '/login' ? 'login-active' : 'login-btn'}`}
//               >
//                 Login <FaSignInAlt className='pl-2 text-2xl' />
//               </NavLink>
//             </li>
//           </>

//         )}
//         <Switcher />
//       </ul>
//     </>
//   )
// }

// export default NavLinks