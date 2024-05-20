window.onload = function() {
    document.getElementById("smple_img").style.backgroundImage = smples[0].path;
    document.getElementById("smple_p").innerHTML = smples[0].name;
    document.getElementById("smple_img").style.backgroundSize = "100% 100%";
    document.getElementById("match_number").innerHTML = match_number;
};

// detect Device type that load the project
function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // بررسی دستگاه های iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        isComputer = false;
        return;
    }
    // بررسی دستگاه های اندرویدی
    if (/android/i.test(userAgent)) {
        if (/mobile/i.test(userAgent)) {
            // موبایل اندروید
            isComputer = false;
        } else {
            // تبلت اندروید
            isComputer = false;
        }
        return;
    }
    // بررسی دستگاه های ویندوز فون
    if (/windows phone/i.test(userAgent)) {
        isComputer = false;
        return;
    }
    // بررسی ویژگی های CSS برای تشخیص دستگاه های لمسی
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    // اگر دستگاه لمسی باشد و userAgent موبایل را نشان دهد
    if (isTouchDevice) {
        if (/mobile/i.test(userAgent)) {
            isComputer = false;
        } else if (/tablet/i.test(userAgent)) {
            isComputer = false;
        }
        return;
    }
    // دستگاه دسکتاپ است
    isComputer = true;
    return;
}

// prevent the multi click on mobile device
document.addEventListener("DOMContentLoaded", function() {
    detectDevice();
    const divs = document.querySelectorAll(".table_plan");
    divs.forEach(function(div) {
        div.removeAttribute("onmousedown");
        div.removeAttribute("onmouseup");
        div.removeAttribute("onmouseleave");
    });
});

// save setting data
function save_data() {
    document.getElementById("othello").style.background = "linear-gradient(rgb(187, 58, 155), rgb(75, 52, 155))";
    document.getElementById("game_setting").style.visibility = "hidden";
    document.getElementById("game_setting").style.display = "none";
    document.getElementById("game_table").style.visibility = "visible";
    document.getElementById("game_info").style.visibility = "visible";
}

// detect mouse down
function plan_mouse_down(selected) {
    isHolding = true;
    TimeoutFunction = setTimeout(function() {
        if (isHolding) {
            // hold action for 300ms detected
            Remove_plan(selected);
            isClickingOperation1 = false;
        }
    }, holdDuration1);
}
// detect mouse up
function plan_mouse_up(selected) {
    if (isHolding) {
        if (TimeoutFunction) {
            clearTimeout(TimeoutFunction);
        }
        isHolding = false;
        if(isClickingOperation1){
            // click action detected
            select_plan(selected);
        }
        isClickingOperation1 = true;
    }
}
// deactivate the operation when mouse leave
function plan_mouse_leave(selected) {
    if (isHolding) {
        if (TimeoutFunction) {
            clearTimeout(TimeoutFunction);
        }
        isHolding = false;
        isClickingOperation1 = true;
    }
}

// select the right panel main paterns
function select_pazzel(selected){
    if(used_plan[selected-1]) {return}
    if(selected_value == selected){
        document.getElementsByClassName("pazzel_Item")[selected-1].style.border = "2px solid transparent";
        document.getElementsByClassName("pazzel_Item")[selected-1].style.filter = "contrast(1)";
        selected_value = 0;
    }
    else{
        document.getElementsByClassName("pazzel_Item")[selected-1].style.border = "2px solid white";
        document.getElementsByClassName("pazzel_Item")[selected-1].style.filter = "contrast(3)";
        if(selected_value != 0){
            document.getElementsByClassName("pazzel_Item")[selected_value-1].style.border = "2px solid transparent";
            document.getElementsByClassName("pazzel_Item")[selected_value-1].style.filter = "contrast(1)";
        }
        selected_value = selected;
    }
}

