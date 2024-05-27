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
    window.location.reload();
  };
  const handleRejectBooking = () => {
    console.log("reject");
  };
  return (
    <>
      {booking?.listingInfo?.type === "traveler" ? (
        <div className="flex flex-col pb-7 bg-neutral-100">
          <div className="flex flex-col px-11 mt-6 w-full max-md:px-5 max-md:max-w-full">
            <div className="self-start mt-14 ml-32 text-xl font-medium leading-8 text-slate-900 max-md:mt-10 max-md:ml-2.5">
              {booking.userInfo?.fName} offered a request
            </div>
            <div className="flex gap-5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={booking.userInfo?.profilePicture}
                className="shrink-0 my-auto rounded-full aspect-square w-[71px]"
              />
              <div className="flex-auto max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start px-16 pt-8 pb-14 w-full bg-white rounded-[38px] max-md:px-5 max-md:mt-1.5 max-md:max-w-full">
                      <div className="flex-wrap content-start max-w-full w-[456px]">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col py-2 text-xs leading-5 text-slate-900 max-md:mt-3.5">
                              <div className="mt-1.5 max-md:mr-1">From:</div>
                              <div className="mt-3.5 text-xl font-semibold max-md:mr-1">
                                {booking.listingInfo?.sourceLocation}
                              </div>
                              <div className="mt-12 max-md:mt-10">
                              Luggage Space
                              </div>
                              <div className="mt-2.5 text-xl font-semibold">
                              {booking.listingInfo?.luggageSpace}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-3.5">
                              <div className="flex gap-5 leading-[158.5%] text-slate-900 max-md:pr-5">
                                <div className="flex flex-col py-2 whitespace-nowrap">
                                  <div className="text-xs">Destination:</div>
                                  <div className="mt-3.5 text-xl font-semibold">
                                    {booking.listingInfo?.destinationLocation}
                                  </div>
                                </div>
                                <div className="flex flex-col py-1.5">
                                  <div className="text-xs">Date for Travel</div>
                                  <div className="mt-3.5 text-xl font-semibold">
                                  {booking.listingInfo?.date}
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 self-end mt-9 max-w-full w-[278px] max-md:pr-5">
                                <div className="flex flex-col self-start py-2 leading-[158.5%] text-slate-900">
                                  <div className="text-xs">Time of Delivery</div>
                                  <div className="mt-2.5 text-xl font-semibold">
                                  {booking.listingInfo?.timeOfDelivery}
                                  </div>
                                </div>
                                <div className="flex flex-col py-0.5">
                                  <div className="text-xs text-slate-900">
                                  Time of Dept
                                  </div>
                                  <div className="justify-center px-5 py-2.5 mt-2.5 text-sm font-semibold text-center text-sky-400 whitespace-nowrap bg-indigo-100 rounded-[31px] max-md:px-5">
                                  {booking.listingInfo?.departure}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-2.5 py-6 w-full text-base font-medium leading-6 text-sky-400 bg-white rounded-[38px] max-md:mt-1.5">
                      <div className="self-center text-xs">Expected to pay</div>
                      <div className="self-center mt-2.5 text-xl font-semibold">
                        {booking.listingInfo?.expectation}
                      </div>
                      {user._id === booking.listedId &&
                      booking.status === "pending" ? (
                        <>
                          <button
                            onClick={() => handleAcceptBooking(bookingId)}
                            className="justify-center px-12 py-5 mt-10 text-center text-white whitespace-nowrap bg-sky-400 rounded-[31px] max-md:px-5"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleRejectBooking(bookingId)}
                            className="justify-center px-14 py-5 mt-2 text-center whitespace-nowrap bg-white border border-sky-400 border-solid rounded-[31px] max-md:px-5"
                          >
                            Decline
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="justify-center px-12 py-5 mt-10 text-center text-white whitespace-nowrap bg-sky-400 rounded-[31px] max-md:px-5">
                            {booking.status?.toUpperCase()}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="self-start mt-6 ml-32 text-xl font-medium leading-8 text-slate-900 max-md:mt-10 max-md:ml-2.5">
                  Personal Details
                </div>
                <div className="flex flex-col  mt-6 w-[72%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start px-16 pt-8 pb-14 w-full bg-white rounded-[38px] max-md:px-5 max-md:mt-1.5 max-md:max-w-full">
                    <div className="flex-wrap content-start max-w-full w-[456px]">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col py-2 text-xs leading-5 text-slate-900 max-md:mt-3.5">
                            <div className="mt-1.5 max-md:mr-1">
                              Date Of Birth
                            </div>
                            <div className="mt-3.5 text-xl font-semibold max-md:mr-1">
                              {booking.userInfo?.dob}
                            </div>
                            <div className="mt-12 max-md:mt-10">Gender</div>
                            <div className="mt-2.5 text-xl font-semibold">
                              {booking.userInfo?.gender}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow max-md:mt-3.5">
                            <div className="flex gap-5 leading-[158.5%] text-slate-900 max-md:pr-5">
                              <div className="flex flex-col py-2 whitespace-nowrap">
                                <div className="text-xs">Occupation</div>
                                <div className="mt-3.5 text-xl font-semibold">
                                  {booking.userInfo?.occupation}
                                </div>
                              </div>
                              <div className="flex flex-col py-1.5">
                                <div className="text-xs">Location</div>
                                <div className="mt-3.5 text-xl font-semibold">
                                  {booking.userInfo?.address}
                                </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col pb-7 bg-neutral-100">
          <div className="flex flex-col px-11 mt-6 w-full max-md:px-5 max-md:max-w-full">
            <div className="self-start mt-14 ml-32 text-xl font-medium leading-8 text-slate-900 max-md:mt-10 max-md:ml-2.5">
              {booking.userInfo?.fName} offered a request
            </div>
            <div className="flex gap-5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={booking.userInfo?.profilePicture}
                className="shrink-0 my-auto rounded-full aspect-square w-[71px]"
              />
              <div className="flex-auto max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start px-16 pt-8 pb-14 w-full bg-white rounded-[38px] max-md:px-5 max-md:mt-1.5 max-md:max-w-full">
                      <div className="flex-wrap content-start max-w-full w-[456px]">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col py-2 text-xs leading-5 text-slate-900 max-md:mt-3.5">
                              <div className="mt-1.5 max-md:mr-1">From:</div>
                              <div className="mt-3.5 text-xl font-semibold max-md:mr-1">
                                {booking.listingInfo?.sourceLocation}
                              </div>
                              <div className="mt-12 max-md:mt-10">
                                Available bags:
                              </div>
                              <div className="mt-2.5 text-xl font-semibold">
                                {booking.listingInfo?.numberOfBags}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-3.5">
                              <div className="flex gap-5 leading-[158.5%] text-slate-900 max-md:pr-5">
                                <div className="flex flex-col py-2 whitespace-nowrap">
                                  <div className="text-xs">Destination:</div>
                                  <div className="mt-3.5 text-xl font-semibold">
                                    {booking.listingInfo?.destinationLocation}
                                  </div>
                                </div>
                                <div className="flex flex-col py-1.5">
                                  <div className="text-xs">Before:</div>
                                  <div className="mt-3.5 text-xl font-semibold">
                                    {booking.listingInfo?.dateRange}
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 self-end mt-9 max-w-full w-[278px] max-md:pr-5">
                                <div className="flex flex-col self-start py-2 leading-[158.5%] text-slate-900">
                                  <div className="text-xs">Weight:</div>
                                  <div className="mt-2.5 text-xl font-semibold">
                                    {booking.listingInfo?.totalWeight} KG
                                  </div>
                                </div>
                                <div className="flex flex-col py-0.5">
                                  <div className="text-xs text-slate-900">
                                    Item type:
                                  </div>
                                  <div className="justify-center px-5 py-2.5 mt-2.5 text-sm font-semibold text-center text-sky-400 whitespace-nowrap bg-indigo-100 rounded-[31px] max-md:px-5">
                                    {booking.listingInfo?.typeOfItems}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-2.5 py-6 w-full text-base font-medium leading-6 text-sky-400 bg-white rounded-[38px] max-md:mt-1.5">
                      <div className="self-center text-xs">Expected to pay</div>
                      <div className="self-center mt-2.5 text-xl font-semibold">
                        {booking.listingInfo?.expectation}
                      </div>
                      {user._id === booking.listedId &&
                      booking.status === "pending" ? (
                        <>
                          <button
                            onClick={() => handleAcceptBooking(bookingId)}
                            className="justify-center px-12 py-5 mt-10 text-center text-white whitespace-nowrap bg-sky-400 rounded-[31px] max-md:px-5"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleRejectBooking(bookingId)}
                            className="justify-center px-14 py-5 mt-2 text-center whitespace-nowrap bg-white border border-sky-400 border-solid rounded-[31px] max-md:px-5"
                          >
                            Decline
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="justify-center px-12 py-5 mt-10 text-center text-white whitespace-nowrap bg-sky-400 rounded-[31px] max-md:px-5">
                            {booking.status?.toUpperCase()}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="self-start mt-6 ml-32 text-xl font-medium leading-8 text-slate-900 max-md:mt-10 max-md:ml-2.5">
                  Personal Details
                </div>
                <div className="flex flex-col  mt-6 w-[72%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start px-16 pt-8 pb-14 w-full bg-white rounded-[38px] max-md:px-5 max-md:mt-1.5 max-md:max-w-full">
                    <div className="flex-wrap content-start max-w-full w-[456px]">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col py-2 text-xs leading-5 text-slate-900 max-md:mt-3.5">
                            <div className="mt-1.5 max-md:mr-1">
                              Date Of Birth
                            </div>
                            <div className="mt-3.5 text-xl font-semibold max-md:mr-1">
                              {booking.userInfo?.dob}
                            </div>
                            <div className="mt-12 max-md:mt-10">Gender</div>
                            <div className="mt-2.5 text-xl font-semibold">
                              {booking.userInfo?.gender}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow max-md:mt-3.5">
                            <div className="flex gap-5 leading-[158.5%] text-slate-900 max-md:pr-5">
                              <div className="flex flex-col py-2 whitespace-nowrap">
                                <div className="text-xs">Occupation</div>
                                <div className="mt-3.5 text-xl font-semibold">
                                  {booking.userInfo?.occupation}
                                </div>
                              </div>
                              <div className="flex flex-col py-1.5">
                                <div className="text-xs">Location</div>
                                <div className="mt-3.5 text-xl font-semibold">
                                  {booking.userInfo?.address}
                                </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
