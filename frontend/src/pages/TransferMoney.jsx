import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"



export const TransferMoney=()=>{
    return<>
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Transfer Money"}/>
                <Inputbox label={"Friend Name"}  placeholder={"amount in rupees 🇮🇳"}/>
                <button type="button" className=" p-2 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Transfer</button>
            </div>
        </div>
    </div>
    </>

    
}