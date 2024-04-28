import {Link} from "react-router-dom"

export function Warning({label,buttonname, to}){
    return<>
    <div className="py-2 text-sm flex justify-center">

        <div>{label}</div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {buttonname}
                </Link>
    </div>
    </>

}

