const searchInput = document.getElementById('search');
const exerciseList = document.getElementById('exercise-list');

// Função para exibir exercícios com base no array
function displayExercises(exercises) {
    exerciseList.innerHTML = ''; // Limpa os resultados anteriores

    exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';

        card.innerHTML = `
            <h2>${exercise.name}</h2>
            <p>${exercise.description}</p>
            <p><strong>Grupo Muscular:</strong> ${exercise.muscleGroup}</p>
            <a href="${exercise.videoLink}" target="_blank">Ver Vídeo</a>
        `;

        exerciseList.appendChild(card);
    });
}

// Função para filtrar exercícios com base na busca do usuário
function filterExercises() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredExercises = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm) ||
        exercise.muscleGroup.toLowerCase().includes(searchTerm)
    );

    displayExercises(filteredExercises);
}

// Evento para disparar a função de filtro quando o usuário digita
searchInput.addEventListener('input', filterExercises);

// Exibe todos os exercícios ao carregar a página
displayExercises(exercises);
