 const propiedades = [
        { name: "Villa Luminosa", type: "VENTA", price: "USD 2,450,000", rating: "4.5", location: "Polanco, Ciudad de México", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80" },
        { name: "Penthouse Horizon", type: "ALQUILER", price: "USD 12,000 / mes", rating: "5.0", location: "Santa Fe, Ciudad de México", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80" },
        { name: "Casa del Mar", type: "VENTA", price: "USD 5,800,000", rating: "4.8", location: "Punta Mita, Riviera Nayarit", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80" },
        { name: "The Glass House", type: "VENTA", price: "USD 1,850,000", rating: "4.7", location: "Tulum, Quintana Roo", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx5YbPWvb93zW9RMthikDUFL1w5wzkksFot6-RTUhJg2hKkWXtcnxxT64mvcGrdEkKjQYYGPTGmktBJE6xjx_OnxQnLnlqiZmA7rm4i1KPil7OZNYT7EAfJEVknEUj1LxqK_s4Kv6nglLisfxNg2FkFcO5ngFdrWHfjLqM_WktI-tYpn8WjHq1V_d-S0DQh-DpKwW8P8byy-DWr2AhDlmNeZG8nqwPrQ6M8kOGw_yWhhmCtFlMhb2HXJ5iA5FQEeDWaLycuR0q-ERJ" },
        { name: "Loft Industrial", type: "ALQUILER", price: "USD 4,500 / mes", rating: "4.6", location: "Roma Norte, CDMX", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIHlBEAYvrtCpbS3xdieSYWxo04Pc49lAnQvdjgFKsnrHpFGgdLw5nh4N2rv8J8vnK2IHxcn3w5R6epl1yn1BZBvghaFlqD6hfU05wsEESbuLc1bqEEL_c4THc1Kb3ee561zdfbFuEbS4wquksOQUtEb4YUlr9R1YMQgv8nDjfQtc3E0oqK7EkLUcmw9TXtdpqvmUysBrjnFKPH_auwVGaq4F0QnaQep3aQdjYKJn1GwP656REcI4Jg-417oEKtuBQtD0WY7wM9Yhl" },
        { name: "Villa Serenity", type: "VENTA", price: "USD 3,200,000", rating: "4.9", location: "Cabo San Lucas", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZLS88Nt-pREGwFK7UhsDbUdRFHToFFzzGIMzP4RvoGYfy25abnouJ8vWj9L30NJ5z9WFRtO0uFuxxyzSz8cYJ9XPSz_3VxxQFaeNddPnWtM-tCS2PLZzk3E9MBDPRSqh1zuwTchoG8uEdrnUA6AZaPQWQ_GEQGzM6OT7QzZ3zLGSL76UXpAPdSWT3lzLGOd_Rx-EfsMiEOB4m1NB1TnOSTyGWvkxsg2yx2qZNlu1vzZohN5BfG3NAkE3gcz8sA_KfFRoYpXmTuB-c" },
        { name: "Penthouse Vista Urbana", type: "VENTA", price: "USD 2,100,000", rating: "4.4", location: "Guadalajara, Jalisco", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80" },
        { name: "Villa del Sol", type: "VENTA", price: "USD 4,200,000", rating: "4.8", location: "Puerto Vallarta", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80" },
        { name: "Mansión Sunset Beach", type: "VENTA", price: "USD 12,500,000", rating: "5.0", location: "Cancún, Quintana Roo", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80" },
        { name: "Residencia Las Palmas", type: "VENTA", price: "USD 3,950,000", rating: "4.7", location: "Monterrey, NL", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
        { name: "Loft en Masaryk", type: "ALQUILER", price: "USD 6,800 / mes", rating: "4.9", location: "Polanco, CDMX", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" },
        { name: "Estate de la Costa", type: "VENTA", price: "USD 8,400,000", rating: "5.0", location: "Careyes, Jalisco", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" }
    ];

    let showingAll = false;

    function renderProperties(limit) {
        const grid = document.getElementById('properties-grid');
        grid.innerHTML = '';
        
        const propsToRender = propiedades.slice(0, limit);
        
        propsToRender.forEach(prop => {
            const badgeClass = prop.type === 'ALQUILER' ? 'bg-primary' : 'bg-section-dark';
            const card = document.createElement('div');
            card.className = "group reveal active";
            card.innerHTML = `
                <div class="relative aspect-[3/4] overflow-hidden mb-6">
                    <img alt="${prop.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="${prop.image}"/>
                    <span class="absolute top-4 left-4 text-white text-[10px] font-bold tracking-widest px-3 py-1 ${badgeClass}">${prop.type}</span>
                </div>
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-2xl font-display">${prop.name}</h3>
                    <div class="flex items-center text-xs text-gray-400 gap-1">
                        <span class="material-symbols-outlined text-sm">visibility</span> ${prop.rating}
                    </div>
                </div>
                <p class="text-gray-400 text-sm mb-4">${prop.location}</p>
                <p class="text-xl font-display mb-6">${prop.price}</p>
                <button class="w-full bg-primary hover:bg-[#5E4C1A] text-white py-3.5 px-6 font-montserrat font-semibold uppercase tracking-widest rounded-none shadow-luxury transition-all duration-200 ease-in-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-dark-blue flex items-center justify-center gap-2 text-xs">
                    <svg class="w-4 h-4 fill-current" viewbox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                    </svg>
                    CONSULTAR
                </button>
            `;
            grid.appendChild(card);
        });
        
        // Ensure reveal logic triggers for new elements
        if (typeof reveal === 'function') reveal();
    }

    const toggleBtn = document.getElementById('toggle-properties');
    toggleBtn.addEventListener('click', () => {
        showingAll = !showingAll;
        if (showingAll) {
            renderProperties(12);
            toggleBtn.innerText = 'MOSTRAR MENOS';
        } else {
            renderProperties(6);
            toggleBtn.innerText = 'MOSTRAR MÁS';
            // Optional: Scroll back to top of grid
            document.getElementById('properties-grid').scrollIntoView({ behavior: 'smooth' });
        }
    });

    window.onload = () => {
        renderProperties(6);
    };

    // Scroll Reveal Logic
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);

    // Interactive Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    function openMenu() {
        mobileMenu.classList.remove('hidden-menu');
        mobileMenu.classList.add('visible-menu');
        document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    }

    function closeMenu() {
        mobileMenu.classList.remove('visible-menu');
        mobileMenu.classList.add('hidden-menu');
        document.body.style.overflow = ''; // Restore scroll
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);

    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });