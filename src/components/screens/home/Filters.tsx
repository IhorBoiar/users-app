import React, {useState} from "react";
import {IFilters} from "../../../interfaces/common.interface";

const Filters = ({ data, setData }: IFilters) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<string>('asc');

  const handleSearch = () => {
    const filtered = data.response.filter(user =>
      user.username.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData({...data, filtered});
  };
  const handleReset = () => {
    setSearchValue('');
    setData({...data, filtered: data.response})
    setSortOrder('asc')
  };
  const onChangeSearch = (event) => {
    const value = event.target.value
    setSearchValue(value);
    if (value === '') {
      setData({...data, filtered: data.response})
      setSortOrder('asc')
    }
  };
  const handleSortByUsername = () => {
    const sortedUsers = [...data.filtered].sort((a, b) => {
      const usernameA = a.username.toLowerCase();
      const usernameB = b.username.toLowerCase();
      if (sortOrder === 'asc') {
        return usernameA.localeCompare(usernameB);
      } else {
        return usernameB.localeCompare(usernameA);
      }
    });
    setData({...data, filtered: sortedUsers});
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  return (
    <div className="filters">
      <div className="search">
        <input
          type="text"
          placeholder="Search by username"
          value={searchValue}
          onChange={onChangeSearch}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="sort">
        <button onClick={handleSortByUsername}>
          {sortOrder === 'asc' ? 'Sort By Username Desc' : 'Sort By Username Asc'}
        </button>
      </div>
      <div className="reset">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Filters
