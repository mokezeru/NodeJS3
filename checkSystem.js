const os=require('os');
const{from} = require('rxjs');

const promise = function(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve(
                (os.cpus().length<=2)?'Processor is not supported':((os.totalmem().toExponential()<4e+9)?
                'This app needs at least 4GB RAM':'System is checked successfully!')                 
            );
        }
        else{
            reject('error');
        }
    })
};

//Using Promise ----uncomment the below
    // function checkSystem(){
    //     console.log('Checking your system...');
    //     promise().then((data)=>console.log(data))
    //              .catch((err)=>console.log(err));
    // }
    // checkSystem();
//Using Async-Await----uncomment the below
    // async function checkSystem(){
    //     console.log('Checking your system...');
    //     var promiseFunct = await promise();
    //     console.log(promiseFunct);
    // }
    // checkSystem();
//Using Observable ---comment to check other options
from(promise())
              .subscribe((data)=>console.log(data));