function form_unhide(){
    const loadingDiv = document.querySelector('#test_code');
    loadingDiv.style.display = 'block';

    
}






function testcode(){
    var x = document.getElementById("code").value;
    let code = "bio-test0025"
    let code2=  "PHY-02"
    let bio_test = "bio-test006"
    let hygine = "bio-test8856"
    let skeletonc = "bio-0246"
     
    let test_link = "https://forms.gle/meVDv4657uPBsyFZ9"
    let test_link2 = "https://forms.gle/njC4qxPq5fU4Ah5s7"
    let test_link3 = "https://forms.gle/FnxdZXjwbPRcNW328"
    let higine = "https://forms.gle/oaVz4xcEWvKiaoyL8"
    let skeleton = "https://forms.gle/sLnDf1R63aJ2SCNJ6"

    if (x == code) {
        window.open(test_link, "_blank");
        }else if(x===code2){
            window.open(test_link2, "_blank");
        }else if(x===bio_test) {
            window.open(test_link3, "_blank");
            }else if(x==hygine){
                window.open(higine, "_blank");
            }else if (x==skeletonc){
                window.open(skeleton, "_blank");
            }
        else {
            alert("Wrong code! Try again.")
            }
}