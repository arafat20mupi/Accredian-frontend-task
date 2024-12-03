import { LuUserPlus2 } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";
const Refar = () => {
    return (
        <div className="relative md:mt-16   bg-slate-100 shadow-md">
            <div className="text-center text-3xl font- py-7">
                How Do I <span className="text-primary">Refer?</span>
            </div>
            <div className="">
                <img className="hidden md:block" alt="" src="bg1.png" />
            </div>
            <div className=" md:absolute text-center items-center md:flex text-wrap p-0 md:p-48 md:top-20  mx-auto justify-between w-full">
                <div className="w-52 h-20 flex flex-col text-center items-center">
                    <p className="text-4xl font-bold"><LuUserPlus2 /></p>
                    <p>Submit referrals easily via our website’s referral section.</p>
                </div>
                <div className="w-52 h-20 flex flex-col text-center items-center">
                    <p className="text-xl"><TfiWrite /></p>
                    <p>Earn rewards once your referral joins an Accredian program.</p>
                </div>
                <div className="w-52 h-20 flex flex-col text-center items-center">
                    <p>Both parties receive a bonus 30 days after program enrollment.</p>
                </div>
            </div>
            <div className="flex justify-center py-3 w-full">
                <button className="btn btn-primary">Refer Now</button>
            </div>
        </div>
    );
};

export default Refar;