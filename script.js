document.addEventListener("DOMContentLoaded", function () {
    animationTimeline();
});

// animation timeline
const animationTimeline = () => {
    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg",
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg",
    };

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible",
    })
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=2")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=2")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=2")
        .from(".idea-5", 0.7, ideaTextTrans)
        .to(".idea-5", 0.7, ideaTextTransLeave, "+=2")
        .from(".idea-6", 0.7, ideaTextTrans)
        .to(".idea-6", 0.7, ideaTextTransLeave, "+=2")
        .from(".idea-7", 0.7, ideaTextTrans)
        .to(".idea-7", 0.7, ideaTextTransLeave, "+=2")
        .from(".idea-8", 0.7, ideaTextTrans)
        .to(".idea-8", 0.7, ideaTextTransLeave, "+=1")
        .from(".idea-9", 0.7, ideaTextTrans)
        .to(".idea-9", 0.7, ideaTextTransLeave, "+=2")
        .from(
            ".idea-10",
            0.7,
            {
                rotationX: 15,
                rotationZ: -10,
                skewY: "-5deg",
                y: 50,
                z: 10,
                opacity: 0,
            },
            "+=1.5"
        );
};
