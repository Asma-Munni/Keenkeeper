import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { FriendTimelineContext } from '../../context/TimelineContext';
import { FaArchive, FaRegEdit } from 'react-icons/fa';
import { HiBellSnooze } from 'react-icons/hi2';
import { RiDeleteBinFill } from 'react-icons/ri';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { FadeLoader } from 'react-spinners';
import UseApps from '../../hook/UseApps';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { id } = useParams();
    const { friends, loading } = UseApps();
    const expectedFriend = friends?.find((friend) => friend.id == id);

    const { friendTimeline, setFriendTimeline } = useContext(FriendTimelineContext);

    // Loading State
    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <FadeLoader color='#244d3f' />
            </div>
        );
    }

    // Friend Not Found
    if (!expectedFriend) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Friend not found
            </div>
        );
    }

    const handleFriendTimeline = (actionType) => {
        const actionDetails = {
            type: actionType,
            date: new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }),
            friend: expectedFriend.name,
            actionIcon: getActionIcon(actionType),
        };
        setFriendTimeline([...friendTimeline, actionDetails]);

        {/*toast */}
       let toastMessage = '';

    if (actionType === 'Call') {
        toastMessage = `${expectedFriend.name} is calling!`;
    } 
    else if (actionType === 'Text') {
        toastMessage = `${expectedFriend.name} is texting!`;
    } 
    else if (actionType === 'Video') {
        toastMessage = `${expectedFriend.name} is video calling!`;
    }

    toast(toastMessage);
    };

    const getActionIcon = (actionType) => {
        switch (actionType) {
            case 'Call': return <BiSolidPhoneCall className="text-blue-600" />;
            case 'Text': return <MdOutlineTextsms className="text-green-600" />;
            case 'Video': return <MdOutlineVideocam className="text-purple-600" />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/*Left Side - Profile  */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                                    <img 
                                        src={expectedFriend.picture} 
                                        alt={expectedFriend.name} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>

                                <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                                    {expectedFriend.name}
                                </h1>

                                <div className="flex gap-3 mb-6">
                                    <span className="px-5 py-1.5 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                                        {expectedFriend.status}
                                    </span>
                                    <span className="px-5 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                                        FAMILY
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 justify-center mb-8">
                                    {expectedFriend.tags?.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="badge badge-soft badge-success px-4 py-1 text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-sm text-gray-500 mb-10">
                                    Preferred: <span className="font-medium text-gray-700">{expectedFriend.email}</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="w-full space-y-3">
                                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl text-gray-700 font-medium transition-all active:scale-[0.98]">
                                        <HiBellSnooze /> Snooze 2 Weeks
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl text-gray-700 font-medium transition-all active:scale-[0.98]">
                                        <FaArchive /> Archive
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-red-200 hover:bg-red-50 text-red-600 rounded-2xl font-medium transition-all active:scale-[0.98]">
                                        <RiDeleteBinFill /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Right Side  */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Stats Cards - Days Since Contact, Goal, Next Due */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                                <div className="text-4xl font-semibold text-gray-900">
                                    {expectedFriend.days_since_contact}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Days Since Contact</div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                                <div className="text-4xl font-semibold text-gray-900">
                                    {expectedFriend.goal}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Goal (Days)</div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                                <div className="text-2xl font-semibold text-emerald-600">
                                    {expectedFriend.next_due_date}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Next Due</div>
                            </div>
                        </div>

                        {/* Relationship Goal */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-900">Relationship Goal</h3>
                                <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                                    <FaRegEdit /> Edit
                                </button>
                            </div>
                            <p className="text-gray-700 text-lg">
                                Connect every <span className="font-semibold text-indigo-600">30 days</span>
                            </p>
                        </div>

                        {/* Quick Check-In */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button 
                                    className="flex flex-col items-center py-10 bg-white border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl transition-all active:scale-95"
                                    onClick={() => handleFriendTimeline('Call')}>
                                    <span className="text-5xl mb-3"><BiSolidPhoneCall /></span>
                                    <span className="font-medium">Call</span>
                                </button>

                                <button 
                                    className="flex flex-col items-center py-10 bg-white border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl transition-all active:scale-95"
                                    onClick={() => handleFriendTimeline('Text')}>
                                    <span className="text-5xl mb-3"><MdOutlineTextsms /></span>
                                    <span className="font-medium">Text</span>
                                </button>

                                <button 
                                    className="flex flex-col items-center py-10 bg-white border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl transition-all active:scale-95"
                                    onClick={() => handleFriendTimeline('Video')}>
                                    <span className="text-5xl mb-3"><MdOutlineVideocam /></span>
                                    <span className="font-medium">Video</span>
                                </button>
                            </div>
                        </div>

                       
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;