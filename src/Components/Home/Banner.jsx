
const Banner = () => {
    return (
        <div className="container  mx-auto">
            <div className="w-full items-center flex justify-center text-center">
                <div className="max-w-[790px] text-2xl bg-slate-100 px-6 py-3 rounded-3xl w-full justify-between flex">
                    <button >Refer</button>
                    <button>Benefits</button>
                    <button>FAQs</button>
                    <button >Support</button>
                </div>
            </div>
            <div>
                <div  className="card mt-2 bg-[#EEF5FF] card-side  shadow-xl">
                    <div className="flex-1 px-12 w-full justify-center items-start flex flex-col">
                       <h1 className="text-7xl text-wrap font-bold">Let’s Learn  & Earn</h1>
                       <p className="text-4xl text-wrap my-9">Get a chance to win <br />
                       up-to <span className="text-primary ">Rs. 15,000</span> </p>
                       <button className="btn btn-primary text-xl">Refer Now</button>
                     </div>
                    <figure className="flex-1">
                        <img
                            className=""
                            src="Anniversary.png"
                            alt="Movie" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;