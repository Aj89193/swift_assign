import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from './Table';
import Navbar from './Navbar'
import TableHeader from './TableHeader';

const Comments = () => {

    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState(null);

    const [filterData, setFilterData] = useState([]);

    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    

    const handleFilterData = (filtered) => {
        if (!filtered || filtered.length === 0) {
            setFilterData(comments);
        } else {
            setFilterData(filtered || []);
        }
    }

      const handleRowsPerPage = (newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage);
      }



    const getComments = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setComments(response.data);
            setFilterData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    if (loading) return <div>Loading...</div>;

    if (!comments) return <div>No Comments found</div>;

    return (
        <div>
            <Navbar />
            <div className='mx-5'>
                <TableHeader initialData={comments} onFilter={handleFilterData} />

                <Table data={filterData} setRowsPerPage={setRowsPerPage} rowsPerPage={rowsPerPage}/>

            </div>

        </div>
    )
}

export default Comments