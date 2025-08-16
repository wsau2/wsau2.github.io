// document.addEventListener('DOMContentLoaded', () => {
//     if (window.particlesJS) {
//       const useInline = location.protocol === 'file:';
//       if (useInline) {
//         console.warn('Running from file:// — inlining particles config. To use assets/particles.json, serve over http(s).');
//         const cfg = {
//           particles: {
//             number: { value: 80, density: { enable: true, value_area: 800 } },
//             color: { value: '#ffffff' },
//             shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
//             opacity: { value: 0.5, random: false },
//             size: { value: 3, random: true },
//             line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
//             move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
//           },
//           interactivity: {
//             detect_on: 'canvas',
//             events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
//             modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
//           },
//           retina_detect: true
//         };
//         particlesJS('particles-js', cfg);
//       } else {
//         particlesJS.load('particles-js', 'assets/particles.json', () => {
//           console.log('Particles loaded');
//         });
//       }
//     } else {
//       console.error('particles.js not found. Make sure the script is included.');
//     }
//   });