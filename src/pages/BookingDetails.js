import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchBookingById,
  acceptBooking,
} from "../features/booking/bookingSlice";

function BookingDetails() {
  const { bookingId } = useParams();
  const dispatch = useDispatch();
  const { booking, isLoading } = useSelector((state) => state.booking);

  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [dispatch, bookingId]);

  const { user } = useSelector((state) => state.auth);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!booking) {
    return <>No booking details available</>;
  }
  const handleAcceptBooking = (bookingId) => {
    
    dispatch(acceptBooking(bookingId));
    window.location.reload()
  };
  const handleRejectBooking = () => {
    console.log("reject");
  };
  return (
    <>
      {booking?.listingInfo?.type === "traveler" ? (
        <div className="flex flex-col rounded-[29px]">
          <div className="flex gap-5 items-start self-center ml-28 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col w-[5%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
            </div>
            <div className="flex flex-col grow shrink-0 items-start self-end pb-14 mt-8 basis-0 w-fit max-md:max-w-full">
              <div className="flex gap-5 justify-between items-start self-stretch px-px max-md:flex-wrap max-md:max-w-full max-sm:self-center">
                <div className="flex flex-col self-stretch mt-2">
                  <div className="text-2xl font-semibold leading-10 text-sky-400">
                    {booking.userInfo?.fName}
                  </div>
                  <div className="flex gap-5 py-1 mt-6 text-xl tracking-wide text-blue-950">
                    <div className="flex-auto capitalize">Destination</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.destinationLocation}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="grow capitalize">Pickup Location</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.sourceLocation}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="flex-auto capitalize">Traveling Via</div>
                    <div className="flex-auto font-semibold">Air</div>
                  </div>
                  <div className="flex gap-5 py-1.5 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="grow capitalize">Date for Travel</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.date}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="grow capitalize">Time of Delivery</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.timeOfDelivery}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="flex-auto capitalize">Time of Dept</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.departure}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="grow capitalize">Luggage Space</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.luggageSpace} KG
                    </div>
                  </div>
                  <div className="flex gap-5 mt-3 w-full">
                    <div className="flex-auto my-auto text-xl tracking-wide capitalize text-blue-950">
                      Won’t Carry
                    </div>
                    <div className="flex gap-2 text-sm font-semibold text-center text-sky-400 whitespace-nowrap">
                      <div className="justify-center px-5 py-2.5 bg-indigo-100 rounded-[31px]">
                        Electronics
                      </div>
                      <div className="justify-center px-5 py-2.5 bg-indigo-100 rounded-[31px]">
                        Jewelry
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 text-lg font-bold tracking-wide text-blue-950">
                    Personal Details
                  </div>
                </div>
                <div className="flex flex-col items-start pr-3.5 max-md:max-w-full">
                  <div className="self-stretch text-xl font-semibold tracking-wide text-center text-emerald-600 max-md:max-w-full">
                    {booking.listingInfo?.travelType}
                  </div>
                  <div className="flex gap-5 py-2 mt-2 text-xl leading-8 text-blue-950">
                    <div>Expectation</div>
                    <div className="font-semibold">
                      {booking.listingInfo?.expectation} Rs
                    </div>
                  </div>
                  {user._id === booking.listedId && booking.status==="pending"? (
                    <>
                      <div className="flex gap-5 justify-between self-stretch mt-2 w-full text-xl font-medium text-center text-white max-md:flex-wrap max-md:max-w-full">
                        <button
                          onClick={() => handleRejectBooking(bookingId)}
                          className="justify-center items-start py-5 pr-16 pl-16 bg-sky-400 rounded-[31px] max-md:px-5"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleAcceptBooking(bookingId)}
                          className="justify-center items-start py-5 pr-16 pl-16 bg-sky-400 rounded-[31px] max-md:px-5"
                        >
                          Accept
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="justify-center items-start py-5 pr-16 pl-16 bg-sky-400 rounded-[31px] max-md:px-5">
                        {booking.status}
                      </div>
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.04] w-[73px] max-sm:mx-auto"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-6 aspect-[1.04] w-[73px] max-sm:mx-auto"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-6 aspect-[1.04] w-[73px] max-sm:mx-auto max-sm:max-w-[66px]"
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-4 max-w-full text-xl tracking-wide text-blue-950 w-[367px]">
                <div className="flex flex-col self-start mt-1 capitalize whitespace-nowrap">
                  <div>Date Of Birth</div>
                  <div className="mt-4">Gender</div>
                  <div className="mt-6">Occupation</div>
                  <div className="mt-5">Location</div>
                </div>
                <div className="flex flex-col font-semibold">
                  <div>{booking.userInfo?.dob}</div>
                  <div className="mt-6">{booking.userInfo?.gender}</div>
                  <div className="mt-5">{booking.userInfo?.occupation}</div>
                  <div className="mt-6">{booking.userInfo?.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-[29px]">
          <div className="flex gap-5 items-start self-center ml-28 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col w-[5%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
            </div>
            <div className="flex flex-col grow shrink-0 items-start self-end pb-14 mt-8 basis-0 w-fit max-md:max-w-full">
              <div className="flex gap-5 justify-between items-start self-stretch px-px max-md:flex-wrap max-md:max-w-full max-sm:self-center">
                <div className="flex flex-col self-stretch mt-2">
                  <div className="text-2xl font-semibold leading-10 text-sky-400">
                    {booking.userInfo?.fName}
                  </div>
                  <div className="flex gap-5 py-1 mt-6 text-xl tracking-wide text-blue-950">
                    <div className="flex-auto capitalize">Destination</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.destinationLocation}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="grow capitalize">Pickup Location</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.sourceLocation}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1.5 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="grow capitalize">Date Range</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.dateRange}
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="grow capitalize">Luggage Weight</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.totalWeight} KG
                    </div>
                  </div>
                  <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                    <div className="flex-auto capitalize">Number of Bags</div>
                    <div className="flex-auto font-semibold">
                      {booking.listingInfo?.numberOfBags}
                    </div>
                  </div>
                  <div className="flex gap-5 mt-3 w-full">
                    <div className="flex-auto my-auto text-xl tracking-wide capitalize text-blue-950">
                      Type of Items
                    </div>
                    <div className="flex gap-2 text-sm font-semibold text-center text-sky-400 whitespace-nowrap">
                      <div className="justify-center px-5 py-2.5 bg-indigo-100 rounded-[31px]">
                        {booking.listingInfo?.typeOfItems}
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 text-lg font-bold tracking-wide text-blue-950">
                    Personal Details
                  </div>
                </div>
                <div className="flex flex-col items-start pr-3.5 max-md:max-w-full">
                  <div className="self-stretch text-xl font-semibold tracking-wide text-center text-emerald-600 max-md:max-w-full">
                    {booking.listingInfo?.travelType}
                  </div>
                  <div className="flex gap-5 py-2 mt-2 text-xl leading-8 text-blue-950">
                    <div>Expectation</div>
                    <div className="font-semibold">
                      {booking.listingInfo?.expectation} Rs
                    </div>
                  </div>
                  {user._id === booking.listedId && booking.status==="pending"? (
                    <>
                      <div className="flex gap-5 justify-between self-stretch mt-2 w-full text-xl font-medium text-center text-white max-md:flex-wrap max-md:max-w-full">
                        <button
                          onClick={() => handleRejectBooking(bookingId)}
                          className="justify-center items-start py-5 pr-16 pl-16 bg-sky-400 rounded-[31px] max-md:px-5"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleAcceptBooking(bookingId)}
                          className="justify-center items-start py-5 pr-16 pl-16 bg-sky-400 rounded-[31px] max-md:px-5"
                        >
                          Accept
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="justify-center items-start py-5 pr-16 pl-16 bg-sky-400 rounded-[31px] max-md:px-5">
                        {booking.status}
                      </div>
                    </>
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.04] w-[73px] max-sm:mx-auto"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-6 aspect-[1.04] w-[73px] max-sm:mx-auto"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-6 aspect-[1.04] w-[73px] max-sm:mx-auto max-sm:max-w-[66px]"
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-4 max-w-full text-xl tracking-wide text-blue-950 w-[367px]">
                <div className="flex flex-col self-start mt-1 capitalize whitespace-nowrap">
                  <div>Date Of Birth</div>
                  <div className="mt-4">Gender</div>
                  <div className="mt-6">Occupation</div>
                  <div className="mt-5">Location</div>
                </div>
                <div className="flex flex-col font-semibold">
                  <div>{booking.userInfo?.dob}</div>
                  <div className="mt-6">{booking.userInfo?.gender}</div>
                  <div className="mt-5">{booking.userInfo?.occupation}</div>
                  <div className="mt-6">{booking.userInfo?.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingDetails;
