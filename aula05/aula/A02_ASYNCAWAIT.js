function minhaFuncao(obj){
  
    return new Promise((resolve, reject)=>{
      
      if(obj== null)
        reject({
          status:"404 not found"
        })
    else
        resolve({
          status:"200 ok",
          objeto: obj
        })
    })
    
  }
  
  const animal = {nome: "rex", idade:3}
  
async function minhaPromise(){ 
      try{
          const response = await minhaFuncao();
        
            return response;
      }
      catch(err){
          return (err.status);  
      }
  }
  
console.log(resultado);
  