const periods = document.querySelectorAll(".period");

// Gera evento click para cada agendamento:
periods.forEach(period => {
    // Captura o evento de clique no agendamento:
    period.addEventListener("click", event => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtém a "li" pai do elemento clicado:
            const item = event.target.closest("li");
            const { id } = item.dataset;

            if (id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agenamento?");

                if (isConfirm)
                    console.log("Remover!")
            }
        }
    })
})