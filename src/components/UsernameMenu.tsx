// import { CircleUserRound } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";
// import { Separator } from "./ui/separator";
// import { Button } from "./ui/button";

// const UsernameMenu = () => {
//   const { user, logout } = useAuth0();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
//         <CircleUserRound className="text-orange-500" />
//         {user?.email}
//       </DropdownMenuTrigger>

//       <DropdownMenuContent>
//         <DropdownMenuItem>
//           <Link
//             to="/manage-restaurant"
//             className="font-bold hover:text-orange-500"
//           >
//             Manage Restaurant
//           </Link>
//         </DropdownMenuItem>
//         <Separator />
//         <DropdownMenuItem>
//           <Link to="/user-profile" className="font-bold hover:text-orange-500">
//             User Profile
//           </Link>
//         </DropdownMenuItem>
//         <Separator />
//         <DropdownMenuItem>
//           <Button
//             onClick={() => logout()}
//             className="flex flex-1 font-bold bg-orange-500"
//           >
//             Log Out
//           </Button>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default UsernameMenu;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { CircleUserRound } from "lucide-react";


const UsernameMenu=()=>{
    const { user, logout } = useAuth0();

  return (
    <Dialog >
      <DialogTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email}      
      </DialogTrigger>

      <DialogContent className="sm:max-w-[1025px] h-[500px] ">

          <DialogTitle>
           <span className="text-orange-500 font-bold text-23xl">MealMe!</span>
          </DialogTitle>
            <DialogDescription>
                <Link
                    to="/manage-restaurant"
                    className="font-bold text-lg text-black hover:text-orange-500"
                >
                    Manage Restaurant
                </Link>
            </DialogDescription>
            <Separator />
            <DialogDescription>
                <Link to="/user-profile" className="font-bold text-lg text-black hover:text-orange-500">
                    User Profile
                </Link>
            </DialogDescription>
            <Separator />
            <DialogDescription>
                <Button
                    onClick={() => logout()}
                    className="flex flex-1 font-bold text-xl bg-orange-500"
                    >
                    Log Out
                </Button>
            </DialogDescription>
        </DialogContent>
    </Dialog>
  )
}

export default UsernameMenu;