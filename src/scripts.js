document.addEventListener('DOMContentLoaded', () => {
    const asesores = [
        { nombre: 'Asesor 1', clientesAsignados: 50, clientesTrabajados: 25, desembolsos: 10 },
        { nombre: 'Asesor 2', clientesAsignados: 60, clientesTrabajados: 40, desembolsos: 20 },
        { nombre: 'Asesor 3', clientesAsignados: 70, clientesTrabajados: 50, desembolsos: 30 }
    ];

    const supervisoresView = document.getElementById('supervisores-view');

    asesores.forEach(asesor => {
        const card = document.createElement('div');
        card.className = 'card';

        const asesorInfo = `
            <h5>${asesor.nombre}</h5>
            <p>Clientes Asignados: ${asesor.clientesAsignados}</p>
            <p>Clientes Trabajados: ${asesor.clientesTrabajados}</p>
            <p>Desembolsos: ${asesor.desembolsos}</p>
        `;

        const progreso = (asesor.clientesTrabajados / asesor.clientesAsignados) * 100;
        let progressBarClass = 'success';

        if (progreso < 50) {
            progressBarClass = 'danger';
        } else if (progreso < 75) {
            progressBarClass = 'warning';
        }

        const progressBar = `
            <div class="progress-bar">
                <div class="progress-bar-inner ${progressBarClass}" style="width: ${progreso}%;">
                    ${Math.round(progreso)}%
                </div>
            </div>
        `;

        card.innerHTML = asesorInfo + progressBar;
        supervisoresView.appendChild(card);
    });
});
