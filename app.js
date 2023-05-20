let main = 'main.jpg';

let leo = 'leo.jpg';

let mike = 'mike.jpg';

let don = 'don.jpg';

let raf = 'raf.jpg';

let s = 1;

function f1 () {
    if (s==1) {
        $('#img').attr('src', leo)
        console.log(s)
        s++
    }
    else if (s==2) {
        $('#img').attr('src', mike)
        console.log(s)
        s++
    }
    else if (s==3) {
        $('#img').attr('src', don)
        console.log(s)
        s++
    }
    else if (s==4) {
        $('#img').attr('src', raf)
        console.log(s)
        s++
    }
    else {
        $('#img').attr('src', main)
        console.log(s)
        s=1
    }
}

$('#but').click(f1)

let height = 400

let img = document.getElementById('img')
let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')

function f2() {
    height += 20
    console.log(height)
    img.setAttribute('height', height+'px')
}

but1.onclick = f2

function f3() {
    height -= 20
    console.log(height)
    img.setAttribute('height', height+'px')
}

but2.onclick = f3