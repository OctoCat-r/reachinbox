import { Search } from "lucide-react";
import { SearchCheckIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className={`border border-gray-400 rounded  flex items-center gap-1`}>
      <Search color="gray" className="w-16 h-8 ml-1" />
      <input type="text" placeholder="Search" className={`outline-none dark:bg-slate-900`} />
    </div>
  );
};

export default SearchBar;
