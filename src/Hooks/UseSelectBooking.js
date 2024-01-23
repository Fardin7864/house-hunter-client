import { useQuery } from '@tanstack/react-query';
import UseAuth from '../Providers/UseAuth';
import useAxiosSecure from './UseAxiosSecure';
const UseSelectBooking = () => {
  const { user,loading } =UseAuth()
  // const token = localStorage.getItem('jwt-token')
  const [axiosSecure]=useAxiosSecure()
  const {data:renterBooking=[],refetch} = useQuery({
    queryKey: ['renterBooking', user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure(`https://house-hunt-snowy.vercel.app/renterBooking?email=${user?.email}`)
      // console.log("response from axios",response.data);
      return response.data
    },
  })

  return [renterBooking,refetch]
}
export default UseSelectBooking