import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLuggageById } from "../features/listing/listingSlice";
import { getUser } from "../features/auth/authSlice";
function LuggageDetails() {
  const luggageId = useParams()
  const { user, gUser } = useSelector((state) => state.auth);
const {luggage} = useSelector((state) => state.listing)
  const dispatch = useDispatch()
 
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signup");
    } 
    dispatch(getLuggageById(luggageId))
   
  }, [user, navigate]);

  useEffect(() => {
    if (luggage?.user) {
      dispatch(getUser(luggage.user));
    }
  }, [luggage, dispatch]);

  if (!user || !gUser) {
    <>Loading</>// Or you can render a loading indicator or message here
  }
  return (
    <div className="flex flex-col rounded-[29px]">
      <div className="flex gap-5 items-start self-center mt-10 ml-28 max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col items-center self-start py-3.5 pr-3 pl-1.5 text-base font-semibold bg-neutral-100 rounded-[39px] max-sm:mx-auto">
          <img
            loading="lazy"
            srcSet="..."
            className="z-10 aspect-[1.02] w-[167px]"
          />
          <div className="text-center text-sky-400 leading-[158.5%]">
            Ahmad L.
          </div>
          <div className="flex gap-2 mt-3 text-sm leading-loose text-slate-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34e506fb5cf5aa8c0e6c782566d59f7e7360c1865aa5370c3459829084ceb2fe?"
              className="shrink-0 aspect-square w-[22px]"
            />
            <div>4.9 (16)</div>
          </div>
          <div className="justify-center self-stretch px-8 py-3.5 font-medium text-sky-400 bg-indigo-100 mt-[553px] rounded-[31px] max-md:px-5 max-md:mt-10">
            Report Spam
          </div>
        </div>
        <div className="flex flex-col w-[5%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
        </div>
        <div className="flex flex-col grow shrink-0 items-start self-end pb-14 mt-8 basis-0 w-fit max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start self-stretch px-px max-md:flex-wrap max-md:max-w-full max-sm:self-center">
            <div className="flex flex-col self-stretch mt-2">
              <div className="text-2xl font-semibold leading-10 text-sky-400">
                {gUser?.fName}
              </div>
              <div className="flex gap-5 py-1 mt-6 text-xl tracking-wide text-blue-950">
                <div className="flex-auto capitalize">destination</div>
                <div className="flex-auto font-semibold">
                  {luggage.destinationLocation}
                </div>
              </div>
              <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                <div className="grow capitalize">Pickup Location</div>
                <div className="flex-auto font-semibold">
                  {luggage.sourceLocation}
                </div>
              </div>
              <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                <div className="flex-auto capitalize">Traveling Via</div>
                <div className="flex-auto font-semibold">Air</div>
              </div>
              <div className="flex gap-5 py-1.5 mt-3 text-xl tracking-wide text-blue-950">
                <div className="grow capitalize">date for Travel</div>
                <div className="flex-auto font-semibold">20 November 2024</div>
              </div>
              <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                <div className="grow capitalize">time of delivery</div>
                <div className="flex-auto font-semibold">2: 25 AM +1</div>
              </div>
              <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                <div className="flex-auto capitalize">Time of dept</div>
                <div className="flex-auto font-semibold">2: 25 AM</div>
              </div>
              <div className="flex gap-5 py-1 mt-3 text-xl tracking-wide text-blue-950">
                <div className="grow capitalize">luggage space</div>
                <div className="flex-auto font-semibold">4 KG</div>
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
                    Jewlery
                  </div>
                </div>
              </div>
              <div className="mt-7 text-lg font-bold tracking-wide text-blue-950">
                Personal Details
              </div>
            </div>
            <div className="flex flex-col items-start pr-3.5 max-md:max-w-full">
              <div className="self-stretch text-xl font-semibold tracking-wide text-center text-emerald-600 max-md:max-w-full">
                Outstation
              </div>
              <div className="flex gap-5 py-2 mt-2 text-xl leading-8 text-blue-950">
                <div>Budget:</div>
                <div className="font-semibold">25 USD</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dce7e245ab4131c48ec9953d7265280b4c0cf1e3588e0b58f46fed629c032c28?"
                className="mt-2 max-w-full aspect-[5.56] w-[181px]"
              />
              <div className="flex gap-2.5 py-2.5 mt-2 text-xl leading-8 text-slate-900">
                <div className="grow">Review:</div>
                <div className="font-semibold">16</div>
                <div className="text-sky-400">View all</div>
              </div>
              <div className="flex gap-5 py-5 pr-6 pl-3 mt-2 rounded-3xl bg-neutral-100 max-md:pr-5 max-sm:mx-auto">
                <div className="flex flex-col flex-1">
                  <div className="flex gap-1 pr-3.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/60030bc9c8e5a8a4c7f8475adbfdf3b3e6f73dd2a0e6b91e22adfaec6ca5510c?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/60030bc9c8e5a8a4c7f8475adbfdf3b3e6f73dd2a0e6b91e22adfaec6ca5510c?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53154cabd88a723d9c16ba5a84ddeebc7afb70b08b39a0469148f0d0f9b4436?"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                  <div className="mt-3 text-xs leading-5 text-slate-900">
                    2 people Booked
                  </div>
                </div>
                <div className="flex flex-col flex-1 my-auto text-sky-400 leading-[158.5%]">
                  <div className="text-xs">Already Booked </div>
                  <div className="mt-3 text-xl font-semibold">75%</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between self-stretch mt-2 w-full text-xl font-medium text-center text-white max-md:flex-wrap max-md:max-w-full">
                <div className="justify-center items-start py-5 pr-16 pl-16 bg-sky-400 rounded-[31px] max-md:px-5">
                  Book now
                </div>
                <div className="flex gap-2.5 px-5 py-3.5 bg-sky-400 rounded-[31px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d01077e41fdb5b2479c5993560e00c198cd96f4f21c9b3d0358fb1453787759?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto">Contact Now</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f52fc3fe325783aee1f63f0c565fe203e3874bb5b6ebd92ccbd72cf7f0a523c8?"
                  className="shrink-0 aspect-square w-[50px]"
                />
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
          <div className="flex gap-5 justify-between mt-4 max-w-full text-xl tracking-wide text-blue-950 w-[367px]">
            <div className="flex flex-col self-start mt-1 capitalize whitespace-nowrap">
              <div>Age</div>
              <div className="mt-4">Gender</div>
              <div className="mt-6">Occupation</div>
              <div className="mt-5">Location</div>
            </div>
            <div className="flex flex-col font-semibold">
              <div>20</div>
              <div className="mt-6">Male</div>
              <div className="mt-5">Student </div>
              <div className="mt-6">51 west road, NYC</div>
            </div>
          </div>
          <div className="flex gap-2.5 mt-12 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-sm:mx-auto">
            <div className="flex flex-col justify-center px-6 py-5 bg-sky-400 rounded-3xl max-md:px-5">
              <div className="flex gap-2">
                <div className="text-base tracking-wide leading-4 text-blue-950">
                  ⭐
                </div>
                <div className="text-xs font-bold tracking-wide text-gray-100">
                  All
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 py-5 bg-gray-100 rounded-3xl text-blue-950 max-md:px-5">
              <div className="flex gap-2">
                <div className="text-base tracking-wide leading-4">⭐</div>
                <div className="text-xs font-medium tracking-wide">1</div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 py-5 bg-gray-100 rounded-3xl text-blue-950 max-md:px-5">
              <div className="flex gap-2">
                <div className="text-base tracking-wide leading-4">⭐</div>
                <div className="text-xs font-medium tracking-wide">2</div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 py-5 bg-gray-100 rounded-3xl text-blue-950 max-md:px-5">
              <div className="flex gap-2">
                <div className="text-base tracking-wide leading-4">⭐</div>
                <div className="text-xs font-medium tracking-wide">3</div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 py-5 bg-gray-100 rounded-3xl text-blue-950 max-md:px-5">
              <div className="flex gap-2">
                <div className="text-base tracking-wide leading-4">⭐</div>
                <div className="text-xs font-medium tracking-wide">1</div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-5 text-lg font-bold tracking-wide text-sky-400 max-md:max-w-full">
            User reviews
          </div>
          <div className="flex flex-col pt-2.5 mt-6 max-w-full bg-white rounded-3xl border border-gray-100 border-solid text-slate-900 w-[327px] max-sm:mx-auto">
            <div className="flex gap-2.5 self-start ml-4 font-bold max-md:ml-2.5">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 aspect-[1.09] w-[39px]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-xs tracking-wide leading-loose">
                  Want to ship some items to USA
                </div>
                <div className="flex gap-0.5 mt-1 text-xs leading-loose whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/79c936670091a64b10742b9988820664557eb13bd71044525e069a8e575a2dd9?"
                    className="shrink-0 aspect-square w-[9px]"
                  />
                  <div>4.9</div>
                </div>
              </div>
            </div>
            <div className="flex z-10 flex-col justify-center p-2.5 mt-2.5 mb-0 w-full bg-gray-100 rounded-none max-md:mb-2.5">
              <div className="flex gap-2.5 justify-center items-start pb-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex flex-col py-0.5 mt-2.5">
                  <div className="text-xs font-bold tracking-wide">
                    Jin Martin
                  </div>
                  <div className="mt-1.5 text-xs tracking-wide leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>
                  <div className="mt-1 text-xs tracking-normal leading-4">
                    10 mins ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LuggageDetails
