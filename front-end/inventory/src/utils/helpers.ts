export const validate = (name:string,value?:any) => {
    let pattern;
    let valid = true;

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
}