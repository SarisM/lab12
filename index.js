const $container = document.querySelector('.container')

fetch('https://valorant-api.com/v1/agents')
	.then(res => res.json())
	.then(({ data }) => {
		data.forEach(({ displayIcon, displayName, description, uuid }) => {
			const card = document.createElement('div')
			card.classList.add('card')
			const img = document.createElement('img')
			img.src = displayIcon
			img.alt = displayName
			const title = document.createElement('h3')
			title.textContent = displayName
			const p = document.createElement('p')
			p.textContent = description
			const btn = document.createElement('button')
			btn.textContent = 'Ver más'
			btn.addEventListener('click', () => {
				// Redirigir a la página de detalles del personaje con el ID como parámetro
				window.location.href = `personaje.html?valorantId=${encodeURIComponent(uuid)}`
			})
			const div = document.createElement('div')
			div.appendChild(title)
			div.appendChild(p)
			div.appendChild(btn)
			card.appendChild(img)
			card.appendChild(div)
			$container.appendChild(card)
		})
	})
