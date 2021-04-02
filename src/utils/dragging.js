export default {
    install(app) {
        app.directive('dragging', (el, binding) => {
            el.addEventListener('mousedown', (event) => {
                event.stopPropagation()
                const oDiv = event.target
                let disX = event.clientX - oDiv.offsetLeft
                let disY = event.clientY - oDiv.offsetTop
                document.onmousemove = (e) => {
                    let left = e.clientX - disX
                    let top = e.clientY - disY

                    oDiv.style.position = 'absolute'
                    oDiv.style.cursor = 'move'
                    oDiv.style.left = `${left}px`
                    oDiv.style.top = `${top}px`
                }
                document.onmouseup = () => {
                    document.onmousemove = null
                    document.onmouseup = null
                }
            })
        })
    }
}