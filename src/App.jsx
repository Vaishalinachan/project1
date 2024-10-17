import{Route,Routes} from 'react-router-dom';
import Home from "./componet/home";
import Login from "./componet/login";
import Jobs from "./componet/jobs";
import NotFound from './componet/notFound';
import ProtectedRoute from './componet/protetedRoute';
import DetailedSection from './componet/detailedSection';
const App=()=>(
  <>
      <Routes>
          <Route path="/" element={<ProtectedRoute Component={Home}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/jobs" element={<ProtectedRoute Component={Jobs}/>}></Route>
          <Route path="/jobs/:id" element={<ProtectedRoute Component={DetailedSection}/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
  </>
)
export default App;