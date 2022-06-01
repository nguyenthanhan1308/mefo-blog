
function index() {
    return (
        <div className="md:max-w-7xl max-w-xl mx-auto relative">
            <img className="border-x border-black"src="https://i.ibb.co/6mztxR5/donations.jpg" alt=""></img>
            <div style={{ fontFamily: "Valorant", bottom: "10%" }} className="absolute inset-x-1/3 lg:bottom-50 ">          
                <p className="hidden md:inline text-xl lg:text-2xl ">PLEASE DONATE FOR <br/> NEW VALORANT SKINS</p>
                <p className="text-xs sm:text-md md:text-xl animate-bounce transition ease-in-out"><span className="text-pink-600">MOMO</span>: 0978699454</p>
                <p className="text-xs sm:text-md md:text-xl animate-bounce transition ease-in-out"><span className="text-blue-600">BANK</span>: 6211000860963</p>
            </div>
        </div>
    );
}

export default index;