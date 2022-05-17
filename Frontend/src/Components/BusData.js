import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const BusData = () => {
const [appUsersList, setAppUsersList] = useState([]);
const busUrl=`http://localhost:1212/bus`
const dataUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=87229b519983412ba54b0c374de74182`;
const localUrl= `http://localhost:2422/news`;
useEffect(() => {
console.log(`useEffect`);
}, []);
const submitGetAllAppUsers = (evt) => {
evt.preventDefault();
axios.get(`${dataUrl}`)
.then((response) => {
console.log(response.data.articles);
setAppUsersList(response.data.articles);
})
.catch(() => {
alert("Data not found.");
setAppUsersList([]);
});
}
const saveData=(article)=>{
    article.userName=localStorage.getItem("name");
    axios.post(localUrl,article)
    .then((response)=>{
        alert('Article added to favourite');
        
    })
    .catch((err)=>{
        alert('Sorry could not be added');
        console.log(err.response);
    });
}
return (
<div>
<div>
<p className="display-5 text-dark">userName : {localStorage.name}</p>
</div>
<div className="col-12 border border-light shadow p-3 mb-5 bg-white">
<p>click below to get all data</p>
<form className="form form-group form-info" onSubmit={submitGetAllAppUsers }>
<input className="form-control mt-3 btn btn-info" type="submit" value="Find All Data" />
</form>
<div><span className="font-weight-bold"> Data: </span>
{<div><table class="table table-striped">
<tbody>
<tr>
<th scope="col">S.no</th>
<th scope="col">author</th>
<th scope="col">title</th>
<th scope="col">description</th>
<th scope="col">click the url to read more</th>
<th scope="col">urlToImage</th>
</tr>
{appUsersList.map((item, i) => (
<tr key={i}>
<th scope="row">{i+1}</th>
<td>{item.author}</td>
<td>{item.title}</td>
<td>{item.description}</td>
<td><a href={item.url}>Read more</a></td>
<td> <img src={item.urlToImage} width='100px'/> </td>
<td><button className="form-control mt-3 btn btn-info" type="submit" onClick={()=>{saveData(item)}}>fav</button></td>
</tr>
))}
</tbody>
</table> </div>}
</div>
</div>
</div>
);
}
export default BusData;
