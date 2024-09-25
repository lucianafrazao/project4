document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = this.window.scrollY;

        if (posicaoAtual < alturaHero) {
            hideHeaderElements();
        } else {
            showHeaderElements()
        }
    })
})

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}