import './style.css'
// import './code-smells/02-low-coupling'
// import './solid/01-srp'
import './solid/02-open-close-a';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`

