let check = [0, 0, 0]
let checkFinal = [0, true, true, true]
let cardState = [true, true, true];
let fire = 15

let liveReduce = () => {
    let live = parseInt($(".live").text())
    return live - 1
}
let fireChase = () => {
    const animate = document.querySelector(".fire");

    if (!cardState[0] || !cardState[1] || !cardState[2]) {
        fire += 2.5;
        animate.style.width = `${fire}vw`
    }
}

let resetAll = (cards) => {
    cards.forEach((card) => {
        card.style.animation = `0.7s flip2 linear`;
        $(".cards img").hide();
        $(".cards p").show();
        $(card).removeClass("point");
    });
}
// let shuffleCards = () => {
//     const container = document.querySelector(".game-cont");
//     const cards = Array.from(document.querySelectorAll(".cards"));
//     const numberOfCards = cards.length;

//     // Randomly position each card within the container
//     cards.forEach(card => {
//         const x = Math.floor(Math.random() * (container.offsetWidth - card.offsetWidth));
//         const y = Math.floor(Math.random() * (container.offsetHeight - card.offsetHeight));
//         card.style.transform = `translate(${x}px, ${y}px)`;
//         card.style.transition = 'transform 1s';
//     });

//     }

let restart = () => {
    $(".live").text("4")
    const example1 = document.querySelector(".examples2");
    const example2 = document.querySelector(".examples1");
    const example3 = document.querySelector(".examples3");
    const animate = document.querySelector(".fire");
    const animate2 = document.querySelector(".run");
    const animate3 = document.querySelector(".gate");
    example1.style.cssText = ``;
    example2.style.cssText = ``;
    example3.style.cssText = ``;
    animate.style.width = `15vw`
    animate3.style.height = `100%`
     animate2.style.height = `98%`
    animate2.style.transform = `translateX(180px)`;
    $(".first").removeClass("gotit");
    $(".second").removeClass("gotit");
    $(".third").removeClass("gotit");
    $(".cards").removeClass("gotit");
    $(".keep").slideUp();
    fire = 15
    check = [0, 0, 0]
    checkFinal = [0, true, true, true]
    cardState = [true, true, true];
}

let check1 = () => {
    const animate = document.querySelector(".fire");
    const animate2 = document.querySelector(".run");
    const animate3 = document.querySelector(".gate");
    const example1 = document.querySelector(".examples2");
    const example2 = document.querySelector(".examples1");
    const example3 = document.querySelector(".examples3");
    let live = parseInt($(".live").text())
    if (check[0] === 3) {
        $(".first").addClass("gotit");
        checkFinal[1] = false;
        checkFinal[0]++
    } else if (check[1] === 3) {
        $(".second").addClass("gotit");
        checkFinal[2] = false;
        checkFinal[0]++
    } else if (check[2] === 3) {
        $(".third").addClass("gotit");
        checkFinal[3] = false;
        checkFinal[0]++
    }
    setTimeout(function () {
        if (check[0] === 3) {
            $(".first").removeClass("gotit");
            example1.style.cssText = `
            animation: 0.7s flip linear forwards; 
            box-shadow: 0 0 20px red; 
            opacity: 0.7;`;

        } else if (check[1] === 3) {
            $(".second").removeClass("gotit");
            example2.style.cssText = `
            animation: 0.7s flip linear forwards; 
            box-shadow: 0 0 20px red; 
            opacity: 0.7;`;

        } else if (check[2] === 3) {
            $(".third").removeClass("gotit");
            example3.style.cssText = `
            animation: 0.7s flip linear forwards; 
            box-shadow: 0 0 20px red; 
            opacity: 0.7;`;
        }
        if (checkFinal[0] === 2) {
          animate3.style.height = `1%`
        }else if (checkFinal[0] === 3) {
            animate.style.width = `29vw`
            animate2.style.transform = `translateX(550px)`;
            animate3.style.height = `100%`
            $(".cards").addClass("gotit");
            $(".cards img").hide();
            $(".cards p").show();
            $(".keep").slideDown();
            $(".state").text("Escaped, so you won");
        }
        if (live === 0) {
            animate.style.width = `29vw`
            animate2.style.height = `3%`
            animate3.style.height = `100%`
            $(".cards").addClass("gotit");
            $(".cards img").hide();
            $(".cards p").show();
            $(".keep").slideDown();
            $(".state").html("Died, so you lost");
        }
    }, 1000);
}


window.onload = () => {
    $(".cards").click(function () {
        let index = $(".cards").index(this);
        const flipAll = document.querySelectorAll(".cards");
        const animate2 = document.querySelector(".run");

        const flip = this;
        switch (index) {
            case 0:
                if (cardState[0]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [true, false, false];
                    check[1] = 0
                    check[2] = 0
                    if (checkFinal[1]) {
                        check[0]++
                    }

                } else {
                    console.log(10000)
                    $(".live").text(liveReduce())
                    $(flip).removeClass("point");
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;
            case 1:
                if (cardState[1]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [false, true, false];
                    check[0] = 0
                    check[2] = 0
                    check[1]++
                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;
            case 2:
                if (cardState[2]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [false, false, true];
                    check[1] = 0
                    check[0] = 0
                    if (checkFinal[3]) {
                        check[2]++
                    }
                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;
            case 3:
                if (cardState[0]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [true, false, false];
                    check[1] = 0
                    check[2] = 0
                    if (checkFinal[1]) {
                        check[0]++
                    }

                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;
            case 4:
                if (cardState[1]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [false, true, false];
                    check[0] = 0
                    check[2] = 0
                    if (checkFinal[2]) {
                        check[1]++
                    }
                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }

                break;
            case 5:
                if (cardState[1]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [false, true, false];
                    check[0] = 0
                    check[2] = 0
                    if (checkFinal[2]) {
                        check[1]++
                    }

                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;
            case 6:
                if (cardState[2]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [false, false, true];
                    check[1] = 0
                    check[0] = 0
                    if (checkFinal[3]) {
                        check[2]++
                    }
                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;
            case 7:
                if (cardState[0]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [true, false, false];
                    check[1] = 0
                    check[2] = 0
                    if (checkFinal[1]) {
                        check[0]++
                    }

                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;

            case 8:
                if (cardState[2]) {
                    flip.style.animation = `0.7s flip linear forwards`;
                    animate2.style.transform = `translateX(290px)`;
                    $(flip).addClass("point");
                    $(".cards img").eq(index).fadeIn(2500);
                    $(".cards p").eq(index).hide();
                    cardState = [false, false, true];
                    check[1] = 0
                    check[0] = 0
                    if (checkFinal[3]) {
                        check[2]++
                    }

                } else {
                    $(".live").text(liveReduce())
                    fireChase()
                    resetAll(flipAll);
                    cardState = [true, true, true];
                    check[1] = 0
                    check[0] = 0
                    check[2] = 0
                }
                break;
        }
        console.log(check)
        check1()
    })
    $(".again").click(function () {
        const flipAll = document.querySelectorAll(".cards");
        restart()
        resetAll(flipAll)
    })
}