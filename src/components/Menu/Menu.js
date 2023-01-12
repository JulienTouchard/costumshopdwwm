import MenuButton from "./MenuButton";
import './Menu.css';
// creer une class MenuEntries qui va générer les objets 
// de mon menuContent ci-dessous :
class MenuEntries {
    constructor(text,url){
        this.text = text;
        this.url = url;
    }
    text = "";
    url = "";
}
const menuContent = [
    new MenuEntries("Home","#"),
    new MenuEntries("Costums","#"),
    new MenuEntries("Cart","#")
]
function displayMenu(){
    document.querySelector(".innerMenu").classList.toggle("dNone");
    document.querySelector(".innerMenu").classList.toggle("dFlex");
}
function Menu() {
    return (
        <div>
            <div className="logo">CostumShop</div>
            <ul className="innerMenu dNone">
                {/* Pour appeler une boucle dans mon JSX je dois utiliser 
                 des accolades. 
                 La seule boucle utilisable en JSX est la boucle array.map() :
                 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                 */
                 menuContent.map((value)=>{
                    console.dir(value);
                    // pour retourner à nouveau du JSX je doit dans ma fonction
                    // callback utiliser un return
                    return(
                       <MenuButton texte={value.text} url={value.url}></MenuButton> 
                    )
                 })
                }
            </ul>
            {/* Attention dans un event l'utilisation de parenthèses à la suite
            de ma fonction appelle cette fonction à l'ouverture du document.
            Il faudra donc les retirer */}
            <div className="burger" onClick={
                displayMenu
                }>
                <i className="fa-solid fa-bars" ></i>
            </div>
        </div>
    )
}

export default Menu;