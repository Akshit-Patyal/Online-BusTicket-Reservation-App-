import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const View = () => {
const [appUsersList, setAppUsersList] = useState([]);
const dataUrl = `http://localhost:1212/bus`;
const cartDataUrl = `http://localhost:1112/cart`;
useEffect(() => {
console.log(`useEffect`);
}, []);
const submitGetAllAppUsers = (evt) => {
evt.preventDefault();
axios.get(`${dataUrl}`)
.then((response) => {
console.log(response.data);
setAppUsersList(response.data);
})
.catch(() => {
alert("Data not found.");
setAppUsersList([]);
});
}
const saveData=(article)=>{
    article.userName=localStorage.getItem("name");
    axios.post(cartDataUrl,article)
    .then((response)=>{
        alert('Added to Cart');
        
    })
    .catch((err)=>{
        alert('Sorry could not be added');
        console.log(err.response);
    });
}
return (
<div>
<div className="col-12 border border-light shadow p-3 mb-5 bg-white">
<h4 className="text-dark">Hello {localStorage.name}</h4>
<form className="form form-group form-info" onSubmit={submitGetAllAppUsers}>
<input className="form-control mt-3 btn btn-info" type="submit" value="Find All Routes" />
</form>
<div><span className="font-weight-bold"> All Bus Routes Available: </span>
{<div><table class="table table-striped">
<tbody>
<tr>
<th scope="col">S.no</th>
<th scope="col">BusId</th>
<th scope="col">From</th>
<th scope="col">To</th>
<th scope="col">Fare</th>
<th scope="col">Bus Type</th>
<th scope="col">Availability from</th>
<th scope="col">Availability till</th>
</tr>
{appUsersList.map((item, i) => (
<tr key={i}>
<th scope="row">{i+1}</th>
<td>{item.busId}</td>
<td>{item.routeFrom}</td>
<td>{item.routeTo}</td>
<td>{item.fare}</td>
<td>{item.busType}</td>
<td>{item.from.split('T')[0]}</td>
<td>{item.till.split('T')[0]}</td>
<td><button className="form-control mt-3 btn btn-info" type="submit" onClick={()=>{saveData(item)}}>add to cart</button></td>
</tr>
))}
</tbody>
</table> </div>}
</div>
</div>
</div>
);
}
export default View;
