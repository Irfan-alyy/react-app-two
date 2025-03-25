
import { useLoaderData } from "react-router-dom";
const Github = () => {
    const data=useLoaderData();
    return ( <>
    <h1>Github username: {data.name}</h1>
    <p>Github Bio: {data.bio}</p>
    <img src={data.avatar_url} alt="GitHub Profile Pic"/>

    </> );
}
 
export default Github;

export const githubLoader=async ()=>{
    const response = await fetch("https://api.github.com/users/irfan-alyy")
    return response.json();

} 