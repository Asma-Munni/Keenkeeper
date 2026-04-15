
import { useParams } from 'react-router';
import UseApps from '../../hook/UseApps';
import { FaArchive, FaRegEdit } from 'react-icons/fa';
import { HiBellSnooze } from 'react-icons/hi2';
import { RiDeleteBinFill } from 'react-icons/ri';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { FadeLoader } from 'react-spinners';


const FriendDetails = () => {
    const {id} = useParams();
    console.log(id, "Id");
    const{friends, loading} = UseApps();
    const expectedFriend = friends?.find((friend)=>friend.id == id);

    console.log(friends,loading , "friends", "loading");
    console.log(expectedFriend, "expectedFriend")

  if (loading) return <div className='flex items-center justify-center text-center'><FadeLoader color='#244d3f'/></div> ; 

  return (
    <div class="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
  <div class="max-w-6xl mx-auto">
    
   
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

      
      <div class="lg:col-span-5">
        <div class="bg-white rounded-3xl shadow-sm p-8 sticky top-8">
          <div class="flex flex-col items-center text-center">
            
            
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
              <img 
                src={expectedFriend?.picture} 
                alt="John Doe"
                class="w-full h-full object-cover"
              />
            </div>

            <h1 class="text-3xl font-semibold text-gray-900 mb-2">{expectedFriend?.name} </h1>

           
            <div class="flex gap-3 mb-6">
              <span class="px-5 py-1.5 bg-red-100 text-red-700 text-sm font-medium rounded-full">{expectedFriend?.status} </span>
              <span class="px-5 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full">FAMILY</span>
            </div>

            {expectedFriend?.tags.map((tag, index)=>(<div 
            key={index}
            className="badge badge-soft badge-success 
             sm:flex col md:flex   mb-1">{tag}</div>))}


            <div class="text-sm text-gray-500 mb-10">
              Preferred: <span class="font-medium text-gray-700 mt-1">{expectedFriend?.email} </span>
            </div>

           
            <div class="w-full space-y-3">
              <button class="w-full flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl text-gray-700 font-medium transition-all active:scale-[0.98]">
                <HiBellSnooze /> Snooze 2 Weeks
              </button>
              <button class="w-full flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl text-gray-700 font-medium transition-all active:scale-[0.98]">
                <FaArchive /> Archive
              </button>
              <button class="w-full flex items-center justify-center gap-3 py-4 bg-white border border-red-200 hover:bg-red-50 text-red-600 rounded-2xl font-medium transition-all active:scale-[0.98]">
                <RiDeleteBinFill /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div class="lg:col-span-7 space-y-6">

        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-white rounded-3xl p-6 text-center shadow-sm">
            <div class="text-4xl font-semibold text-gray-900">{expectedFriend?.days_since_contact}</div>
            <div class="text-sm text-gray-500 mt-1">Days Since Contact</div>
          </div>
          <div class="bg-white rounded-3xl p-6 text-center shadow-sm">
            <div class="text-4xl font-semibold text-gray-900">{expectedFriend?.goal}</div>
            <div class="text-sm text-gray-500 mt-1">Goal (Days)</div>
          </div>
          <div class="bg-white rounded-3xl p-6 text-center shadow-sm">
            <div class="text-2xl font-semibold text-gray-900">{expectedFriend?.next_due_date}</div>
            <div class="text-sm text-gray-500 mt-1">Next Due</div>
          </div>
        </div>

        
        <div class="bg-white rounded-3xl p-8 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-gray-900">Relationship Goal</h3>
            <button class="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              <FaRegEdit /> Edit
            </button>
          </div>
          <p class="text-gray-700 text-lg">
            Connect every <span class="font-semibold">30 days</span>
          </p>
        </div>

       
        <div class="bg-white rounded-3xl p-8 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-6">Quick Check-In</h3>
          <div class="grid grid-cols-3 gap-4">
            <button class="flex flex-col items-center py-10 bg-white border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl transition-all active:scale-95">
              <span class="text-5xl mb-3"><BiSolidPhoneCall /></span>
              <span class="font-medium">Call</span>
            </button>

            <button class="flex flex-col items-center py-10 bg-white border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl transition-all active:scale-95">
              <span class="text-5xl mb-3"><MdOutlineTextsms /></span>
              <span class="font-medium">Text</span>
            </button>

            <button class="flex flex-col items-center py-10 bg-white border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl transition-all active:scale-95">
              <span class="text-5xl mb-3"><MdOutlineVideocam /></span>
              <span class="font-medium">Video</span>
            </button>
          </div>
        </div>

        
        <div class="bg-white rounded-3xl p-8 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-gray-900">Recent Interactions</h3>
            <button class="text-sm text-gray-500 hover:text-gray-700">Full History →</button>
          </div>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="text-3xl mt-1"><MdOutlineTextsms /></div>
              <div class="flex-1">
                <div class="font-medium text-gray-900">Text</div>
                <div class="text-gray-600 text-sm mt-0.5">Asked for career advice</div>
              </div>
              <div class="text-sm text-gray-400 whitespace-nowrap">Jan 28, 2026</div>
            </div>
            <div class="flex gap-4">
              <div class="text-3xl mt-1"><BiSolidPhoneCall /></div>
              <div class="flex-1">
                <div class="font-medium text-gray-900">Call</div>
                <div class="text-gray-600 text-sm mt-0.5">Industry conference meetup</div>
              </div>
              <div class="text-sm text-gray-400 whitespace-nowrap">Jan 28, 2026</div>
            </div>
            <div class="flex gap-4">
              <div class="text-3xl mt-1"><MdOutlineVideocam /></div>
              <div class="flex-1">
                <div class="font-medium text-gray-900">Video</div>
                <div class="text-gray-600 text-sm mt-0.5">Asked for career advice</div>
              </div>
              <div class="text-sm text-gray-400 whitespace-nowrap">Jan 28, 2026</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  ); 
}  
    


  
   
   

export default FriendDetails;