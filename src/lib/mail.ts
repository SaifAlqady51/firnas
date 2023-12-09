import nodemailer from 'nodemailer'

type SendMailProps = {
    to:string,
    subject:string,
    body:string
}

const sendMail = async({to,subject,body}: SendMailProps) => {

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "saifalqady52@gmail.com",
            pass: process.env.SMTP_PASSWORD
        }
    })

    try{
        const testResult = await transport.verify();
        console.log(testResult)
    }
    catch(error){
        console.log(error)
        return;
    }

    try{
        const sendResult = await transport.sendMail({
            from: "saifalqady52@gmail.com",
            to,
            subject,
            html:body
        })
        console.log(sendResult)
    }
    catch(error){
        console.log(error)
    }
}


export default sendMail