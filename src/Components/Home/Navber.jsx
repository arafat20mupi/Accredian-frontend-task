import { NavLink } from 'react-router-dom';
const Navber = () => {
    return (
        <div className="navbar container mx-auto bg-base-100">
            <div className="flex-1 ">
                <img src="logo.png" className="w-32" alt="" />
                <ul className="menu ml-4 menu-horizontal ">
                    <li>
                        <details>
                            <summary className="bg-primary text-white font-medium">Courses</summary>
                            <ul className=" bg-base-100 rounded-t-none  p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="hidden md:block space-x-4">
                <NavLink className={'btn'}>Refer & Earn</NavLink>
                <NavLink className={'btn'}>Resources</NavLink>
                <NavLink className={'btn'}>About us</NavLink>
                <NavLink className={'btn'}>Login</NavLink>
                <NavLink className={'btn btn-primary'}>Try for free</NavLink>
            </div>
        </div>
    );
};

export default Navber;