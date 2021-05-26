const widthMobile = window.innerWidth > 0 ? window.innerWidth : screen.width;

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

    function scrollCircles(primero, segundo) {
      let year = new RegExp(
        `20[${primero}-${primero}][${segundo}-${segundo}]`,
        'g'
      );
      const data = dataz.filter((d) => String(d.year).match(year));
      const circles = container
        .selectAll(`.circle-${primero}-${segundo}`)
        .data(data);

      circles
        .enter()
        .append('circle')
        .attr('class', `circles circle-${primero}-${segundo}`)
        .attr('r', 0)
        .attr('cy', (d) => {
          if (widthMobile > 768) {
            return h / 2;
          }
          return 0;
        })
        .attr('cx', (d) => {
          if (widthMobile > 768) {
            return -60;
          }
          return w / 2;
        })
        .attr('fill', 'var(--redstep)')
        .transition()
        .delay((d, i) => i * 10)
        .duration(500)
        .ease(d3.easeLinear)
        .attr('r', 2)
        .attr('cy', (d) => {
          if (widthMobile > 768) {
            return d.cy;
          }
          return d.cy - 10;
        })
        .attr('cx', (d) => {
          if (widthMobile > 768) {
            return d.cx;
          } else if (widthMobile <= 768 && widthMobile > 500) {
            return d.cx - 50;
          }
          return d.cx - 240;
        });
    }

    function ana() {
      d3.selectAll('.circles')
        .data(dataz)
        .attr('r', 0)
        .attr('cx', (d) => {
          if (widthMobile > 768) {
            return d.cx - 10;
          }
          return d.cx - 250;
        })
        .attr('cy', (d) => d.cy - 10)
        .attr('fill', 'var(--redstep)')
        .transition()
        .delay((d, i) => i * 2)
        .duration(300)
        .attr('fill', 'var(--white)')
        .ease(d3.easeLinear)
        .attr('r', (d) => d.radius)
        .attr('cy', (d) => {
          if (widthMobile > 768) {
            return d.cy;
          }
          return d.cy - 10;
        })
        .attr('cx', (d) => {
          if (widthMobile > 768) {
            return d.cx;
          } else if (widthMobile <= 768 && widthMobile > 500) {
            return d.cx - 50;
          }
          return d.cx - 240;
        });
    }

    function asesinadas(numero) {
      d3.select('.asesinadas-numero')
        .transition()
        .duration(300)
        .ease(d3.easeLinear)
        .text(numero);
    }

    const scrolama = () => {
      let container = document.querySelector('#scroll');
      let steps = container.querySelectorAll('.scroll-ao');
      // initialize the scrollama
      let scroller = scrollama();
      // scrollama event handlers
      const handleStepEnter = (response) => {
        // response = { element, direction, index }
        if (response.index === 0) {
          d3.selectAll('.circles')
            .remove()
            .exit();
          scrollCircles(0, 0);
          asesinadas(63);
        } else if (response.index === 1) {
          scrollCircles(0, 1);
          asesinadas(113);
        } else if (response.index === 2) {
          scrollCircles(0, 2);
          asesinadas(167);
        } else if (response.index === 3) {
          scrollCircles(0, 3);
          asesinadas(238);
        } else if (response.index === 4) {
          scrollCircles(0, 4);
          asesinadas(310);
        } else if (response.index === 5) {
          scrollCircles(0, 5);
          asesinadas(367);
        } else if (response.index === 6) {
          scrollCircles(0, 6);
          asesinadas(436);
        } else if (response.index === 7) {
          scrollCircles(0, 7);
          asesinadas(507);
        } else if (response.index === 8) {
          scrollCircles(0, 8);
          asesinadas(583);
        } else if (response.index === 9) {
          scrollCircles(0, 9);
          asesinadas(639);
        } else if (response.index === 10) {
          scrollCircles(1, 0);
          asesinadas(712);
        } else if (response.index === 11) {
          scrollCircles(1, 1);
          asesinadas(773);
        } else if (response.index === 12) {
          scrollCircles(1, 2);
          asesinadas(825);
        } else if (response.index === 13) {
          scrollCircles(1, 3);
          asesinadas(879);
        } else if (response.index === 14) {
          scrollCircles(1, 4);
          asesinadas(934);
        } else if (response.index === 15) {
          scrollCircles(1, 5);
          asesinadas(994);
        } else if (response.index === 16) {
          scrollCircles(1, 6);
          asesinadas(1043);
        } else if (response.index === 17) {
          scrollCircles(1, 7);
          asesinadas(1094);
        } else if (response.index === 18) {
          scrollCircles(1, 8);
          asesinadas(1142);
        } else if (response.index === 19) {
          scrollCircles(1, 9);
          asesinadas(1197);
        } else if (response.index === 20) {
          asesinadas(1242);
        } else if (response.index === 21) {
          ana();
          asesinadas(1256);
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


  const resize = () => {
    updateChart(dataz);
  };

  const loadData = () => {
    d3.csv('csv/ao.csv', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        dataz = data;

        setupElements();
        updateChart(dataz);
      }
    });
  };

  window.addEventListener('resize', resize);

  loadData();
}

ao();
