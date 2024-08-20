function form_unhide(){
    const loadingDiv = document.querySelector('#test_code');
    loadingDiv.style.display = 'block';

    
}






function testcode(){
    var x = document.getElementById("code").value;
    let code = "bio-test0025"
    let code2=  "PHY-02"
    let test_link = "https://docs.google.com/forms/d/e/1FAIpQLSeo0rVXGy8Oc5lhWO_mXdnp6oSpP4JqTVjvtqJW_s5J2ttmgw/viewform?usp=sf_link"
    let test_link2 = "https://forms.gle/njC4qxPq5fU4Ah5s7"
    if (x == code) {
        window.open(test_link, "_blank");
        }else if(x===code2){
            window.open(test_link2, "_blank");
        }
        else {
            alert("Wrong code! Try again.")
            }
}