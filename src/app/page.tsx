import { Endpoint } from "@/components/home/endpoint";

export default function Home() {
    return (
        <main className=" align-center dark z-0 flex h-full flex-col overscroll-x-none bg-[#e2eafc]  dark:bg-dark  dark:text-textColor  ">
            <div className="mx-40 my-40 flex h-fit flex-col items-center justify-center">
                <Endpoint
                    inputList={["Pass", "Airport IATA code", "EX: CAI"]}
                    outputList={["airportName", "cityName", "countryName"]}
                    link="/airportInfo"
                />
                <Endpoint
                    inputList={["Pass", "City name", "EX: Cairo"]}
                    outputList={["airportName", "airportCode"]}
                    outputType="list"
                    link="/"
                />
            </div>
        </main>
    );
}
