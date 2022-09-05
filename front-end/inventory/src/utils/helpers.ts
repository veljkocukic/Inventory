export const validateInput = (name?:any,value?:any) => {
    let pattern;
    let valid = true;
    let newErrors:any;

    // check object payload before submit
    if(typeof name === 'object'){
         newErrors = {...name};
          Object.keys(newErrors).map((i) => {

            switch (i) {
              case 'email':
                pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                valid = (pattern.test(newErrors[i]));          
                 if(!valid) return newErrors[i] = "Email must be valid."

                 return newErrors[i] = ''

              case 'username':
                pattern = /[\w\W]{7,}/g;
                valid = (pattern.test(newErrors[i]));
                if(!valid )return newErrors[i] = 'Username must contain at least 7 characters.'

               return newErrors[i] = ''

              case 'password':
                pattern = /[\w\W]{7,}/g;
                valid =(pattern.test(value));
                if(!valid || !newErrors[i]) return newErrors[i] = "Password must contain at least 7 characters."

                return newErrors[i] = ''

              default:
                break;
            }          
            })
            // IF there is any error
            console.log(newErrors)
            newErrors.valid = (Object.values(newErrors).every((v: any) => v.length < 1))
            return newErrors
    }

    /// validate in real time with blur/focus
    switch (name) {
      case "email":
        pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        valid =(pattern.test(value));
 
         if(!valid) return "Email must be valid.";
        break;

        case 'username':
          pattern = /[\w\W]{7,}/g;
          valid = (pattern.test(value));
         if(!valid ) return 'Username must contain at least 7 characters.'
        break;
        case 'password':
        pattern = /[\w\W]{7,}/g;
        valid =(pattern.test(value));
  
        if(!valid) return "Password must contain at least 7 characters."  
        break;
        // don't check these case
        case 'organizationName':
          return;

      default:
        break;
    }
}

