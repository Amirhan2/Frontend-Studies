let btn = document.getElementById('theme-button')
console.log(btn)
let link = document.getElementById('change-theme')
console.log(link)

btn.addEventListener('click',function(){ChangeTheme(); });

function ChangeTheme(){

    let lightTheme ='assets/css/style.css'
    let darkTheme ='assets/css/dark.css'

    let currTheme = link.getAttribute('href')
    let theme = ''

    if(currTheme == lightTheme){
        currTheme = darkTheme
        theme = 'dark'
    }else{
        currTheme = lightTheme
        theme = 'light'
    }

    link.setAttribute('href',currTheme)
    Save(theme)
}