
const card = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);
        })
    },
    { 
        threshold: 0.5,
    }
)

card.forEach(card => {
    observer.observe(card);
})
