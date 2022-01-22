function minhaPromise(valor){

    return new Promise((resolve, reject)=>{
        if(valor == null)
            reject({
                status:"404 not found",
                msg: "Algo de errado não está certo!"
            });
        else
            resolve({
                status:"200 ok",
                msg:valor
            });
    });
}


minhaPromise("Design de Interfaces Web com Javascript").then(response =>{
    console.log(response.msg);
}).catch(erro =>{
    console.log(erro)
})