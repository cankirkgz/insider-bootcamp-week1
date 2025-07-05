document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const episodeCard = this.closest('.episode-card');
            
            const isFavorite = episodeCard.classList.contains('favorite');
            
            if (isFavorite) {
                episodeCard.classList.remove('favorite');
                this.textContent = 'Favorilere Ekle';
            } else {
                episodeCard.classList.add('favorite');
                this.textContent = 'Favoriden Çıkar';
                
                episodeCard.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    episodeCard.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
});