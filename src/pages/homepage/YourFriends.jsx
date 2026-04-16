
import { FadeLoader } from 'react-spinners';
import UseApps from '../../hook/UseApps';
import { Link } from 'react-router';


const YourFriends = () => {
 
  const {friends, loading}= UseApps();
   
   
      console.log(loading, "loading");

  if (loading) return <div className='flex items-center justify-center text-center'><FadeLoader color='#244d3f'/></div> ; 
  
 
  

  return (
    <div >
      <h2 className='font-bold mb-3'>Your Friends: {friends.length}</h2>
      <ul>
        
          <div className="p-8">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          
          <Link 
          to={`/friendDetails/${friend.id}`}
          key={friend.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={friend.picture} alt={friend.name} className="rounded-full w-24 h-24 mb-4" />
            <h3 className="font-semibold text-lg">{friend.name}</h3>
            <p className="text-sm text-[#64748b]"> 62d ago</p>


            {friend.tags.map((tag, index)=>(<div 
            key={index}
            className="badge badge-soft badge-success
             sm:flex col md:flex  gap-2">{tag}</div>))}


           <div className={`mt-2 px-4 py-1 text-white rounded-full 
  ${friend.status === "on track" 
    ? "bg-[#244d3f]" 
    : friend.status === "overdue" 
      ? "bg-[#ef4444]" 
      : friend.status === "need attention" 
        ? "bg-[#efad44]" 
        : ""}`}>
  {friend.status}
</div>
          </Link>
        ))}
      </div>
    </div>
       
      </ul>
    </div>
  );
};

export default YourFriends;