import { fetchUsers } from "./utils/fetchData"
import { handleData } from "./utils/handleData"

import "./style.css"

import { modalComp } from "./components/modalComp"


app.appendChild(modalComp())
const usersArray = await fetchUsers()
// check if this is not an empty array
if (usersArray.length) handleData(usersArray)
//console.log(usersArray)

/* const imageOne = cardComponent()
imageOne.appendChild(cardImage())
imageOne.appendChild(usersData())
imageOne.appendChild(usersActions())

app.appendChild(imageOne) */

