import NavBar from "../components/Navbar";
import img from "../assets/img/404.webp";

const Page404 = () => {
    return(
        <div >
            <NavBar/>
            <div>
                <img src={img} alt="404" style={{width: "600px", marginLeft: "auto", display: "block", marginRight: "auto"}}/>

            </div>
        </div>
    )
}

export default Page404;