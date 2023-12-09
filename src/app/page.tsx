import NavBar from "@/components/navbar";
import sendMail from "@/lib/mail";
import Image from "next/image";

export default function Home() {

    //testing email
    const send = async() =>{
        "use server"
        await sendMail({to:"saifalqady52@gmail.com", subject:"Test Mail",body: `<h1>hello world</h1>`})
    }
    return (
        <main className=" align-center z-0 flex h-screen  flex-col bg-gradient-to-r from-cyan-200  to-blue-200 ">
            <form >
                <button formAction={send}>Test</button>
            </form>

        </main>
    );
}
