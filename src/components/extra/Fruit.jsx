function Fruit(){
const fruit1 ="banana";
const fruit2="apple";
return(
<>
    <h1>Home</h1>
    <ul>
        <li>Orange</li>
        <li>{fruit1}</li>
        <li>{fruit2.toUpperCase()}</li>
    </ul></>
);
}
export default Fruit