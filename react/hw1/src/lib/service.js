import axios from "axios";

async function getData(n) {
	let link = 'https://jsonplaceholder.typicode.com/users/' + n;
	let {data: userN} = await axios(link);
	return await userN;
}


export default  getData;