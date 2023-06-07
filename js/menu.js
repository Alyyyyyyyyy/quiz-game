
function openMenu() {
    var x = document.getElementById('header_nav');
    var demo = window.getComputedStyle(x).getPropertyValue('display'); 
    console.log(demo);

    header_nav.style.width = "100%";
    header_nav.style.height = "500px";
    
    header_nav.style.display = "block";
    header_nav.style.position = "absolute";
    header_nav.style.paddingTop = "80px";
    
    header_nav.classList.add("bg-linear-black");

    document.getElementById("navigation").style.flexDirection = "column";
    
    // 顯示"關閉"button
    closeMenu_btn.style.display = "block";
}

function closeMenu() {
    // console.log("close!!!!");
    
    header_nav.style.width = "";
    header_nav.style.height = "";
    
    header_nav.style.display = "";
    header_nav.style.position = "initial";
    header_nav.style.paddingTop = "0";
    
    header_nav.classList.remove("bg-linear-black");

    document.getElementById("navigation").style.flexDirection = "row";
    
    // 顯示"關閉"button
    closeMenu_btn.style.display = "none";

}