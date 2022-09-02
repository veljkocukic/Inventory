export const regexGenerator = (type: string, name: string, setValid:any, valid:any, setErrorMsg:any, value?: any) => {
    let pattern;

    if (type === "email") {
      pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      setValid(pattern.test(value));

      !valid && setErrorMsg("Email must be valid.");

      return pattern.test(value);
    }
    if (name === "username" && type === "text") {
      pattern = /[a-z]{7,15}/;
      setValid(pattern.test(value));
      !valid && setErrorMsg("Username must contain at least 7 characters.");

      return pattern.test(value);
    }
    if (type === "password") {
      pattern = /^([A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]{7,})*$/;
      setValid(pattern.test(value));
      !valid && setErrorMsg("Passoword must contain at least 7 characters,");

      return pattern.test(value);
    }
    if (name === "organizationName") {
      // pattern = /^d+$/;
      // setValid(pattern.test(value));
      // valid && setErrorMsg("error");
      // return pattern.test(value);
    }
  };