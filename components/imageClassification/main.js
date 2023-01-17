
const imgCount = 48;
let startTime = 0, endTime = 0, imageValue = [], finalImgPredictions = [];

document.querySelector("#backendDP").value = "webgl";

// this function will be triggered on change of value in dropdown.
$("#backendDP").change(async function () {
    imageValue.length = 0;
    finalImgPredictions.length = 0;
    let value = $(this).val();
    console.log("value", value);
    await tf.setBackend(value)
    console.log("backend", tf.getBackend())
    imgPrediction()
});


// this function will predict the image.
const imgPrediction = async () => {
    // Load the MobileNet model
    const model = await mobilenet.load();
    startTime = getCurrentTime()
    for (let i = 0; i < imgCount; i++) {
        let img = document.getElementById('img' + i);
        const predictions = await model.classify(img);
        imageValue.push(predictions);
        // console.log("imageValue", imageValue)
    }
    // getting final prediction of an image
    imageValue.map(element => {
        const finalPrediction = element.reduce((prev, current) => (+prev.probability > +current.probability) ? prev : current);
        finalImgPredictions.push(finalPrediction);
    });

    // assign names for an image
    finalImgPredictions.forEach(async (imgVal, imgIcr) => {
        let finalImg = document.getElementById('imgval' + imgIcr);
        finalImg.innerHTML = imgVal.className;
        // Hide spinner
        $("#spinner").hide();
        $("#spinner1").hide();
        $("#spinner2").hide();
        $("#spinner3").hide();
        $("#spinner4").hide();
        $("#spinner5").hide();
        $("#spinner6").hide();
        $("#spinner7").hide();
        $("#spinner8").hide();
        $("#spinner9").hide();
        $("#spinner10").hide();
        $("#spinner11").hide();
        $("#spinner12").hide();
        $("#spinner13").hide();
        $("#spinner14").hide();
        $("#spinner15").hide();
        $("#spinner16").hide();
        $("#spinner17").hide();
        $("#spinner18").hide();
        $("#spinner19").hide();
        $("#spinner20").hide();
        $("#spinner21").hide();
        $("#spinner22").hide();
        $("#spinner23").hide();
        $("#spinner24").hide();
        $("#spinner25").hide();
        $("#spinner26").hide();
        $("#spinner27").hide();
        $("#spinner28").hide();
        $("#spinner29").hide();
        $("#spinner30").hide();
        $("#spinner31").hide();
        $("#spinner32").hide();
        $("#spinner33").hide();
        $("#spinner34").hide();
        $("#spinner35").hide();
        $("#spinner36").hide();
        $("#spinner37").hide();
        $("#spinner38").hide();
        $("#spinner39").hide();
        $("#spinner40").hide();
        $("#spinner41").hide();
        $("#spinner42").hide();
        $("#spinner43").hide();
        $("#spinner44").hide();
        $("#spinner45").hide();
        $("#spinner46").hide();
        $("#spinner47").hide();
    })
    endTime = getCurrentTime();
    durationTime();
}

// current time.
let getCurrentTime = () => {
    if ("performance" in window == true) {
        return performance.now();
    }
    return new Data().getTime();
}

// total duration
const durationTime = async () => {
    const duration = (endTime - startTime);
    document.getElementById('durationTime').innerHTML = 'Total Duration: ' + Math.round(duration).toString() + ' ms';
}

// this function will be called by itself(IIFE)
(function init() {
    // Show spinner
    $("#spinner").show();
    $("#spinner1").show();
    $("#spinner2").show();
    $("#spinner3").show();
    $("#spinner4").show();
    $("#spinner5").show();
    $("#spinner6").show();
    $("#spinner7").show();
    $("#spinner8").show();
    $("#spinner9").show();
    $("#spinner10").show();
    $("#spinner11").show();
    $("#spinner12").show();
    $("#spinner13").show();
    $("#spinner14").show();
    $("#spinner15").show();
    $("#spinner16").show();
    $("#spinner17").show();
    $("#spinner18").show();
    $("#spinner19").show();
    $("#spinner20").show();
    $("#spinner21").show();
    $("#spinner22").show();
    $("#spinner23").show();
    $("#spinner24").show();
    $("#spinner25").show();
    $("#spinner26").show();
    $("#spinner27").show();
    $("#spinner28").show();
    $("#spinner29").show();
    $("#spinner30").show();
    $("#spinner31").show();
    $("#spinner32").show();
    $("#spinner33").show();
    $("#spinner34").show();
    $("#spinner35").show();
    $("#spinner36").show();
    $("#spinner37").show();
    $("#spinner38").show();
    $("#spinner39").show();
    $("#spinner40").show();
    $("#spinner41").show();
    $("#spinner42").show();
    $("#spinner43").show();
    $("#spinner44").show();
    $("#spinner45").show();
    $("#spinner46").show();
    $("#spinner47").show();
    let text = $("#backendDP option:selected").text();
    tf.setBackend(text.toLowerCase());
    console.log("backend", tf.getBackend())
    imgPrediction()
}())
