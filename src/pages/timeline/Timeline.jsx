import React, { useContext, useState } from 'react';
import { FriendTimelineContext } from '../../context/TimelineContext';

const Timeline = () => {
  const { friendTimeline } = useContext(FriendTimelineContext);
  const [filterType, setFilterType] = useState('all');

  const filteredTimeline =
    filterType === 'all'
      ? friendTimeline
      : friendTimeline.filter(
          (interaction) => interaction.type.toLowerCase() === filterType
        );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12 space-y-6">
            
            {/* title and filter */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-gray-900 mb-1">Timeline</h2>
              
              <div className="flex items-center border border-gray-100 rounded-lg shadow-sm space-x-3 p-2 w-fit">
                <label htmlFor="timeline-filter" className="text-sm text-gray-600">
                  Filter timeline:
                </label>
                
                <select
                  id="timeline-filter"
                  className="p-2 outline-none"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="call">Calls</option>
                  <option value="text">Texts</option>
                  <option value="video">Videos</option>
                </select>
              </div>
            </div>

            {/* timeline section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
              {filteredTimeline.length > 0 ? (
                filteredTimeline.map((interaction, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 border border-gray-100 shadow-sm rounded-lg"
                  >
                    <div className="text-3xl">
                      {interaction.actionIcon}
                    </div>

                    <div>
                      <div className="flex justify-center items-center gap-2">
                        <div className="font-medium text-gray-900">
                          {interaction.type}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {`With ${interaction.friend}`}
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        {interaction.date}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  No {filterType !== 'all' ? filterType : ''} interactions yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;