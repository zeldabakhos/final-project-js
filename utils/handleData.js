import { cardComponent } from "../components/cardComponent"
import { cardImage } from "../components/cardImage"
import { usersActions } from "../components/userActions"
import { usersData } from "../components/usersData"

export function handleData(usersArray) {
	usersArray.forEach((user) => {
		console.log(user)

        const cardArticle = cardComponent()
        cardArticle.setAttribute("userId", user.id)
		cardArticle.appendChild(cardImage(user.profileImg))
		cardArticle.appendChild(usersData(user.firstName, user.lastName))
		cardArticle.appendChild(usersActions())

		app.appendChild(cardArticle)
	})
}