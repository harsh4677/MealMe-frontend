import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
  <div >
      <div className="md:px-32 min-w-full bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-20">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
    </div>
  );
};

export default HomePage;


// import SearchBar, { SearchForm } from "@/components/SearchBar";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleSearchSubmit = (searchFormValues: SearchForm) => {
//     navigate({
//       pathname: `/search/${searchFormValues.searchQuery}`,
//     });
//   };

//   return (
//   <div >
//     <div className="relative md:px-32 min-w-full bg-white rounded-lg shadow-md py-8 flex flex-col text-center -mt-8 -mb-10 ring-4 ring-orange-500 ring-opacity-50 transition-all duration-300 hover:ring-opacity-100">
//       <h1 className="text-5xl font-bold tracking-tight text-orange-600">
//         Tuck into a takeaway today
//       </h1>
//       <span className="text-xl">Food is just a click away!</span>
//       <SearchBar
//         placeHolder="Search by City or Town"
//         onSubmit={handleSearchSubmit}
//       />
//     </div>
// =
//     </div>
//   );
// };

// export default HomePage;

