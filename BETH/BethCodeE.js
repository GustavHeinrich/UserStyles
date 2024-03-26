addKeyframes('DarkPlayButtonAnimatorReverse', `
    0% {
        background-color: #000;
        background-image: linear-gradient(45deg, #ffffff2e, transparent);
        border-color: #ffffff;
        color: #fff;
        border-radius: 20px;
        transform: perspective(1000px) scale(1.1) rotateX(-360deg) rotateY(10deg);
    }
    100% {
        background-color: #3dd36d;
        background-image: linear-gradient(-45deg, #00000070, transparent);
        border-color: #ffffff;
        color: #fff;
        border-radius: 10px;
    }
`);

addKeyframes('DarkPlayButtonAnimator', `
    0% {
        background-color: #3dd36d;
        background-image: linear-gradient(-45deg, #00000070, transparent);
        border-color: #ffffff;
        color: #fff;
        border-radius: 10px;
    }
    100% {
        background-color: #000;
        background-image: linear-gradient(45deg, #ffffff2e, transparent);
        border-color: #ffffff;
        color: #fff;
        border-radius: 20px;
        transform: perspective(1000px) scale(1.1) rotateX(-360deg) rotateY(10deg);
    }
`);

// Aplicando as animações aos elementos correspondentes quando a classe .dark-theme é adicionada
document.querySelector('.dark-theme .btn-common-play-game-lg').addEventListener('mouseenter', function() {
    this.style.animation = 'DarkPlayButtonAnimator 0.5s forwards';
});

document.querySelector('.dark-theme .btn-common-play-game-lg').addEventListener('mouseleave', function() {
    this.style.animation = 'DarkPlayButtonAnimatorReverse 0.5s backwards';
});
