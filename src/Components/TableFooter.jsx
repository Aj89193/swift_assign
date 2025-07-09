import React, { useEffect } from "react";


const TableFooter = ({ range, setPage, page, slice,rowsPerPage,setRowsPerPage }) => {

  
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  console.log(range);
  const pageNumbers = [...Array(range + 1).keys()].slice(1);

  const goToPrevPage = () => {
    if (page !== 1) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page !== range) setPage(page + 1);
  };

  const handleItemsPerPageChange=(e)=>{
  
    const newValue = parseInt(e.target.value);
  setRowsPerPage(newValue);

  }

  return (
    <nav className="d-flex justify-content-end mt-3">
      <div className="card border-0 shadow-sm">
        <div className="card-body py-3 px-4">
          <div className="d-flex align-items-end justify-content-center gap-4">

            <div className="d-flex align-items-center">
              <span className="badge bg-dark px-4 py-2 fs-6 rounded-pill">
                Page {page} of {range}
              </span>
            </div>

            <ul className="pagination flex-wrap">
              <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={goToPrevPage}>
                  Previous <i className="bi bi-arrow-left me-2"></i>
                </button>
              </li>


              {pageNumbers.map(pgNumber => (
                page === pgNumber && (
                  <li
                    key={pgNumber}
                    className="page-item active"
                  >
                    <button onClick={() => setPage(pgNumber)} className="page-link">
                      {pgNumber}
                    </button>
                  </li>
                )
              ))}


              <li className={`page-item ${page === range ? 'disabled' : ''}`}>
                <button className="page-link" onClick={goToNextPage}>
                  Next  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </li>
            </ul>

               <div className="d-flex align-items-center mb-3">
            <label htmlFor="itemsPerPage" className="me-2">Show:</label>
            <select
              id="itemsPerPage"
              className="form-select"
              style={{ width: 'auto' }}
              value={rowsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
           
          </div>



          </div>

       

        </div>
      </div>
    </nav >
  );
};

export default TableFooter;


