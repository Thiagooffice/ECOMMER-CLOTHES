import MainCarousel from "./MainCarousel"
import ShoppingList from "../home/ShoppingList"
import Subscribe from "./Subscribe"

export default function Home(){
    return(
        <div className="home">
            <MainCarousel/>
            <ShoppingList/>
            <Subscribe/>
        </div>
    )
}