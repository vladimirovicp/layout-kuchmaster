const casesWrapper = document.querySelector('.cases__wrapper ')
if (casesWrapper) {
    const casesMode = document.querySelectorAll('.case__mode'), casesTab = document.querySelectorAll('.cases__tab')

    casesMode[0].classList.add('active')
    casesTab[0].classList.add('active')

    casesMode.forEach((mode, index) => {
        mode.addEventListener('click', e => {
            e.preventDefault()
            changeTab(index, casesTab, casesMode)
        })
    })
}


function changeTab(tabNum, tabs, modes) {
    tabs.forEach(tab => { tab.classList.remove('active') })
    modes.forEach(tab => { tab.classList.remove('active') })
    tabs[tabNum].classList.add('active')
    modes[tabNum].classList.add('active')
}