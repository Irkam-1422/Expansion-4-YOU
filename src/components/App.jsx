import '../App.css';
import { AuthContext } from '../context/AuthContex';
import { useAuth } from '../hooks/auth.hook';
import { useRoutes } from '../rotes';

function App() {
  const {token,login,logout,userId} = useAuth() 
  const isAuthentificated = !!token
  const routes = useRoutes(isAuthentificated)
  return (
    <AuthContext.Provider value={{token,login,logout,userId,isAuthentificated}}> 
      <div className="App" style={{overflowX: 'hidden'}}>
        {routes}
      </div> 
    </AuthContext.Provider>
  );
}

export default App;
