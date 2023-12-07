window.onload = function () {
    Particles.init({
        // normal options
        selector: ".background",
        connectParticles: false,
        sizeVariations: 20,
        speed: 0.3,
        maxParticles: 250,
        color: ["#DA046332", "#404B6922", "#DBEDF812"],
    });
};
///// Adding Focus
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
});

const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

for (let i = 1; i <= 5; i++) {
    let radioInput = document.getElementById(`option${i}`);
    radioInput.addEventListener("change", () => {
        if (document.getElementById(`option${i}`).checked) {
            radio_value = document.getElementById(`option${i}`).value;
            console.log("Radio Value", radio_value);
            let childs = document.querySelectorAll(`.child`);
            switch (radio_value) {
                case "option1":
                    console.log("Radio Value", radio_value);

                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.remove("option2");
                    }
                    document
                        .querySelector(`.child-3`)
                        .classList.remove("grow-3");
                    document
                        .querySelector(`.child-3`)
                        .classList.remove("flex-basis-1k");
                    break;
                case "option2":
                    console.log("Radio Value", radio_value);

                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.add("option2");
                    }
                    document
                        .querySelector(`.child-3`)
                        .classList.remove("grow-3");
                    document
                        .querySelector(`.child-3`)
                        .classList.remove("flex-basis-1k");
                    break;
                case "option3":
                    console.log("Radio Value", radio_value);

                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.remove("option2");
                    }
                    document.querySelector(`.child-3`).classList.add("grow-3");
                    document
                        .querySelector(`.child-3`)
                        .classList.remove("flex-basis-1k");
                    break;

                case "option4":
                    console.log("Radio Value", radio_value);

                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.remove("option2");
                    }
                    document
                        .querySelector(`.child-3`)
                        .classList.remove("grow-3");
                    document
                        .querySelector(`.child-3`)
                        .classList.add("flex-basis-1k");
                    break;
                case "option5":
                    console.log("Radio Value", radio_value);

                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.remove("option2");
                    }
                    document
                        .querySelector(`.child-3`)
                        .classList.remove("grow-3");
                    document
                        .querySelector(`.child-3`)
                        .classList.add("flex-shrink0-1k");
                    break;

                default:
                    break;
            }
        }
    });
}
