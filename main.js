const getRandomStyles = () => {
    let getWidth = Math.floor(Math.random() * window.screen.availWidth)
    let getHeight = Math.floor(Math.random() * window.screen.availHeight)
    let width = Math.floor(Math.random() * 550)
    let height = Math.floor(Math.random() * 120)
    return [getWidth, getHeight, width, height]
}
const App = document.querySelector('.App')
const App2 = document.querySelector('.App2')
const App3 = document.querySelector('.App3')

function blockGenerated(numOfBlock) {
    let blocks = document.createElement('div')
    for(let i = 0; i < 28; i++) {
        let random = getRandomStyles();
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let rdm = Math.random() * 10
        let [width, height, widthP, heightP] = random

        let block = document.createElement('div')
        block.className = 'block'
        block.style.background = 'red'
        block.style.width = `${widthP - 400}px`
        block.style.height = `${heightP - 200}px`
        block.style.top = `${width * rdm / 4}px`
        block.style.left = `${height * rdm / 4}px`
        block.style.transform = `rotate(${width}deg)`
        block.style.boxShadow = `${rdm}px ${rdm}px ${rdm * 4}px ${rdm}px black`
        block.style.background = `#${randomColor}`
        blocks.append(block)
        if (numOfBlock === 1) {
            App.style.background = `#${randomColor}`
        } else if(numOfBlock === 2) {
            App2.style.background = `#${randomColor}`
        } else if(numOfBlock === 3) {
            App3.style.background = `#${randomColor}`
        }
    }

    return blocks
}

function blockGenerated2(numOfBlock) {
    let blocks = document.createElement('div')
    for(let i = 0; i < 28; i++) {
        let random = getRandomStyles();
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let rdm = Math.random() * 10
        let [width, height, widthP, heightP] = random

        let block = document.createElement('div')
        block.className = 'block'
        block.style.background = 'red'
        block.style.width = `${widthP}px`
        block.style.height = `${heightP}px`
        block.style.top = `${width - 300}px`
        block.style.left = `${height - 410}px`
        block.style.transform = `rotate(${width}deg)`
        block.style.boxShadow = `${rdm}px ${rdm}px ${rdm * 4}px ${rdm}px black`
        block.style.background = `#${randomColor}`
        blocks.append(block)
        App2.style.background = `#${randomColor}`
    }

    return blocks
}

setInterval(()=> {
    App.innerHTML = ''
    App2.innerHTML = ''
    App3.innerHTML = ''
    App.append(blockGenerated(1))
    App2.append(blockGenerated2())
    App3.append(blockGenerated(3))
}, 1000)

