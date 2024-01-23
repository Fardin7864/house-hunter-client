import UseAuth from '../Providers/UseAuth'
import { Navigate, useLocation } from 'react-router'
import LoadingSpinner from '../Components/SharedComponents/LoadingSpinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth()
  const location = useLocation()

  if (loading) {
    return (<><LoadingSpinner/></>)
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute