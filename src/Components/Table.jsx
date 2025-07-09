import React, { useState } from "react";
import TableFooter from "./TableFooter";
import useTable from "../hooks/useTables.js";


const Table = ({ data,rowsPerPage,setRowsPerPage}) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

 

  


  return (
    <div>
        
           <table className="table table-striped table-hover">
                <thead className="table-info">
                    <tr>
                        <td scope="col" className="text-bold">Post ID</td>
                        <td scope="col" className="text-bold">Name</td>
                        <td scope="col" className="text-bold">Email</td>
                        <td scope="col" className="text-bold">Comment</td>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((comment, index) => (
                        <tr key={index}>
                            <td>{comment.postId}</td>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td className="fw-normal">{comment.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <TableFooter range={range} slice={slice} setPage={setPage} page={page} setRowsPerPage={setRowsPerPage} rowsPerPage={rowsPerPage}/>
    </div>
  )
}

export default Table


