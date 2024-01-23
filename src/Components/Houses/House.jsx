import { useState } from 'react';
import HeartButton from '../Button/HeartButton';
// import { Link } from 'react-router-dom'
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import UseAllUsers from '../../Hooks/UseAllusers';
import UseSelectBooking from '../../Hooks/UseSelectBooking';
import UseAuth from '../../Providers/UseAuth';
const House = ({ item }) => {
  const { user } = UseAuth();
  const { name,email, address, city, bedrooms, bathrooms, roomSize, picture, availabilityDate, rentPerMonth, phoneNumber, description, _id } = item || {}
  const navigate = useNavigate();
  const location = useLocation();
  const [renterBooking, refetch] =UseSelectBooking();
  const [isSelectDisabled, setIsSelectDisabled] = useState(false);
  const [allUsers] = UseAllUsers()
  const currentUser = allUsers?.find(users => users?.email === user?.email)
  // console.log({allUsers,user});
  const myBookHouse = renterBooking?.filter(house => house?.email === user?.email)
  // console.log({myBookHouse});
  const handleBookingHouse = (id) => {
    const houseBookingInfo = {
      bookingHouseId: id,
      address,
      city,
      bedrooms,
      bathrooms,
      roomSize,
      picture,
      email: user?.email,
      houseOwnerName:name,
      houseOwnerEmail: email,
      houseOwnerPhoneNumber: phoneNumber,
      availabilityDate,
      payment: false,
      rentPerMonth,
      description
    };
    // console.log({ id });
    if (myBookHouse.length === 2||myBookHouse.length>2) {
      return toast('Sorry You Are Only Booking 2 Houses')
    }
    if (user?.email) {
      fetch('https://house-hunt-snowy.vercel.app/renterBooking', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(houseBookingInfo)
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            refetch();
            // console.log(data)
            toast('You Are Select Book This House !!!', { autoClose: 2000 })
          }
        })
        .catch(error => console.log(`404 page not found ${error.message}`));
    } else {
      Swal.fire({
        title: 'Please login to select the class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    // <Link to={`room/${1}`}>
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full border-2 p-3 rounded-md shadow bg-white h-full'>
        <div
          className='
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          '
        >
          <img
            className='
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            '
            src={picture && picture || 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'}
            alt='House Img'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            <HeartButton />
          </div>
        </div>
        <div className='font-semibold text-lg flex justify-between'>
          <p>{name}</p>
          <p className='text-slate-600'>{moment(availabilityDate).format("MMM Do YY")}</p>
        </div>
        <div className='font-light text-neutral-500 flex justify-between'>
          <p>{city}</p>
          <p>{address}</p>
        </div>
        <div className='font-light text-neutral-500 flex justify-between items-center'>
          <p>badrooms:{bedrooms}</p>
          <p>bathrooms:{bathrooms}</p>
        </div>
        <div className='flex flex-row items-center justify-between gap-1'>
          <div className='font-semibold'>$ {rentPerMonth}</div>
          <div className='font-light mb-4'>{roomSize}</div>
        </div>
        <button
          onClick={() => handleBookingHouse(_id)}
          disabled={isSelectDisabled || currentUser?.role === 'admin'||user?.email===email }
          type="submit"
          className={`bg-blue-500 text-white px-10 py-2 rounded mt-auto awesome-btn ${isSelectDisabled || currentUser?.role === 'admin'||user?.email===email ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Booking
        </button>
      </div>
    </div>
    // </Link>
  )
}

export default House
