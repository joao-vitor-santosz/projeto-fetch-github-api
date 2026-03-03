const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>👥 Seguidores: ${user.followers}</p>
                                            <p>👥 Seguindo: ${user.following}</p>    
                                        </div>
                                      </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<div class="repository-interactions">
                                                                    <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
                                                                    <div class="interactions">
                                                                        <li class="activity">🍴${repo.forks_count}</li>
                                                                        <li class="activity">⭐${repo.stargazers_count}</li>
                                                                        <li class="activity">👁️${repo.watchers_count}</li>
                                                                        <li class="activity">💻${repo.language ?? 'Não possui linguagem definida'}</li>
                                                                    </div>
                                                                </div>`)
                                                                
        
        
        
        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                        </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }