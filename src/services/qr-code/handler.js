import qr from 'qrcode-terminal'
import chalk from 'chalk'

async function handler(err, result){
    if(err){
        console.log(chalk.red("Error na aplicação"));
        return;
    }

    const isSmall = result.type == 2;
    
    qr.generate(result.link, {small: isSmall}, (qrcode) =>{
        console.log(chalk.green("QRCODE gerado com sucesso: \n"));
        console.log(qrcode);
        
    })  
} 

export default handler