// transfer the paterns logics
function select_plan(selected){
    // transfer the paterns on the main table
    if(selected_value != 0){
        used_plan[selected_value-1] = true;
        table_plan_pos[selected-1].rotate = 0;
        document.getElementsByClassName("table_plan")[selected-1].style.transform = "rotate(0)";
        if(table_plan_pos[selected-1].plan != 0){
            used_plan[table_plan_pos[selected-1].plan-1] = false;
            document.getElementsByClassName("pazzel_Item")[table_plan_pos[selected-1].plan-1].style.filter = "brightness(1)";
        }
        document.getElementsByClassName("table_plan")[selected-1].style.backgroundImage = plan_url[selected_value-1].url;
        document.getElementsByClassName("table_plan")[selected-1].style.backgroundSize = "100% 100%";
        document.getElementsByClassName("pazzel_Item")[selected_value-1].style.border = "2px solid transparent";
        document.getElementsByClassName("pazzel_Item")[selected_value-1].style.filter = "contrast(1)";
        document.getElementsByClassName("pazzel_Item")[selected_value-1].style.filter = "brightness(0)";
        table_plan_pos[selected-1].plan = selected_value;
        selected_value = 0;
    }
    // rotate the paterns on the main table
    else{
        table_plan_pos[selected-1].rotate = (table_plan_pos[selected-1].rotate + 1) % 4;
        document.getElementsByClassName("table_plan")[selected-1].style.transform = "rotate(" + (90 * table_plan_pos[selected-1].rotate) + "deg)";
    }
}

// remove the paterns on the main table
function Remove_plan(selected){
    if(table_plan_pos[selected-1].plan != 0){
        used_plan[table_plan_pos[selected-1].plan-1] = false;
        document.getElementsByClassName("pazzel_Item")[table_plan_pos[selected-1].plan-1].style.filter = "brightness(1)";
        table_plan_pos[selected-1].rotate = 0;
        table_plan_pos[selected-1].plan = 0;
        document.getElementsByClassName("table_plan")[selected-1].style.transform = "rotate(0)";
        document.getElementsByClassName("table_plan")[selected-1].style.backgroundImage = "";
    }
}

// validation the pattern positions
function validation(){
    if((table_plan_pos[0].plan == validation_patterns[match_number-1].plan1 && 
        table_plan_pos[0].rotate == validation_patterns[match_number-1].rotate1 &&
        table_plan_pos[1].plan == validation_patterns[match_number-1].plan2 && 
        table_plan_pos[1].rotate == validation_patterns[match_number-1].rotate2 &&
        table_plan_pos[2].plan == validation_patterns[match_number-1].plan3 && 
        table_plan_pos[2].rotate == validation_patterns[match_number-1].rotate3 &&
        table_plan_pos[3].plan == validation_patterns[match_number-1].plan4 && 
        table_plan_pos[3].rotate == validation_patterns[match_number-1].rotate4) || 
        table_plan_pos[0].plan == validation_patterns2[match_number-1].plan1 && 
        table_plan_pos[0].rotate == validation_patterns2[match_number-1].rotate1 &&
        table_plan_pos[1].plan == validation_patterns2[match_number-1].plan2 && 
        table_plan_pos[1].rotate == validation_patterns2[match_number-1].rotate2 &&
        table_plan_pos[2].plan == validation_patterns2[match_number-1].plan3 && 
        table_plan_pos[2].rotate == validation_patterns2[match_number-1].rotate3 &&
        table_plan_pos[3].plan == validation_patterns2[match_number-1].plan4 && 
        table_plan_pos[3].rotate == validation_patterns2[match_number-1].rotate4){
            
        if(match_number == 12){
            location.reload();
        }
        document.getElementById("smple_img").style.backgroundImage = smples[match_number].path;
        document.getElementById("smple_p").innerHTML = smples[match_number].name;
        document.getElementById("smple_img").style.backgroundSize = "100% 100%";
        match_number += 1;
        document.getElementById("match_number").innerHTML = match_number;
        
        //set the default value for next level
        for (let index = 1; index < 5; index++) {
            used_plan[index-1] = false;
            table_plan_pos[index-1].plan = 0;
            table_plan_pos[index-1].rotate = 0;
            document.getElementsByClassName("pazzel_Item")[index-1].style.filter = "brightness(1)";
            document.getElementsByClassName("table_plan")[index-1].style.backgroundImage = ""; 
            document.getElementsByClassName("table_plan")[index-1].style.transform = "rotate(0)";   
        }
    }
}
