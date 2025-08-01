// Código JavaScript para la segunda versión del plan nutricional
// Inicialización de la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    dayjs.locale('es');

    // --- DATOS COMPLETOS DEL PLAN NUTRICIONAL ---
    const planNutricional = {
        semana1: {
            desayuno: "3 huevos revueltos con 1/2 aguacate + 2 tostadas integrales con aceite. 1 vaso de leche. 1 naranja.",
            cena: "Pechuga de pollo (200g) con arroz (120g) y verduras. Queso fresco batido 0% con miel.",
            lunes: {
                mediaManana: "Bocadillo integral de pavo (80g) y 1 plátano.",
                comida: "Pasta integral (150g) con tomate y pollo (150g). Ensalada mixta. Yogur.",
                merienda: "Batido de recuperación (leche, proteína, cacao, plátano)."
            },
            martes: {
                mediaManana: "Puñado de frutos secos (30g) + yogur griego con miel.",
                comida: "Arroz integral (150g) con ternera guisada (180g) y verduras. Manzana.",
                merienda: "Bocadillo de atún (1 lata) con tomate y aguacate. Uvas."
            },
            miercoles: {
                mediaManana: "Barrita de cereal y frutos secos. Batido de leche con cacao.",
                comida: "Lentejas estofadas con verduras y pavo (150g). Pan integral. Yogur.",
                merienda: "Batido casero (yogur, fresas, avena). Tostada con crema de cacahuete."
            },
            jueves: {
                mediaManana: "Bocadillo de tortilla (2 huevos) con espinacas y queso.",
                comida: "Espaguetis a la boloñesa 'fitness' (130g pasta, 150g carne). Piña.",
                merienda: "Yogur proteico, plátano y frutos secos."
            },
            viernes: {
                mediaManana: "Batido lácteo de chocolate. Sándwich integral de jamón york.",
                comida: "Pollo al horno con patatas (300g) y zanahoria. Arroz (100g). Yogur.",
                merienda: "Bocadillo de crema de cacahuete y mermelada. Vaso de leche."
            },
            sabado: {
                mediaManana: "Batido de frutas tropicales con proteína. Galletas caseras de avena.",
                comida: "Comida libre: Fajitas de pollo caseras.",
                merienda: "Batido recuperador o pan con Nutella y leche."
            },
            domingo: {
                mediaManana: "Tostada integral con tomate y atún. Fruta.",
                comida: "Paella casera de pollo y verduras. Flan de huevo casero.",
                merienda: "Batido de leche con plátano y cacao. Galletas María."
            }
        },
        semana2: {
            desayuno: "3 huevos revueltos, 2 tostadas integrales, aguacate, leche, fruta.",
            cena: "Ternera a la plancha (200g) con patata cocida/asada (300g) y ensalada. Yogur.",
            lunes: {
                mediaManana: "Yogur bebible y barrita energética casera de avena.",
                comida: "Macarrones (150g) con atún (2 latas) y tomate. Queso fresco con miel.",
                merienda: "Batido recuperador post-basket (leche, whey, fruta)."
            },
            martes: {
                mediaManana: "2 mini bocadillos de jamón serrano. Naranja.",
                comida: "Arroz tres delicias saludable (150g arroz, 2 huevos, 150g pollo). Pera.",
                merienda: "Puñado de almendras y batido de plátano con leche."
            },
            miercoles: {
                mediaManana: "1 plátano y 2 tortitas de arroz con crema de cacahuete.",
                comida: "Espaguetis carbonara 'fit' (130g pasta, 150g pollo/pavo). Yogur.",
                merienda: "Batido proteico (leche, whey, fruta del bosque)."
            },
            jueves: {
                mediaManana: "Barrita proteica comercial y 1 manzana.",
                comida: "Bocadillo completo (baguette 120g, tortilla, pollo). Gazpacho. Yogur.",
                merienda: "Tostada integral con queso fresco batido y mermelada. Nueces."
            },
            viernes: {
                mediaManana: "Batido de avena (leche, avena, plátano). 2 huevos duros.",
                comida: "Cuscús (130g) con pollo (150g) y verduras. Flan de vainilla casero.",
                merienda: "Sandwich integral de crema de cacahuete y plátano. Vaso de leche."
            },
            sabado: {
                mediaManana: "Tostada grande de pan de centeno con aguacate y 2 huevos revueltos.",
                comida: "Libre/moderada: Comer fuera (ej. plato de pasta boloñesa).",
                merienda: "Batido de leche con helado y fruta."
            },
            domingo: {
                mediaManana: "Croissant integral con queso y pavo. Batido de proteínas.",
                comida: "Cocido ligero: Garbanzos (100g) con verduras y carne magra.",
                merienda: "Yogur griego con miel y granola."
            }
        },
        semana3: {
            desayuno: "3 huevos revueltos, 2 tostadas integrales, aguacate, leche, fruta.",
            cena: "Salmón al horno (200g) con arroz blanco (120g) y brócoli al vapor. Yogur.",
            lunes: {
                mediaManana: "Yogur natural con muesli y nueces. Plátano.",
                comida: "Espagueti (140g) con pollo (150g) al pesto casero. Kiwi.",
                merienda: "Batido post-entreno (leche, whey, plátano, cacao)."
            },
            martes: {
                mediaManana: "2 tostadas integrales con mantequilla de cacahuete y miel. Vaso de leche.",
                comida: "Pollo (180g) con curry y arroz basmati (150g). Manzana al horno.",
                merienda: "Batido de fresas (leche, fresas, yogur). 3 galletas María."
            },
            miercoles: {
                mediaManana: "Bocadillo mediano integral de atún con tomate. Mandarina.",
                comida: "Pasta rellena (150g) con salsa de queso ligera y pollo (150g).",
                merienda: "1 banana y 2 huevos duros."
            },
            jueves: {
                mediaManana: "Batido de avena y fruta. Barrita de cereal.",
                comida: "Quinoa (130g) con verduras y ternera (150g). Naranja.",
                merienda: "2 tostadas de arroz inflado con chocolate negro. Vaso de leche."
            },
            viernes: {
                mediaManana: "Bol de requesón (200g) con miel y granola. Frutos rojos.",
                comida: "Hamburguesa casera (150g) en pan integral con boniato al horno.",
                merienda: "Smoothie verde (espinaca, piña, yogur). Galletas caseras."
            },
            sabado: {
                mediaManana: "1 ración de churros (3-4) con chocolate (ocasional). Batido de proteína.",
                comida: "Libre: Salida con amigos (ej. Burrito grande de pollo).",
                merienda: "Fruta picada variada con yogur y miel."
            },
            domingo: {
                mediaManana: "Tortilla de 2 huevos con atún. Pan integral. Zumo.",
                comida: "Estofado de patatas (300g) con carne magra de cerdo (150g).",
                merienda: "Yogur griego con cacao en polvo y avena."
            }
        },
        semana4: {
            desayuno: "Huevos, tostadas, aguacate, leche, fruta.",
            cena: "Pizza casera saludable (base integral, pavo, mozzarella baja en grasa, verduras).",
            lunes: {
                mediaManana: "Leche con cacao y 2 magdalenas caseras integrales.",
                comida: "Penne a la arrabiata (140g) con pollo (150g). Ensalada. Yogur.",
                merienda: "Batido post-entreno (leche, whey, fruta)."
            },
            martes: {
                mediaManana: "Bocadillo integral de queso fresco 0% y membrillo. Manzana.",
                comida: "Arroz con pollo clásico (150g arroz, 180g contramuslos). Plátano.",
                merienda: "Batido de plátano y fresas. 2 tortitas de maíz con hummus."
            },
            miercoles: {
                mediaManana: "Yogur con frutas troceadas y avena. Almendras.",
                comida: "Garbanzos con arroz integral (100g) y sofrito. Huevo cocido.",
                merienda: "Sándwich integral de pollo a la plancha (100g)."
            },
            jueves: {
                mediaManana: "Barrita casera de dátiles y frutos secos. Batido de proteína.",
                comida: "Tallarines con gambas (150g) y verduras estilo wok.",
                merienda: "1 yogur bebible de fresa y 1 plátano."
            },
            viernes: {
                mediaManana: "2 tortas de arroz inflado con chocolate negro. Batido de proteína.",
                comida: "Ensalada completa de pasta tricolor (130g) con atún y huevo.",
                merienda: "Smoothie proteico (leche, yogur, mango). Pistachos."
            },
            sabado: {
                mediaManana: "Cereales de desayuno (ocasional) con leche. Tortilla francesa.",
                comida: "Libre: Comer fuera en familia (ej. Lasagna de carne).",
                merienda: "Batido recuperador o yogur con miel y fresas."
            },
            domingo: {
                mediaManana: "Montado de lomo adobado (80g) en pan integral. Zumo.",
                comida: "Pollo asado (200g) con boniato asado (300g). Arroz con leche casero.",
                merienda: "Frutos secos mixtos y 1 yogur de frutas."
            }
        }
    };

    // --- LÓGICA DE LA APLICACIÓN ---
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    let currentPageIndex = 0;

    function showPage(index) {
        const item = navItems[index];
        const pageId = `page-${item.dataset.page}`;
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        currentPageIndex = index;
    }

    navItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            showPage(idx);
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            const delta = e.key === 'ArrowLeft' ? -1 : 1;
            const newIndex = (currentPageIndex + delta + navItems.length) % navItems.length;
            showPage(newIndex);
            navItems[newIndex].focus();
        }
    });

    // Funciones para cálculo de semana y obtención de menú según fecha
    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return weekNo;
    }

    function getMenuForDate(date) {
        const weekOfYear = getWeekNumber(date);
        const planWeekIndex = (weekOfYear - 1) % 4;
        const planWeekKey = `semana${planWeekIndex + 1}`;
        const dayOfWeek = date.toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const weekPlan = planNutricional[planWeekKey];
        if (!weekPlan) return null;
        const dayPlan = weekPlan[dayOfWeek] || {};
        return {
            desayuno: weekPlan.desayuno,
            mediaMañana: dayPlan.mediaManana || "Descanso",
            comida: dayPlan.comida || "Descanso",
            merienda: dayPlan.merienda || "Descanso",
            cena: weekPlan.cena
        };
    }

    // --- PÁGINA DE INICIO ---
    const menuHoyContainer = document.getElementById('menu-hoy');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let comidasCompletadas = 0;
    const totalComidas = 5;

    function renderMenuHoy() {
        const menuDelDia = getMenuForDate(new Date());
        menuHoyContainer.innerHTML = '';
        if (!menuDelDia) {
            menuHoyContainer.innerHTML = '<p>No hay plan para hoy.</p>';
            return;
        }
        Object.entries(menuDelDia).forEach(([comidaKey, plato], index) => {
            const comidaNombre = comidaKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            const card = document.createElement('div');
            // Tarjeta con alineación vertical para icono y texto y sin truncar descripción
            card.className = 'bg-white rounded-xl p-4 flex items-start justify-between shadow-sm border border-gray-100';
            card.innerHTML = `
                <div class="flex items-start flex-1 mr-4">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">${getIconoComida(comidaNombre)}</div>
                    <div class="flex-1">
                        <h3 class="font-semibold">${comidaNombre}</h3>
                        <p class="text-sm text-gray-600">${plato}</p>
                    </div>
                </div>
                <button class="completar-btn w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2" data-index="${index}">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </button>
            `;
            menuHoyContainer.appendChild(card);
        });
        document.querySelectorAll('.completar-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.currentTarget.classList.toggle('bg-blue-500');
                e.currentTarget.classList.toggle('border-blue-500');
                comidasCompletadas = document.querySelectorAll('.completar-btn.bg-blue-500').length;
                updateProgressBar();
            });
        });
    }

    function getIconoComida(comida) {
        if (comida.includes('Desayuno')) return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>';
        if (comida.includes('Media Mañana')) return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/><path d="M6 11h12"/></svg>';
        if (comida.includes('Comida')) return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M3 2v7c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V2"/><path d="M5 11v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V11"/><path d="M9 22v-4h6v4"/><path d="M9 2v2"/><path d="M15 2v2"/></svg>';
        if (comida.includes('Merienda')) return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500"><path d="M15.3 3a2.4 2.4 0 0 1 3.4 3.4l-3.8 3.8-3.8-3.8a2.4 2.4 0 0 1 3.4-3.4Z"/><path d="M12 6.2 8.2 2.4a2.4 2.4 0 0 0-3.4 3.4L8.6 9.6"/><path d="m2 12 4.2 4.2a2.4 2.4 0 0 0 3.4 0L18 7.8a2.4 2.4 0 0 1 3.4 0L22 12"/><path d="m18 12 4 4a2 2 0 0 1-3 3l-4-4"/><path d="m6 12-4 4a2 2 0 0 0 3 3l4-4"/></svg>';
        if (comida.includes('Cena')) return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-500"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/><path d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path d="M12 11a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3Z"/></svg>';
        return '';
    }

    function updateProgressBar() {
        const percentage = (comidasCompletadas / totalComidas) * 100;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${Math.round(percentage)}%`;
    }

    document.getElementById('rec-agua').addEventListener('click', (e) => e.currentTarget.classList.toggle('completed'));
    document.getElementById('rec-sups').addEventListener('click', (e) => e.currentTarget.classList.toggle('completed'));

    // --- PÁGINA DE MENÚS (CALENDARIO) ---
    const calendarContainer = document.getElementById('calendar-container');
    const menuSeleccionadoContainer = document.getElementById('menu-del-dia-seleccionado');
    const hoy = new Date();
    let mesActual = hoy.getMonth();
    let anioActual = hoy.getFullYear();

    function renderCalendar(month, year) {
        calendarContainer.innerHTML = '';
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const monthName = dayjs(firstDay).format('MMMM');
        let calendarHTML = `<div class="flex justify-between items-center mb-4"><button id="prev-month" aria-label="Mes anterior" class="p-2 rounded-full hover:bg-gray-100">&lt;</button><h2 class="font-bold text-lg">${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}</h2><button id="next-month" aria-label="Mes siguiente" class="p-2 rounded-full hover:bg-gray-100">&gt;</button></div><div class="grid grid-cols-7 text-center text-xs text-gray-500 font-semibold mb-2"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span></div><div class="grid grid-cols-7 gap-1">`;
        let startingDay = firstDay.getDay();
        if (startingDay === 0) startingDay = 7;
        for (let i = 1; i < startingDay; i++) { calendarHTML += `<div></div>`; }
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === hoy.getDate() && month === hoy.getMonth() && year === hoy.getFullYear();
            const dayClass = isToday ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200';
            calendarHTML += `<button class="day-btn p-2 rounded-full text-sm ${dayClass}" data-day="${i}" aria-label="Seleccionar día ${i} de ${monthName} ${year}">${i}</button>`;
        }
        calendarHTML += `</div>`;
        calendarContainer.innerHTML = calendarHTML;
        document.getElementById('prev-month').addEventListener('click', () => {
            mesActual--;
            if (mesActual < 0) {
                mesActual = 11;
                anioActual--;
            }
            renderCalendar(mesActual, anioActual);
        });
        document.getElementById('next-month').addEventListener('click', () => {
            mesActual++;
            if (mesActual > 11) {
                mesActual = 0;
                anioActual++;
            }
            renderCalendar(mesActual, anioActual);
        });
        const dayButtons = Array.from(document.querySelectorAll('.day-btn'));
        dayButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const day = e.target.dataset.day;
                dayButtons.forEach(b => {
                    b.classList.remove('bg-blue-200');
                    if (!(parseInt(b.dataset.day) === hoy.getDate() && mesActual === hoy.getMonth() && anioActual === hoy.getFullYear())) {
                        b.classList.remove('bg-blue-500', 'text-white');
                        b.classList.add('bg-gray-100');
                    }
                });
                e.target.classList.add('bg-blue-200');
                e.target.classList.remove('bg-gray-100');
                renderMenuDelDia(day);
            });
        });

        calendarContainer.addEventListener('keydown', (e) => {
            const focused = document.activeElement;
            if (!focused.classList.contains('day-btn')) return;
            const index = dayButtons.indexOf(focused);
            let newIndex = index;
            if (e.key === 'ArrowLeft' && index > 0) newIndex = index - 1;
            else if (e.key === 'ArrowRight' && index < dayButtons.length - 1) newIndex = index + 1;
            else if (e.key === 'ArrowUp' && index - 7 >= 0) newIndex = index - 7;
            else if (e.key === 'ArrowDown' && index + 7 < dayButtons.length) newIndex = index + 7;
            else return;
            e.preventDefault();
            dayButtons[newIndex].focus();
        });
    }

    function renderMenuDelDia(day) {
        const fecha = new Date(anioActual, mesActual, day);
        const diaSemana = dayjs(fecha).format('dddd');
        menuSeleccionadoContainer.innerHTML = `<h3 class="text-lg font-semibold">Menú para el ${diaSemana}, ${day}</h3>`;
        const menu = getMenuForDate(fecha);
        if (!menu) {
            menuSeleccionadoContainer.innerHTML += '<p>No hay plan para este día.</p>';
            return;
        }
        Object.entries(menu).forEach(([comidaKey, plato]) => {
            const comidaNombre = comidaKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            const card = document.createElement('div');
            card.className = 'bg-white rounded-xl p-4 shadow-sm border border-gray-100';
            card.innerHTML = `<h4 class="font-semibold">${comidaNombre}</h4><p class="text-sm text-gray-600">${plato}</p>`;
            menuSeleccionadoContainer.appendChild(card);
        });
    }

    // --- PÁGINA DE PROGRESO ---
    const pesoData = [
        { date: '2025-07-01', weight: 85 },
        { date: '2025-07-08', weight: 85.3 },
        { date: '2025-07-15', weight: 85.8 },
        { date: '2025-07-22', weight: 86.2 }
    ];
    const ctx = document.getElementById('pesoChart').getContext('2d');
    let pesoChart;

    function renderProgreso() {
        if (pesoChart) pesoChart.destroy();
        
        const labels = pesoData.map(d => dayjs(d.date).format('DD MMM'));
        const weights = pesoData.map(d => d.weight);

        pesoChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Peso (kg)',
                    data: weights,
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: false }
                },
                plugins: { legend: { display: false } }
            }
        });
        
        const pesoActual = weights[weights.length - 1] || 0;
        const pesoAnterior = weights[weights.length - 2] || pesoActual;
        
        const alturaMetros = (document.getElementById('perfil-altura').value || 192) / 100;
        const imc = (pesoActual / (alturaMetros * alturaMetros)).toFixed(1);

        document.getElementById('progreso-peso-actual').textContent = pesoActual.toFixed(1);
        document.getElementById('progreso-imc').textContent = `IMC: ${imc}`;

        const cambioPct = ((pesoActual - pesoAnterior) / pesoAnterior) * 100;
        const cambioContainer = document.getElementById('progreso-cambio-container');
        if (weights.length > 1) {
            const colorClass = cambioPct >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
            const sign = cambioPct >= 0 ? '▲' : '▼';
            cambioContainer.innerHTML = `<span class="text-sm font-semibold ${colorClass} px-2 py-1 rounded-full">${sign} ${Math.abs(cambioPct).toFixed(1)}%</span>`;
        } else {
            cambioContainer.innerHTML = '';
        }

        // Actualiza campos relacionados con el peso en el perfil y metas
        document.getElementById('perfil-peso').value = pesoActual.toFixed(1);
        document.getElementById('meta-peso-text').textContent = `${pesoActual.toFixed(1)} / 90 kg`;
        const metaPercentage = ((pesoActual - 85) / (90 - 85)) * 100;
        document.getElementById('meta-peso-bar').style.width = `${Math.min(100, metaPercentage)}%`;

        // Actualiza el historial de peso
        renderHistoricoPesos();
    }

    // Función para mostrar el historial de pesos en la lista
    function renderHistoricoPesos() {
        const listaContainer = document.getElementById('historico-pesos-lista');
        if (!listaContainer) return;
        listaContainer.innerHTML = '';
        // Recorrer en orden inverso para mostrar el más reciente primero
        [...pesoData].reverse().forEach(entry => {
            const item = document.createElement('div');
            item.className = 'bg-gray-100 p-3 rounded-lg flex justify-between items-center';
            item.innerHTML = `
                <span class="font-medium text-gray-700">${dayjs(entry.date).format('dddd, D MMMM YYYY')}</span>
                <span class="font-bold text-gray-900">${entry.weight.toFixed(1)} kg</span>
            `;
            listaContainer.appendChild(item);
        });
    }

    // Evento para añadir un nuevo registro de peso
    document.getElementById('add-peso-btn').addEventListener('click', () => {
        const input = document.getElementById('nuevo-peso-input');
        const nuevoPeso = parseFloat(input.value);
        if (nuevoPeso && nuevoPeso > 50 && nuevoPeso < 150) {
            const todayStr = dayjs().format('YYYY-MM-DD');
            const entryForToday = pesoData.find(d => d.date === todayStr);
            if (entryForToday) {
                // Si ya hay una entrada para hoy, actualiza el valor
                entryForToday.weight = nuevoPeso;
            } else {
                // Si no existe, añade un nuevo registro
                pesoData.push({ date: todayStr, weight: nuevoPeso });
            }
            renderProgreso();
            input.value = '';
        }
    });

    // --- PÁGINA DE PERFIL ---
    const uploadPhotoInput = document.getElementById('upload-photo');
    const profilePic = document.getElementById('profile-pic');
    const saveProfileBtn = document.getElementById('save-profile-btn');

    uploadPhotoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => { profilePic.src = e.target.result; };
            reader.readAsDataURL(file);
        }
    });

    saveProfileBtn.addEventListener('click', () => {
        const nombre = document.getElementById('perfil-nombre').value;
        document.querySelector('#page-perfil h2').textContent = nombre;

        saveProfileBtn.textContent = 'Guardando...';
        saveProfileBtn.classList.add('bg-green-500');
        saveProfileBtn.classList.remove('bg-blue-500');
        setTimeout(() => {
            saveProfileBtn.textContent = 'Guardar Cambios';
            saveProfileBtn.classList.remove('bg-green-500');
            saveProfileBtn.classList.add('bg-blue-500');
        }, 2000);
    });

    // --- INICIALIZACIÓN ---
    renderMenuHoy();
    renderCalendar(mesActual, anioActual);
    renderMenuDelDia(hoy.getDate());
    renderProgreso();
});