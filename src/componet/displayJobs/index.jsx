import { FaStar,FaBriefcase } from "react-icons/fa"; 
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './index.css';


const displayJobs=(props)=>
{
    const {jobsItem}=props;

    return(
        <Link to={`/jobs/${jobsItem.id}`}className="detailed-link">
        <li className="jobs-card">
            <div className="top-section"></div>
                <img src={jobsItem.company_logo_url} alt='web logo' className="web-logo"/>
                <div>
                    <h4>{jobsItem.title}</h4>
                    <FaStar className="star-icon"/>
                    <span>{jobsItem.rating}</span>                
                    </div>

                    <div className="location-empType-cont">  
                        <div>
                        <FaLocationDot/>
                        <span className="mr-3">{jobsItem.location}</span>
                        <FaBriefcase/>

                        <span>{jobsItem.employment_type }</span>
                        </div>
                        <h6>{jobsItem.package_per_annum}</h6>
                    </div>
                    <hr className="hr-el"/>
                    <h5> Desription</h5>
                    

                    <p>{jobsItem.job_description}</p>
        </li>
        </Link>
    )
}

export default displayJobs;