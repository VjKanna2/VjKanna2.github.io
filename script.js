// github
document.getElementById('github').addEventListener('click', function () {
    window.open('https://github.com/VjKanna2', '_blank')
});

// linkedin
document.getElementById('linkedin').addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/vijay-kanna-2a4571248/', '_blank')
});

// mail
document.getElementById('mail').addEventListener('click', function () {
    window.location.href = 'mailto:vjkanna24@gmail.com'
});


// animation
AOS.init({
    duration: 800,
    once: true,
});

var backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// codesonbytes
document.getElementById('blur-btn').addEventListener('click', function () {
    document.body.classList.add('blurred');
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.querySelector('.modal-content').classList.remove('hide');
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.body.classList.remove('blurred');
    var modalContent = document.getElementById('modal').querySelector('.modal-content');
    modalContent.classList.add('hide');
    setTimeout(function () {
        document.getElementById('modal').style.display = 'none';
    }, 300);
});

// vaultofcodes
document.getElementById('blur-btn2').addEventListener('click', function () {
    document.body.classList.add('blurred');
    var modal2 = document.getElementById('modal2');
    modal2.style.display = 'block';
    modal2.querySelector('.modal-content').classList.remove('hide');
});

document.getElementsByClassName('close2')[0].addEventListener('click', function () {
    document.body.classList.remove('blurred');
    var modalContent2 = document.getElementById('modal2').querySelector('.modal-content');
    modalContent2.classList.add('hide');
    setTimeout(function () {
        document.getElementById('modal2').style.display = 'none';
    }, 300);
});