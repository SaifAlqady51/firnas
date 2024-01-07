"use client";
import { Endpoint } from "@/components/home/endpoint";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";
const AirportInfoPage = () => {
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const copyText = () => {
        navigator.clipboard.writeText(
            "https://airport-api-gamma.vercel.app/api/airport/get/airportName?airportCode=",
        );
        setShowCopiedMessage(true);
        setTimeout(() => {
            setShowCopiedMessage(false);
        }, 1000);
    };
    return (
        <main className=" align-center dark z-0 flex  h-screen flex-col items-center overscroll-x-none bg-[#e2eafc]  dark:bg-dark  dark:text-textColor  ">
            <div className=" my-60   flex h-fit w-4/5 flex-col items-center justify-center">
                {/* endpoint explination */}
                <div className="mb-12 text-xl font-semibold">
                    Use this endpoint if you want to to get airport information
                    from airport IATA code{"  "}
                    <p className="mt-6">
                        EX.{" "}
                        https://airport-api-gamma.vercel.app/api/airport/get/airportName?airportCode=CAI{" "}
                    </p>
                </div>
                {/* endpoint link */}
                <div
                    onClick={copyText}
                    className="relative mb-28 flex w-11/12 items-center justify-around rounded-lg border-2 border-black bg-black   px-2 py-4 text-black dark:bg-blue-50 lg:w-full xl:w-10/12  2xl:w-7/12"
                >
                    <p>
                        https://airport-api-gamma.vercel.app/api/airport/get/airportName?airportCode=&#123;IATACode&#125;{" "}
                    </p>
                    <div className=" flex cursor-pointer items-center justify-center">
                        <IoCopy className="text-xl" />
                    </div>
                    {showCopiedMessage && (
                        <div className=" absolute right-4 top-12 h-6 w-16 rounded-lg bg-slate-500 text-center text-white ">
                            {" "}
                            copied
                        </div>
                    )}
                </div>
                {/* endpoint box ui */}
                <Endpoint
                    inputList={["Pass", "Airport IATA code", "EX: CAI"]}
                    outputList={["airportName", "cityName", "countryName"]}
                    link="/airportInfo"
                />
            </div>
        </main>
    );
};

export default AirportInfoPage;
