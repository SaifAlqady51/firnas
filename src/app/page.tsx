import { Arrow } from "@/components/arrow";

export default function Home() {
    return (
        <main className=" align-center dark z-0 flex h-screen flex-col overscroll-x-none bg-white  dark:bg-dark  dark:text-textColor  ">
            <div className="mx-40 my-40 flex flex-col items-center justify-center">
                <div className="relative my-20  flex items-center">
                    <div className="mr-4 flex flex-col items-center justify-center text-xl">
                        <p>Pass</p>
                        <p>Airport IATA Code</p>
                        <p>EX: CAI </p>
                    </div>
                    <Arrow position="horizontal" />
                    <div className="flex h-40 w-80 flex-col items-center rounded-lg bg-[#1b9aaa] p-8">
                        <h2 className="text-3xl">Firnas</h2>
                        <h2 className="mt-2 text-3xl">API</h2>
                    </div>
                    <Arrow position="horizontal" />
                    <div className="ml-4 flex flex-col text-xl">
                        <p>&#123;</p>
                        <p className="ml-4"> airportName</p>
                        <p className="ml-4"> city</p>
                        <p className="ml-4"> country</p>
                        <p>&#125;</p>
                    </div>
                </div>

                <div className="relative flex  items-center">
                    <div className="mr-4 flex flex-col items-center justify-center text-xl">
                        <p>Pass</p>
                        <p>Airport IATA Code</p>
                        <p>EX: CAI </p>
                    </div>
                    <Arrow position="horizontal" />
                    <div className="flex h-40 w-80 flex-col items-center rounded-lg bg-[#1b9aaa] p-8">
                        <h2 className="text-3xl">Firnas</h2>
                        <h2 className="mt-2 text-3xl">API</h2>
                    </div>
                    <Arrow position="horizontal" />
                    <div className="ml-4 flex flex-col text-xl">
                        <p>&#123;</p>
                        <p className="ml-4"> airportName</p>
                        <p className="ml-4"> city</p>
                        <p className="ml-4"> country</p>
                        <p>&#125;</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
