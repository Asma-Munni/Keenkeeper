import React from 'react';

const HomepageBanner = () => {
    return (
        <div className='bg-[#f8fafc]'>
             <div className="p-8  container w-[90%] mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Friends to keep close in your life</h2>
        <p className="text-sm text-gray-600">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>
      <div className='flex justify-center items-center'>
        <button className="bg-[#244d3f] text-white text-center  px-6 py-2 rounded-md mb-6">+ Add a Friend</button>
      </div>

      
      
      <div className="flex justify-between gap-2">
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-1/4 ">
          <h3 className="text-3xl font-bold text-[#64748b]">10</h3>
          <p className="text-sm text-[#64748b]">Total Friends</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-1/4 ">
          <h3 className="text-3xl font-bold text-[#64748b]">3</h3>
          <p className="text-sm text-[#64748b]">On Track</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center w-1/4">
          <h3 className="text-3xl font-bold text-[#64748b]">6</h3>
          <p className="text-sm text-[#64748b]">Need Attention</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center w-1/4">
          <h3 className="text-3xl font-bold text-[#64748b]">12</h3>
          <p className="text-sm text-[#64748b]">Interactions This Month</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default HomepageBanner;