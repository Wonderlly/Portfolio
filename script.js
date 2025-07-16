addEventListener('DOMContentLoaded', function() {
    if (this.localStorage.getItem('tema') === 'dark') {
        this.document.body.classList.add('dark-mode')
    }
    
    trocaricon()
})

function trocaricon() {
    const icone = document.getElementById('icone')

    if (document.body.classList.contains('dark-mode')) {
        icone.classList.remove('uil-moon')
        icone.classList.add('uil-sun')
    } else {
        icone.classList.remove('uil-sun')
        icone.classList.add('uil-moon')
    }
}

function toggletema() {
    document.body.classList.toggle('dark-mode')

    trocaricon()

    document.body.classList.contains('dark-mode') ? localStorage.setItem('tema', 'dark') : localStorage.setItem('tema', 'light')
}
