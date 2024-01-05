import { Endpoint } from "@/components/home/endpoint";

export default function Home() {
    return (
        <>
            <Endpoint
                inputList={["Pass", "Airport IATA code", "EX: CAI"]}
                outputList={["airportName", "cityName", "countryName"]}
                link="/"
            />
            <Endpoint
                inputList={["Pass", "City name", "EX: Cairo"]}
                outputList={["airportName", "airportCode"]}
                outputType="list"
                link="/"
            />
        </>
    );
}
