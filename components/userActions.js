import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'
import { actionButton } from './actionButton'
import './userActions.css'

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

    const buttonOne = actionButton(edit, "warning-btn", buttonOneFn)
	const buttonTwo = actionButton(trash, "danger-btn", buttonTwoFn)

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}

function buttonOneFn() {
    console.log("You clicked on the first button. Congrats?")
}

function buttonTwoFn() {
    console.log("You clicked on the second button. Congrats?")
}
