import MainCarousel from "./MainCarousel"
import ShoppingList from "../home/ShoppingList"

export default function Home(){
    return(
        <div className="home">
            <MainCarousel/>
            <ShoppingList/>
        </div>
    )
}