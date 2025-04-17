import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  return (
    <div>
      <form>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="block w-[150%] rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 ps-10 text-sm text-gray-900 transition-all duration-300 ease-in-out hover:w-[170%] focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search in Customers..."
            required
          />
        </div>
      </form>
    </div>
  );
}
