export const validateInput = (name?:any,value?:any) => {
    let pattern;
    let valid = true;
    let newErrors:any;
    if(typeof name === 'object'){
         newErrors = {...name};
          Object.keys(newErrors).map((i) => {

            if(newErrors[i] === '') {
                return newErrors[i] = `${i} invalid`
            } else if(newErrors[i].length > 1){

                if (i === 'email') {
                    pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                     valid = (pattern.test(newErrors[i]));
                     
                      if(!valid){
                          return newErrors[i] = "Email must be valid."
                      }

                      return newErrors[i] = ''
                  }
                  if (i === 'username') {
                      pattern = /[\w\W]{7,}/g;
                     valid = (pattern.test(newErrors[i]));

                    if(!valid ){
                      return newErrors[i] = 'Username must contain at least 7 characters.'
                    }
                    return newErrors[i] = ''
                  }
                  if (i === 'password') {
                    pattern = /[\w\W]{7,}/g;
                    valid =(pattern.test(value));

                    if(!valid){
                      return newErrors[i] = "Password must contain at least 7 characters."
                    }
                    return newErrors[i] = ''
                  }
                  // optional fields are not checked
                  if (newErrors[i] === "organizationName") return
                  if(!name) return ''

            } 
            
            })
            newErrors.valid = (Object.values(newErrors).every((v: any) => v.length < 1))

            return newErrors
    }

    /// normal form

    if (name === "email") {
        pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         valid =(pattern.test(value));
  
          if(!valid){
              return "Email must be valid.";
          }else if (!value) {
              return 'Email field is required'
          }
      }
      if (name === "username") {
          pattern = /[\w\W]{7,}/g;
         valid = (pattern.test(value));
        if(!valid ){
          return 'Username must contain at least 7 characters.'
        }else if(!value){
          return 'Username field is required'
        }
      }
      if (name === "password") {
        pattern = /[\w\W]{7,}/g;
        valid =(pattern.test(value));
  
        if(!valid){
          return "Password must contain at least 7 characters."
        }else if(!value){
          return "Password field is required."
        }
      }
      // optional fields are not checked
      if (name === "organizationName") return
      if(!name) return ''

    
}

