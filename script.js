
const animitems= document.querySelectorAll('.animator');

if (animitems.length>0){
    window.addEventListener('scroll', animOnscroll);
    function animOnscroll(params) {
        for (let index = 0; index < animitems.length; index++) {
            const animitem = animitems[index];
            const animitemHeight = animitem.offsetHeight;
            const animitemOffset = offset(animitem).top;
            const animStart = 4;
            let animitemPoint = window.innerHeight - animitemHeight / animStart;

            if (animitemHeight > window.innerHeight) {
                animitemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animitemOffset - animitemPoint) && (pageYOffset < animitemOffset + animitemHeight)){
                animitem.classList.add('_active');
            } else {
                if(!animitem.classList.contains('anim-no')) {
                    animitem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}