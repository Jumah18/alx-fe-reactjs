import Massey from './Massey.png'
function UserProfile() {
    return (
        <>
       
      <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto rounded-lg  my-20 shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm sm:text-lg md:text-xl sm:text-sm md:text-base hover:shadow-2xl" >
        <img src={Massey} alt="User" className='w-36 h-36 rounded-full max-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out'/>
        <h1 className='text-xl text-blue-800 my-4 hover:text-blue-500' >John Doe</h1>
        <p className='text-gray-600 text-base'>Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
     </>
    );
  }

  
  export default UserProfile;