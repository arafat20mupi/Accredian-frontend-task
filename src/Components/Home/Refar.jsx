import { LuUserPlus2 } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";
const Refar = () => {
    return (
        <div className="relative ">
            <div className="">
                <img className="" alt="" src="bg1.png" />
            </div>
            <div className=" absolute text-center items-center flex text-wrap md:p-48 top-3  mx-auto justify-between w-full">
                <div className="w-52 h-20 flex flex-col text-center items-center">
                    <LuUserPlus2 className="text-4xl font-bold" />
                    <p>Submit referrals easily via our website’s referral section.</p>
                </div>
                <div className="w-52 h-20 flex flex-col text-center items-center">
                    
                    <p>Earn rewards once your referral joins an Accredian program.</p>
                </div>
                <div className="w-52 h-20 flex flex-col text-center items-center">
                    <p>Both parties receive a bonus 30 days after program enrollment.</p>
                </div>
            </div>
        </div>
    );
};

export default Refar;