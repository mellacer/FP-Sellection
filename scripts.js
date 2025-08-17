document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const container = document.querySelector('.container');
    const items = container.querySelectorAll('.list .item');
    const list = container.querySelector('.list');

    let active = 0;
    const firstPosition = 0;
    const lastPosition = items.length - 1;

    nextButton.onclick = () => {
        list.style.setProperty('--calculation', 1)
        const itemOld = container.querySelector('.list .item.active');
        if (itemOld) itemOld.classList.remove('active');

        active = active + 1 > lastPosition ? 0 : active + 1;
        items[active].classList.add('active');
    };

    prevButton.onclick = () => {
        list.style.setProperty('--calculation', -1)
        const itemOld = container.querySelector('.list .item.active');
        if (itemOld) itemOld.classList.remove('active');

        active = active - 1 < firstPosition ? lastPosition : active - 1;
        items[active].classList.add('active');
    };
});
