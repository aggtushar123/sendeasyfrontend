import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../features/auth/authSlice';
import { getTravelers } from '../features/listing/listingSlice';
import TravelerModal from './Dashboard/TravelerModal';
import cross from '../components/assets/Login/crossIcon.svg';
import CreateListingPopup from './Dashboard/CreateListingPopup';
import BookNowPopup from './Dashboard/BooknowPopup';
function LuggageListing() {
  const [currentTraveler, setCurrentTraveler] = useState(null);
  const [showAllLuggageListings, setShowAllLuggageListings] = useState(false);
  const [ongoingTripsData, setOngoingTripsData] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showAllOngoingListings, setShowAllOngoingListings] = useState(false);
  const [createdTravelerList, setCreatedTravelerList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const { luggageListings, traveler, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.listing);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTravelers());
  }, [dispatch]);

  const handleClick = (luggage) => {
    // setCurrentTraveler(luggage); // Set the current traveler
    navigate(`/luggageListing/luggagedetails/${luggage._id}`);
  };
  const handleBookNow = (userDetail) => {
    setCurrentUser(userDetail);
    setShowModal(true);
  };
  const handleContactNow = (userId) => {
    console.log(userId);
    navigate('/dashboard/chats');
  };
  const travelerList = Array.isArray(traveler) ? traveler : [];
  useEffect(() => {
    // Filter the travelerList to get only ongoing trips data
    const filteredOngoingTrips = luggageListings.filter(
      (travel) => travel.trips === 'created'
    );

    setOngoingTripsData(filteredOngoingTrips);
  }, [luggageListings]);

  useEffect(() => {
    const filteredCreatedTravelerTrips = travelerList.filter(
      (travel) => travel.trips === 'created'
    );
    setCreatedTravelerList(filteredCreatedTravelerTrips);
  }, [travelerList]);

  useEffect(() => {
    // Fetch user details for each traveler in ongoing trips
    const fetchUserDetails = async () => {
      for (const i of ongoingTripsData) {
        if (!userDetails[i.user]) {
          const action = await dispatch(getUser(i.user));

          if (action.payload) {
            setUserDetails((prevDetails) => ({
              ...prevDetails,
              [i.user]: action.payload,
            }));
          }
        }
      }
    };
    if (ongoingTripsData.length > 0) {
      fetchUserDetails();
    }
  }, [ongoingTripsData, dispatch, userDetails]);

  return (
    <>
      {showModal && (
        <form className='flex justify-center items-center'>
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

              <div className='relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl py-2'>
                <div
                  className='absolute left-[750px] top-4 cursor-pointer'
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <img src={cross} alt='' />
                </div>

                {createdTravelerList.length === 0 ? (
                  <div className='flex flex-col px-4 py-11 bg-white max-w-[980px] rounded-[51px] max-md:px-5'>
                    <BookNowPopup state={'luggage'} />
                  </div>
                ) : (
                  <div className='flex flex-col px-4 py-11 bg-white max-w-[980px] rounded-[51px] max-md:px-5'>
                    <div className='self-center text-xl font-semibold leading-7 text-center text-slate-900'>
                      Created Listings
                    </div>

                    {createdTravelerList
                      .slice(
                        0,
                        showAllOngoingListings ? createdTravelerList.length : 2
                      )
                      .map((travel) => (
                        <TravelerModal
                          key={travel.id}
                          travel={travel}
                          status='created'
                          userDetail={currentUser}
                        />
                      ))}
                    <>
                      {createdTravelerList.length === 0 && console.log('empty')}
                    </>

                    {createdTravelerList.length > 2 && (
                      <button
                        onClick={() =>
                          setShowAllOngoingListings(!showAllOngoingListings)
                        }
                        type='button'
                        className='justify-center items-center self-center px-16 py-5 mt-7 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5'
                      >
                        {showAllLuggageListings ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
      <div>
        {ongoingTripsData
          .slice(0, showAllLuggageListings ? ongoingTripsData.length : 2)
          .reverse()
          .map((luggage) => {
            const userDetail = userDetails[luggage.user];

            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                key={luggage.id}
                onClick={() => handleClick(luggage)}
                className='flex gap-5 justify-between items-start px-7 pt-7 pb-12 mt-16 mb-10 w-full bg-gray-100 max-w-[1239px] rounded-[38px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full'
              >
                <div className='flex flex-col w-[23%] max-md:ml-0 max-md:w-full'>
                  <div className='flex gap-5 justify-between max-md:mt-10'>
                    <div className='flex flex-col items-center font-semibold'>
                      <img
                        loading='lazy'
                        src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        className='aspect-[1.03] w-[86px] rounded-full'
                      />
                      <div className='self-stretch mt-1 text-base leading-6 text-sky-400'>
                        {userDetail?.fName ?? ' '}
                      </div>
                      {/* <div className='flex gap-0.5 mt-2.5 text-xs leading-loose text-slate-900'>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/12fa56c1f59dd970aca6c251a796b3783cbe34dc570bfbeda374ae6ec76517dd?'
                          className='shrink-0 aspect-square w-[22px]'
                        />
                        <div className='my-auto'>4.9 (16)</div>
                      </div> */}
                    </div>
                    <div className='flex flex-col mt-11'>
                      <div className='text-xs text-slate-900'>Item type:</div>
                      <div className='justify-center px-5 py-2.5 mt-2.5 text-sm font-semibold text-center text-sky-400 whitespace-nowrap bg-indigo-100 rounded-[31px]'>
                        {luggage.typeOfItems}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full'>
                  <div className='grow mt-1.5 max-md:mt-10 max-md:max-w-full'>
                    <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                      <div className='flex flex-col w-[78%] max-md:ml-0 max-md:w-full'>
                        <div className='flex gap-5 justify-between self-stretch my-auto leading-[158.5%] text-slate-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
                          <div className='flex flex-col py-2 whitespace-nowrap'>
                            <div className='text-xs'>From:</div>
                            <div className='mt-3.5 text-xl font-semibold'>
                              {luggage.destinationLocation}
                            </div>
                          </div>
                          <div className='flex flex-col py-2 whitespace-nowrap'>
                            <div className='text-xs'>Destination:</div>
                            <div className='mt-3.5 text-xl font-semibold'>
                              {luggage.sourceLocation}
                            </div>
                          </div>
                          <div className='flex flex-col py-1.5'>
                            <div className='text-xs'>Before:</div>
                            <div className='mt-3.5 text-xl font-semibold'>
                              {luggage.dateRange.substring(0, 10)}
                            </div>
                          </div>
                          <div className='flex flex-col py-2'>
                            <div className='text-xs'>Available bags:</div>
                            <div className='mt-2.5 text-xl font-semibold'>
                              {luggage.numberOfBags}
                            </div>
                          </div>
                          <div className='flex flex-col py-2'>
                            <div className='text-xs'>Weight:</div>
                            <div className='mt-2.5 text-xl font-semibold'>
                              {luggage.totalWeight} KG
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full'>
                        <div className='flex flex-col grow max-md:mt-10'>
                          <div className='flex flex-col items-start pr-3.5 pl-8 max-md:pl-5'>
                            <div className='text-xs leading-5 text-sky-400'>
                              Expected to pay
                            </div>
                            <div className='mt-2.5 text-xl font-semibold leading-8 text-sky-400'>
                              Rs {luggage.expectation}
                            </div>
                            <div className='self-center mt-1.5 text-xs leading-4 text-emerald-600'>
                              (Suggested $100)
                            </div>
                            <div className='flex gap-3 px-px mt-4'>
                              <img
                                loading='lazy'
                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/baefcd77e32ab6ff6d774be13ef038cf0629e78074ad69d103f920c6101aefe2?'
                                className='shrink-0 my-auto w-7 aspect-square'
                              />
                              <img
                                loading='lazy'
                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/8b4670388bdad860b316bb01da5602ccdb1744b65ae82d1ad90f18fb7c329ad1?'
                                className='shrink-0 w-8 aspect-square'
                              />
                              <img
                                loading='lazy'
                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/6fb7678beaa272b2e03a023748156a99d2e4c84f680af33c3c1c7fedcaedde84?'
                                className='shrink-0 w-8 aspect-square'
                              />
                            </div>
                          </div>

                          {user?._id === luggage.user ? (
                            <></>
                          ) : (
                            <>
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBookNow(userDetail);
                                }}
                                className='flex gap-2 px-3 py-3.5 mt-4 text-base font-medium text-center text-white bg-sky-400 rounded-[31px]'
                              >
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleBookNow(userDetail);
                                  }}
                                  className='flex-auto my-auto'
                                >
                                  Book Now
                                </button>
                              </div>
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBookNow();
                                }}
                                className='flex gap-2 px-3 py-3.5 mt-4 text-base font-medium text-center text-white bg-sky-400 rounded-[31px]'
                              >
                                <img
                                  loading='lazy'
                                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/73552b36b8c3d58faba037db1fd35fff9dc2b0b3fe363beda8f6703a660968fc?'
                                  className='shrink-0 w-6 aspect-square'
                                />

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleContactNow(userDetail._id);
                                  }}
                                  className='flex-auto my-auto'
                                >
                                  Contact Now
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        {ongoingTripsData.length > 2 && (
          <div className='flex justify-center mb-20'>
            <button
              onClick={() => setShowAllLuggageListings(!showAllLuggageListings)}
              className='justify-center items-center px-16 py-5 mt-20 mb-20 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10'
            >
              {showAllLuggageListings ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default LuggageListing;
