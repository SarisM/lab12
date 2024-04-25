document.addEventListener('DOMContentLoaded', () => {
	// Obtener el ID del personaje de la URL
	const urlParams = new URLSearchParams(window.location.search)
	const valorantId = urlParams.get('valorantId')
	console.log(valorantId)
	fetch(`https://valorant-api.com/v1/agents/${valorantId}`)
		.then(res => res.json())
		.then(({ data }) => {
			const { displayIcon, displayName, description, role, uuid } = data
			const $container = document.querySelector('.container')
			if (uuid === valorantId) {
				const card = document.createElement('div')
				card.classList.add('card')
				const img = document.createElement('img')
				img.src = displayIcon
				img.alt = displayName

				const div = document.createElement('div')
				const title = document.createElement('h3')
				title.textContent = displayName
				const p = document.createElement('p')
				p.textContent = description
				const roleTitle = document.createElement('h4')
				roleTitle.textContent = 'Role:'
				const roleDescription = document.createElement('p')
				roleDescription.textContent = role.description

				div.appendChild(title)
				div.appendChild(p)
				div.appendChild(roleTitle)
				div.appendChild(roleDescription)
				console.log(role.description)

				card.appendChild(img)
				card.appendChild(div)

				$container.appendChild(card)
			}
		})
})
