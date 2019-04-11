function ao() {
    const margin = {
        top: 16,
        right: 16,
        bottom: 32,
        left: 48
    };
    const chart = d3.select('.chart-ao');
    const svg = chart.select('svg');
    let dataz;

    const setupElements = () => {
        const g = svg.select('.chart-ao-container');

        g.append('g').attr('class', 'chart-ao-container-bis');
    };

    const updateChart = (data16) => {
        const w = chart.node().offsetWidth;
        const h = 650;

        svg.attr('width', w).attr('height', h);

        const translate = `translate(${margin.left},${margin.top})`;

        const g = svg.select('.chart-ao-container');

        g.attr('transform', translate);

        const container = chart.select('.chart-ao-container-bis');

        container
            .selectAll('.circle-primero')
            .data(data16)
            .enter()
            .append('circle')
            .attr('class', 'circles circle-primero')
            .attr('r', 0)
            .attr('cy', h / 2)
            .attr('cx', w / 2)
            .transition()
            .delay((d, i) => i * 10)
            .duration(500)
            .ease(d3.easeLinear)
            .attr('r', (d) => d.radius * 1.25)
            .attr('cy', (d) => d.cy)
            .attr('cx', (d) => d.cx);

        function scrollCircles(primero, segundo) {
            let year = new RegExp(`20[${primero}-${primero}][${segundo}-${segundo}]`, 'g');
            const data = dataz.filter((d) => String(d.year).match(year));
            const circles = container
                .selectAll(`.circle-${primero}-${segundo}`)
                .data(data);

            circles
                .enter()
                .append('circle')
                .attr('class', `circles circle-${primero}-${segundo}`)
                .attr('r', 0)
                .attr('cy', h / 2)
                .attr('cx', w / 2)
                .transition()
                .duration(500)
                .attr('r', (d) => d.radius * 1.25)
                .attr('cy', (d) => d.cy)
                .attr('cx', (d) => d.cx);
        }

        function aoColor() {
            d3.csv('csv/ao-color.csv', (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    dataz = data;

                    const container = chart.select('.chart-ao-container-bis');

                    d3.select('.chart-ao')
                        .style('background-color', 'var(--white)');

                    container
                        .selectAll('.circles')
                        .remove()
                        .exit()
                        .data(dataz)
                        .enter()
                        .append('circle')
                        .attr('class', 'circles-color')
                        .attr('r', 0)
                        .attr('cy', h / 2)
                        .attr('cx', w / 2)
                        .transition()
                        .delay((d, i) => i * 1)
                        .duration(200)
                        .ease(d3.easeLinear)
                        .attr('r', (d) => d.radius * 1.25)
                        .attr('cy', (d) => d.cy)
                        .attr('cx', (d) => d.cx)
                        .attr('fill', (d) => d.fill);
                }
            });
        }

        const scrolama = () => {
            let container = document.querySelector('#scroll');
            let steps = container.querySelectorAll('.scroll-ao');
            // initialize the scrollama
            let scroller = scrollama();
            // scrollama event handlers
            const handleStepEnter = (response) => {
                // response = { element, direction, index }
                if (
                    response.index === 1 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(0, 8);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 2 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(0, 9);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 3 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 0);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 4 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 1);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 5 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 2);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 6 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 3);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 7 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 4);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 8 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 5);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 9 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 6);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 10 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 7);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 11 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    scrollCircles(1, 8);
                    response.element.classList.add('scrollaunch');
                } else if (
                    response.index === 12 &&
                    !response.element.classList.contains('scrollaunch')
                ) {
                    aototal();
                    response.element.classList.add('scrollaunch');
                }
            };

            function init() {
                scroller
                    .setup({
                        step: '.scroll-ao',
                        debug: false,
                        offset: 0.33
                    })
                    .onStepEnter(handleStepEnter);
                // setup resize event
                window.addEventListener('resize', scroller.resize);
            }
            // kick things off
            init();
        };

        scrolama();
    };

    /*const resize = () => {
        updateChart(dataz);
    };*/

    const loadData = () => {
        d3.csv('csv/ao.csv', (error, data) => {
            if (error) {
                console.log(error);
            } else {
                dataz = data;
                let year = new RegExp('20[0-0][7-7]', 'g');
                const data16 = dataz.filter((d) => String(d.year).match(year));

                setupElements();
                updateChart(data16);
            }
        });
    };

    /*    window.addEventListener('resize', resize);*/

    loadData();
}

ao();

function aototal() {
    const margin = {
        top: 16,
        right: 16,
        bottom: 32,
        left: 48
    };
    const chart = d3.select('.chart-ao-color');
    const svg = chart.select('svg');
    let dataz;

    const setupElements = () => {
        const g = svg.select('.chart-ao-color-container');

        g.append('g').attr('class', 'chart-ao-color-container-bis');
    };

    const updateChart = (data16) => {
        const w = chart.node().offsetWidth;
        const h = 650;

        svg.attr('width', w).attr('height', h);

        const translate = `translate(${margin.left},${margin.top})`;

        const g = svg.select('.chart-ao-color-container');

        g.attr('transform', translate);

        const container = chart.select('.chart-ao-color-container-bis');

        container
                                .selectAll('.circles')
                                .remove()
                                .exit()
                                .data(dataz)
                                .enter()
                                .append('circle')
                                .attr('class', 'circles-color')
                                .attr('r', 0)
                                .attr('cy', h / 2)
                                .attr('cx', w / 2)
                                .transition()
                                .delay((d, i) => i * 1)
                                .duration(200)
                                .ease(d3.easeLinear)
                                .attr('r', (d) => d.radius * 1.25)
                                .attr('cy', (d) => d.cy)
                                .attr('cx', (d) => d.cx)
                                .attr('fill', (d) => d.fill);

    };

    const loadData = () => {
        d3.csv('csv/ao-color.csv', (error, data) => {
            if (error) {
                console.log(error);
            } else {
                dataz = data;

                setupElements();
                updateChart(dataz);
            }
        });
    };

    loadData();
}
