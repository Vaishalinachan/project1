import './index.css'

const NotFound=()=>{

    return(
        <div>
            <img src="data:image/jpeg;base64,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" alt="not found"/>
            <br></br>
            <h1> the path is wrong</h1>
        </div>
    )
}
export default NotFound;