const widthMobile=window.innerWidth>0?window.innerWidth:screen.width;function ao(){const e=16,t=48,i=d3.select(".chart-ao"),n=i.select("svg");let a;const r=r=>{const c=i.node().offsetWidth,d=650;n.attr("width",c).attr("height",d);const o=`translate(${t},${e})`;n.select(".chart-ao-container").attr("transform",o);const l=i.select(".chart-ao-container-bis");function s(e,t){let i=new RegExp(`20[${e}-${e}][${t}-${t}]`,"g");const n=a.filter(e=>String(e.year).match(i));l.selectAll(`.circle-${e}-${t}`).data(n).enter().append("circle").attr("class",`circles circle-${e}-${t}`).attr("r",0).attr("cy",e=>widthMobile>768?d/2:0).attr("cx",e=>widthMobile>768?-60:c/2).attr("fill","var(--redstep)").transition().delay((e,t)=>10*t).duration(500).ease(d3.easeLinear).attr("r",2).attr("cy",e=>widthMobile>768?e.cy:e.cy-10).attr("cx",e=>widthMobile>768?e.cx:widthMobile<=768&&widthMobile>500?e.cx-50:e.cx-240)}function x(e){d3.select(".asesinadas-numero").transition().duration(300).ease(d3.easeLinear).text(e)}(()=>{document.querySelector("#scroll").querySelectorAll(".scroll-ao");let e=scrollama();const t=e=>{0===e.index?(d3.selectAll(".circles").remove().exit(),s(0,0),x(63)):1===e.index?(s(0,1),x(113)):2===e.index?(s(0,2),x(167)):3===e.index?(s(0,3),x(238)):4===e.index?(s(0,4),x(310)):5===e.index?(s(0,5),x(367)):6===e.index?(s(0,6),x(436)):7===e.index?(s(0,7),x(507)):8===e.index?(s(0,8),x(583)):9===e.index?(s(0,9),x(639)):10===e.index?(s(1,0),x(712)):11===e.index?(s(1,1),x(773)):12===e.index?(s(1,2),x(825)):13===e.index?(s(1,3),x(879)):14===e.index?(s(1,4),x(934)):15===e.index?(s(1,5),x(994)):16===e.index?(s(1,6),s(1,7),x(1043)):17===e.index?(s(1,8),x(1094)):18===e.index?(s(1,9),x(1142)):19===e.index&&(d3.selectAll(".circles").data(a).attr("r",0).attr("cx",e=>widthMobile>768?e.cx-10:e.cx-250).attr("cy",e=>e.cy-10).attr("fill","var(--redstep)").transition().delay((e,t)=>2*t).duration(300).attr("fill","var(--white)").ease(d3.easeLinear).attr("r",e=>e.radius).attr("cy",e=>widthMobile>768?e.cy:e.cy-10).attr("cx",e=>widthMobile>768?e.cx:widthMobile<=768&&widthMobile>500?e.cx-50:e.cx-240),x(1176))};e.setup({step:".scroll-ao",debug:!1,offset:.33}).onStepEnter(t),window.addEventListener("resize",e.resize)})()};window.addEventListener("resize",()=>{r()}),d3.csv("csv/ao.csv",(e,t)=>{e?console.log(e):(a=t,n.select(".chart-ao-container").append("g").attr("class","chart-ao-container-bis"),r())})}ao();