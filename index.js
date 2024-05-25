
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { videos: ["./0.mp4", "./2.mp4", "./3.mp4"] });

gsap.to(".fleftelem", {
    scrollTrigger: {
        trigger: ".fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1              //jese jese croll kru vese vese animate ho....naki jese hi point point pe pohche vese hi turant animate ho jaye point point pe
    },
    y: "-300%",
    ease: Power1,
});


//hamko left part (text vala area jo scroll(animate) ho rha hai) uski progress pata krni hai (mtlb vo kitna upr jaa juka hai uska value chahiye) taki ham right part mtlb images ko uske hisaab se animate kr paye

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
    style: 5,
    // debug: true,
    config: { "a": { "value": 0.69, "range": [0, 30] }, "b": { "value": -0.48, "range": [-1, 1] }, "zindex": { "value": "1", "range": [-9999999, 9999999] }, "aspect": { "value": 0.6521107751665847 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    slideStyle: (setScroll) => {
        // console.log("hello");
        sections.forEach(function (section, index) {
            // console.log("hello")
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    // console.log("Hello")
                    setScroll(prog.progress + index);
                },
            });
        });
    },
});