import { Request, Response } from 'express';
import nodemailer from 'nodemailer'


export const contato = async (req: Request, res: Response) => {
    //Passo um configurar o transporter
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "c942cd38bb57a7",
            pass: "24bffd6c3d34c5"
        }
    });


    //Passo dois configurar a mensagem

    const message = {
        from: 'nao-responda.italo@gmail.com',
        to: 'italobrandao.contato@gmail.com',
        replayTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email,
    }

    //Passo tres manda a mensagem

    const info = await transport.sendMail(message);

    console.log(info)


    res.json({sucess: true});
}