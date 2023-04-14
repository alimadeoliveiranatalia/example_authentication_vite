import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './Routes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
