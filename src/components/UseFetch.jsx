import { useState, useEffect } from "react";

const UseFetch = () => {
    const [searchValue, setSearchValue] = useState([null]);
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)

    const url = 'https://trefle.io/api/v1/plants?token=ybWHDG7BnqrdAI9C3TDEULT_lWbDihFGM-QCPY7QKOU'

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url + searchValue)
          const data = await response.json()
          setSearchResults(data)
        }
        catch (error){
          console.error(error)
        }
      }
      fetchData()
    }, [searchValue]);

    return (
        <div>
          <input value={searchValue} type={'search'} onChange={(e) => setSearchValue(e.target.value)}
          />
          <div>
            Results
          </div>
        </div>
    );
  };
  export default UseFetch;

