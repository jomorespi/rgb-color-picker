import './style.sass'

const inputs = document.querySelectorAll('input[type="range"]'),
  submit = document.querySelector('input[type="submit"]'),
  body = document.getElementById('picker__body'),
  form = document.getElementById('picker'),
  tooltip = document.querySelector('.tooltip')

const colorPicker = () => {

  inputs.forEach( input => {
  
    let name = input.name,
      cssVar = '--' + name,
      val = input.value
  
      body.style.setProperty(cssVar, val)
      window['var_'+name] = val

  } )

  submit.value = `rgb(${var_red},${var_green},${var_blue})`

}

window.addEventListener('DOMContentLoaded', colorPicker)
inputs.forEach( e => {
  e.addEventListener('input', colorPicker)
} )

form.addEventListener('submit', e => {
  e.preventDefault()
  let color = submit.value

  navigator.clipboard.writeText(color)
  tooltip.style.display = "block"
  tooltip.setAttribute('aria-hidden', 'false')
  setTimeout( () => {
    tooltip.style.display = "none"
    tooltip.setAttribute('aria-hidden', 'true')
  }, 2500 )
})
