// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "./ui/button";
// import UsernameMenu from "./UsernameMenu";
// import { Link } from "react-router-dom";

// const MainNav = () => {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();

//   return (
//     <span className="flex flex-1 items-center ">
//       {isAuthenticated ? (
//         <span>
//           <Link to="/order-status" className="font-bold hover:text-orange-500">
//             Order Status
//           </Link>
//           <UsernameMenu />
//         </span>
//       ) : (
//         <Button
//           variant="ghost"
//           className="font-bold hover:text-orange-500 hover:bg-white text-lg"
//           onClick={async () => await loginWithRedirect()}
//         >
//           Log In
//         </Button>
//       )}
//     </span>
//   );
// };

// export default MainNav;


import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <nav className="flex flex-1 items-center justify-between px-4 py-2 bg-gray-100 shadow-md">
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <>
            {/* <Link
              to="/order-status"
              className="font-bold text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Order Status
            </Link> */}
            <Link to="/order-status" className="font-bold hover:text-orange-500">
              Order Status
            </Link>
            <UsernameMenu />
          </>
        ) : (
          <Button
            variant="ghost"
            className="font-bold text-lg text-orange-500 hover:text-white hover:bg-orange-500 transition-colors duration-200 px-4 py-2 rounded-md"
            onClick={async () => await loginWithRedirect()}
          >
            Log In
          </Button>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
