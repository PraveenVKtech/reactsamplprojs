import { useEffect, useState } from "react";
import './App.css';
import Test from "./Test";
const UserComp = () => {
    const [userData, setUserDat] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/users")
            .then(response => response.json())
            .then(data => setUserDat(data));
            console.log("Hi");

    }, [count]);
    return (
        <div>
            {count}
            <button onClick={()=> setCount(count+1)}> IncCount!</button>
            <button onClick={() => <Test value={count}/>}>Test button</button>
        <table >
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </thead>
            <tbody>
            {userData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                        <td>
                            {item.role}
                        </td>
                    </tr>


                );
            })
            }
            </tbody>
        </table>
        </div>
    )
}
export default UserComp;