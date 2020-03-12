const alleVlakken = document.querySelectorAll('.vlak');

const ripple = document.createElement('div');
ripple.classList = 'ripple';

for (let i = 0; 1 < alleVlakken.length; i++) {
    alleVlakken[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e);
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        e.target.append(ripple);

        // als er een checkbox is dan moet deze omgezet worden
        let deCB = this.getElementsByTagName('input')[0];
        deCB.checked = !deCB.checked;
    });
}