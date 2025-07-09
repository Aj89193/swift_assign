import React, { useEffect, useMemo, useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';

const TableHeader = ({initialData,onFilter}) => {

const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

   const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    
    return data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);


  const sortedData = useMemo(() => {
   
    if (!sortConfig.key) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    
    
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  
  
  return sorted;
  }, [filteredData, sortConfig]);


  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronUp className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? 
      <ChevronUp className="w-4 h-4 text-blue-600" /> : 
      <ChevronDown className="w-4 h-4 text-blue-600" />;
  };



 useEffect(() => {
  if (onFilter) {
    onFilter(sortedData);
  }
}, [sortedData, onFilter]);


  return (


    <div>
        <div className="d-flex justify-content-between p-1">
            <div>
            <button
              onClick={() => handleSort('id')}
              className={`flex items-center w-3 gap-2 px-4 py-2 m-2 rounded-md border border-0 shadow transition-colors ${
                sortConfig.key === 'id' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Sort Post ID
              {getSortIcon('id')}
            </button>
            <button
              onClick={() => handleSort('name')}
              className={`flex items-center w-3 gap-2 px-4 py-2 m-2 rounded-md border border-0 shadow transition-colors ${
                sortConfig.key === 'name' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Sort Name
              {getSortIcon('name')}
            </button>
            <button
              onClick={() => handleSort('email')}
              className={`flex items-center w-3 gap-2 px-4 py-2 m-2 rounded-md border transition-colors border-0 shadow ${
                sortConfig.key === 'email' 
                  ? 'bg-blue-600 text-white ' 
                  : 'bg-white text-gray-700  hover:bg-gray-50'
              }`}
            >
              Sort Email
              {getSortIcon('email')}
            </button>
            </div>
            <div className='relative'>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search name, email, comment..."
                className="w-5 pl-10 pr-4 py-2 bg-gray-700 text-dark rounded-md  border-0 shadow border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        
    </div>
  )
}

export default TableHeader