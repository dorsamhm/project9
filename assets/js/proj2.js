let pics = document.querySelectorAll('.drag')
// console.log(pics);
pics.forEach(function(val){
    val.addEventListener('mousedown', () => {
        val.addEventListener('mousemove', dragNdrop)
    })
    val.addEventListener('mouseup', () => {
        val.removeEventListener('mousemove', dragNdrop)
    })
})

function dragNdrop(e){
    let x = e.clientX
    let y = e.clientY
    let xT = document.getElementsByClassName('milch')[0].clientWidth
    let yT = document.getElementsByClassName('milch')[0].clientHeight
    // console.log(xT);
    // console.log(x);
    e.target.style.transform = 'translate(-50%, -50%)'
    e.target.style.top = ((y/yT)*100) + '%'
    e.target.style.left = ((x/xT)*100) + '%'
}