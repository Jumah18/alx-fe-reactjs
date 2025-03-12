import Massey from './Massey.png'
function UserProfile() {
    return (
        <>
      <div className="user-profile bg-gray-100 p-8 max-w-[400] max-auto my-20 rounded-1g shadow-lg" >
        <img src={Massey} alt="User" className='w-36 h-36 rounded-full max-auto'/>
        <h1 className='text-xxl text-blue-800 my-4'>John Doe</h1>
        <p className='text-gray-600 text-base'>Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
     </>
    );
  }
  
  export default UserProfile;