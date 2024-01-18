const casesWrapper = document.querySelector('.cases__wrapper ')
let curr = 0
if (casesWrapper) {
    const casesMode = document.querySelectorAll('.case__mode'), casesTab = document.querySelectorAll('.cases__tab'),
          casesMore = document.querySelector('.cases__more')

    changeTab(casesTab, casesMode)

    casesMode.forEach((mode, index) => {
        mode.addEventListener('click', e => {
            e.preventDefault()
            curr = index
            changeTab(casesTab, casesMode)
            casesMore.textContent = 'Ещё проекты'
        })
    })

    casesMore.addEventListener('click', e => {
        e.preventDefault()
        loadMore(casesMore)
    })
}


function changeTab(tabs, modes) {
    casesWrapper.classList.remove('full')
    tabs.forEach(tab => { tab.classList.remove('active') })
    modes.forEach(tab => { tab.classList.remove('active') })
    tabs[curr].classList.add('active')
    modes[curr].classList.add('active')
    
}

function loadMore(btn) {
    casesWrapper.classList.toggle('full')
    casesWrapper.classList.contains('full') ? btn.textContent = 'Скрыть' : btn.textContent = 'Ещё проекты'
} 