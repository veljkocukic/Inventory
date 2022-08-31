import Cookies from 'js-cookie';

const getCookies = (cookiename:any)=>{
    console.log(Cookies.get(cookiename))
    return Cookies.get(cookiename)
}

export default getCookies;
