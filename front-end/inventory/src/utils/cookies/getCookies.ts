import Cookies from 'js-cookie';

const getCookies = (cookiename:any)=>{
    return Cookies.get(cookiename)
}

export default getCookies;
