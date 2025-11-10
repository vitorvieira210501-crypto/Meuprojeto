
        // Pega os elementos do visualizador
        const viewer = document.getElementById('image-viewer');
        const viewerImage = document.getElementById('viewer-image');
        const closeBtn = document.getElementById('close-viewer');

        // Pega TODAS as imagens que estão dentro de um .card
        // (Adicione a classe "product-image" nas tags <img> como eu fiz acima)
        const productImages = document.querySelectorAll('.card img');

        // Adiciona um "escutador" de clique em CADA imagem de produto
        productImages.forEach(image => {
            image.addEventListener('click', () => {
                // 1. Pega o link (src) da imagem que foi clicada
                const imgSrc = image.src;
                
                // 2. Coloca esse link na imagem do visualizador
                viewerImage.src = imgSrc;
                
                // 3. Mostra o visualizador
                viewer.style.display = 'flex';
            });
        });

        // Função para fechar o visualizador
        function closeViewer() {
            viewer.style.display = 'none';
            viewerImage.src = ''; // Limpa a imagem
        }

        // Fecha ao clicar no botão 'X'
        closeBtn.addEventListener('click', closeViewer);

        // Fecha também ao clicar no fundo (na sobreposição)
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer) {
                closeViewer();
            }
        });
    