function validPassword(password,username){
    if(password.length<8){
      console.log(false);
    }
    if(password.includes(' ')){
      console.log(false);
    }
    if(password.includes(username)){
      console.log(false);
    }
    console.log(true)
  }
  
  validPassword(scarface123,mikehawk30)