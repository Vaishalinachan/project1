import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';
import { useEffect } from 'react';

const DetailedSection =()=>
{
    
    const {id}=useParams();
    const token=Cookies.get("jwtToken");

    useEffect(()=>{
        const fetchDetailedData=async()=>{
            const api=`https://apis.ccbp.in/jobs/`
            const response=fetch
        }
        fetchDetailedData();
    },[])
    return(
        <>
            <h1>Detailed section </h1>
        </>
    )
}

export default DetailedSection;