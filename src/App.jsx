import Item from "./componentes/item";
import Card from "./componentes/card";
const App = () => {
    return (
        <>
            <h1> Minha aplicação DIO com React </h1>
            <ul>
                <Item> Item 1 </Item>
                <Item> Item 2 </Item>
                <Item> Item 3 </Item>

            </ul>
            <Card />
        </>
    )
}

export default App;
