'use client'
import React from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const handleSearch = useDebouncedCallback((term:string) => {
    const params = new URLSearchParams(searchParams)
    if(term){
      params.set('query', term)
    }else{
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <div className="md:w-2/5 md:ml-6">
      <div className="form-control">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered md:w-auto"
          defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
    </div>
  );
}

export default Search;
