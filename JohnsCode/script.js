
// First Activep1 Function for Performance. This makes the box selected.
// p1 is in reference to performance level 1
// p2 is in reference to performance level 2
// p3 is in reference to performance level 3
// p4 is in reference to performance level 4
// This trend continues for the other columns ie. r1 is in reference to reach level 1 etc.

function activep1() {
    var performance1 = document.getElementById("p1");
    var performance2 = document.getElementById("p2");
    var performance3 = document.getElementById("p3");
    var performance4 = document.getElementById("p4");

    if (performance1.classList.contains("box")) {
        performance1.classList.remove("box");
        performance1.classList.remove("boxcolor1");
        performance1.classList.remove("boxcolor1:hover");
        performance1.classList.add("active1");
    }
    else {
        performance1.classList.remove("active1");
        performance1.classList.add("box");
        performance1.classList.add("boxcolor1");
        performance1.classList.add("boxcolor1:hover");
    }
    if (performance2.classList.contains("active2")) {
        performance2.classList.remove("active2");
        performance2.classList.add("box");
        performance2.classList.add("boxcolor2");
        performance2.classList.add("boxcolor2:hover");

    }
    if (performance3.classList.contains("active3")) {
        performance3.classList.remove("active3");
        performance3.classList.add("box");
        performance3.classList.add("boxcolor3");
        performance3.classList.add("boxcolor3:hover");

    }
    if (performance4.classList.contains("active4")) {
        performance4.classList.remove("active4");
        performance4.classList.add("box");
        performance4.classList.add("boxcolor4");
        performance4.classList.add("boxcolor4:hover");

    }
}

// Second Activep2 Function for Performance. This makes the box selected.

function activep2() {
    var performance1 = document.getElementById("p1");
    var performance2 = document.getElementById("p2");
    var performance3 = document.getElementById("p3");
    var performance4 = document.getElementById("p4");

    if (performance2.classList.contains("box")) {
        performance2.classList.remove("box");
        performance2.classList.remove("boxcolor2");
        performance2.classList.remove("boxcolor2:hover");
        performance2.classList.add("active2");
    }
    else {
        performance2.classList.remove("active2");
        performance2.classList.add("box");
        performance2.classList.add("boxcolor2");
        performance2.classList.add("boxcolor2:hover");
    }
    if (performance1.classList.contains("active1")) {
        performance1.classList.remove("active1");
        performance1.classList.add("box");
        performance1.classList.add("boxcolor1");
        performance1.classList.add("boxcolor1:hover");

    }
    if (performance3.classList.contains("active3")) {
        performance3.classList.remove("active3");
        performance3.classList.add("box");
        performance3.classList.add("boxcolor3");
        performance3.classList.add("boxcolor3:hover");

    }
    if (performance4.classList.contains("active4")) {
        performance4.classList.remove("active4");
        performance4.classList.add("box");
        performance4.classList.add("boxcolor4");
        performance4.classList.add("boxcolor4:hover");

    }
}

// Third Activep3 Function for Performance. This makes the box selected

function activep3() {
    var performance1 = document.getElementById("p1");
    var performance2 = document.getElementById("p2");
    var performance3 = document.getElementById("p3");
    var performance4 = document.getElementById("p4");

    if (performance3.classList.contains("box")) {
        performance3.classList.remove("box");
        performance3.classList.remove("boxcolor3");
        performance3.classList.remove("boxcolor3:hover");
        performance3.classList.add("active3");
    }
    else {
        performance3.classList.remove("active3");
        performance3.classList.add("box");
        performance3.classList.add("boxcolor3");
        performance3.classList.add("boxcolor3:hover");
    }
    if (performance1.classList.contains("active1")) {
        performance1.classList.remove("active1");
        performance1.classList.add("box");
        performance1.classList.add("boxcolor1");
        performance1.classList.add("boxcolor1:hover");

    }
    if (performance2.classList.contains("active2")) {
        performance2.classList.remove("active2");
        performance2.classList.add("box");
        performance2.classList.add("boxcolor2");
        performance2.classList.add("boxcolor2:hover");

    }
    if (performance4.classList.contains("active4")) {
        performance4.classList.remove("active4");
        performance4.classList.add("box");
        performance4.classList.add("boxcolor4");
        performance4.classList.add("boxcolor4:hover");

    }
}


// Fourth Activep4 Function for Performance. This makes the box selected

function activep4() {
    var performance1 = document.getElementById("p1");
    var performance2 = document.getElementById("p2");
    var performance3 = document.getElementById("p3");
    var performance4 = document.getElementById("p4");

    if (performance4.classList.contains("box")) {
        performance4.classList.remove("box");
        performance4.classList.remove("boxcolor4");
        performance4.classList.remove("boxcolor4:hover");
        performance4.classList.add("active4");
    }
    else {
        performance4.classList.remove("active4");
        performance4.classList.add("box");
        performance4.classList.add("boxcolor4");
        performance4.classList.add("boxcolor4:hover");
    }
    if (performance1.classList.contains("active1")) {
        performance1.classList.remove("active1");
        performance1.classList.add("box");
        performance1.classList.add("boxcolor1");
        performance1.classList.add("boxcolor1:hover");

    }
    if (performance2.classList.contains("active2")) {
        performance2.classList.remove("active2");
        performance2.classList.add("box");
        performance2.classList.add("boxcolor2");
        performance2.classList.add("boxcolor2:hover");

    }
    if (performance3.classList.contains("active3")) {
        performance3.classList.remove("active3");
        performance3.classList.add("box");
        performance3.classList.add("boxcolor3");
        performance3.classList.add("boxcolor3:hover");

    }
}




// First activef1 Function for Financial Impact, This makes the box selected
function activef1() {
    var financial1 = document.getElementById("f1");
    var financial2 = document.getElementById("f2");
    var financial3 = document.getElementById("f3");
    var financial4 = document.getElementById("f4");

    if (financial1.classList.contains("box")) {
        financial1.classList.remove("box");
        financial1.classList.remove("boxcolor1");
        financial1.classList.remove("boxcolor1:hover");
        financial1.classList.add("active1");
    }
    else {
        financial1.classList.remove("active1");
        financial1.classList.add("box");
        financial1.classList.add("boxcolor1");
        financial1.classList.add("boxcolor1:hover");
    }
    if (financial2.classList.contains("active2")) {
        financial2.classList.remove("active2");
        financial2.classList.add("box");
        financial2.classList.add("boxcolor2");
        financial2.classList.add("boxcolor2:hover");

    }
    if (financial3.classList.contains("active3")) {
        financial3.classList.remove("active3");
        financial3.classList.add("box");
        financial3.classList.add("boxcolor3");
        financial3.classList.add("boxcolor3:hover");

    }
    if (financial4.classList.contains("active4")) {
        financial4.classList.remove("active4");
        financial4.classList.add("box");
        financial4.classList.add("boxcolor4");
        financial4.classList.add("boxcolor4:hover");

    }
}

// Second Activef2 Function for Financial Impact. This makes the box selected

function activef2() {
    var financial1 = document.getElementById("f1");
    var financial2 = document.getElementById("f2");
    var financial3 = document.getElementById("f3");
    var financial4 = document.getElementById("f4");

    if (financial2.classList.contains("box")) {
        financial2.classList.remove("box");
        financial2.classList.remove("boxcolor2");
        financial2.classList.remove("boxcolor2:hover");
        financial2.classList.add("active2");
    }
    else {
        financial2.classList.remove("active2");
        financial2.classList.add("box");
        financial2.classList.add("boxcolor2");
        financial2.classList.add("boxcolor2:hover");
    }
    if (financial1.classList.contains("active1")) {
        financial1.classList.remove("active1");
        financial1.classList.add("box");
        financial1.classList.add("boxcolor1");
        financial1.classList.add("boxcolor1:hover");

    }
    if (financial3.classList.contains("active3")) {
        financial3.classList.remove("active3");
        financial3.classList.add("box");
        financial3.classList.add("boxcolor3");
        financial3.classList.add("boxcolor3:hover");

    }
    if (financial4.classList.contains("active4")) {
        financial4.classList.remove("active4");
        financial4.classList.add("box");
        financial4.classList.add("boxcolor4");
        financial4.classList.add("boxcolor4:hover");

    }
}

// Third Activef3 Function for Financial Impact. This makes the box selected

function activef3() {
    var financial1 = document.getElementById("f1");
    var financial2 = document.getElementById("f2");
    var financial3 = document.getElementById("f3");
    var financial4 = document.getElementById("f4");

    if (financial3.classList.contains("box")) {
        financial3.classList.remove("box");
        financial3.classList.remove("boxcolor3");
        financial3.classList.remove("boxcolor3:hover");
        financial3.classList.add("active3");
    }
    else {
        financial3.classList.remove("active3");
        financial3.classList.add("box");
        financial3.classList.add("boxcolor3");
        financial3.classList.add("boxcolor3:hover");
    }
    if (financial1.classList.contains("active1")) {
        financial1.classList.remove("active1");
        financial1.classList.add("box");
        financial1.classList.add("boxcolor1");
        financial1.classList.add("boxcolor1:hover");

    }
    if (financial2.classList.contains("active2")) {
        financial2.classList.remove("active2");
        financial2.classList.add("box");
        financial2.classList.add("boxcolor2");
        financial2.classList.add("boxcolor2:hover");

    }
    if (financial4.classList.contains("active4")) {
        financial4.classList.remove("active4");
        financial4.classList.add("box");
        financial4.classList.add("boxcolor4");
        financial4.classList.add("boxcolor4:hover");

    }
}


// Fourth Activef4 Function for Financial Impact. This makes the box selected
function activef4() {
    var financial1 = document.getElementById("f1");
    var financial2 = document.getElementById("f2");
    var financial3 = document.getElementById("f3");
    var financial4 = document.getElementById("f4");

    if (financial4.classList.contains("box")) {
        financial4.classList.remove("box");
        financial4.classList.remove("boxcolor4");
        financial4.classList.remove("boxcolor4:hover");
        financial4.classList.add("active4");
    }
    else {
        financial4.classList.remove("active4");
        financial4.classList.add("box");
        financial4.classList.add("boxcolor4");
        financial4.classList.add("boxcolor4:hover");
    }
    if (financial1.classList.contains("active1")) {
        financial1.classList.remove("active1");
        financial1.classList.add("box");
        financial1.classList.add("boxcolor1");
        financial1.classList.add("boxcolor1:hover");

    }
    if (financial2.classList.contains("active2")) {
        financial2.classList.remove("active2");
        financial2.classList.add("box");
        financial2.classList.add("boxcolor2");
        financial2.classList.add("boxcolor2:hover");

    }
    if (financial3.classList.contains("active3")) {
        financial3.classList.remove("active3");
        financial3.classList.add("box");
        financial3.classList.add("boxcolor3");
        financial3.classList.add("boxcolor3:hover");

    }
}


// First activew1 Function for work Impact. This makes the box selected
function activew1() {
    var work1 = document.getElementById("w1");
    var work2 = document.getElementById("w2");
    var work3 = document.getElementById("w3");
    var work4 = document.getElementById("w4");

    if (work1.classList.contains("box")) {
        work1.classList.remove("box");
        work1.classList.remove("boxcolor1");
        work1.classList.remove("boxcolor1:hover");
        work1.classList.add("active1");
    }
    else {
        work1.classList.remove("active1");
        work1.classList.add("box");
        work1.classList.add("boxcolor1");
        work1.classList.add("boxcolor1:hover");
    }
    if (work2.classList.contains("active2")) {
        work2.classList.remove("active2");
        work2.classList.add("box");
        work2.classList.add("boxcolor2");
        work2.classList.add("boxcolor2:hover");

    }
    if (work3.classList.contains("active3")) {
        work3.classList.remove("active3");
        work3.classList.add("box");
        work3.classList.add("boxcolor3");
        work3.classList.add("boxcolor3:hover");

    }
    if (work4.classList.contains("active4")) {
        work4.classList.remove("active4");
        work4.classList.add("box");
        work4.classList.add("boxcolor4");
        work4.classList.add("boxcolor4:hover");

    }
}

// Second activew2 Function for work Impact. This makes the box selected
function activew2() {
    var work1 = document.getElementById("w1");
    var work2 = document.getElementById("w2");
    var work3 = document.getElementById("w3");
    var work4 = document.getElementById("w4");

    if (work2.classList.contains("box")) {
        work2.classList.remove("box");
        work2.classList.remove("boxcolor2");
        work2.classList.remove("boxcolor2:hover");
        work2.classList.add("active2");
    }
    else {
        work2.classList.remove("active2");
        work2.classList.add("box");
        work2.classList.add("boxcolor2");
        work2.classList.add("boxcolor2:hover");
    }
    if (work1.classList.contains("active1")) {
        work1.classList.remove("active1");
        work1.classList.add("box");
        work1.classList.add("boxcolor1");
        work1.classList.add("boxcolor1:hover");

    }
    if (work3.classList.contains("active3")) {
        work3.classList.remove("active3");
        work3.classList.add("box");
        work3.classList.add("boxcolor3");
        work3.classList.add("boxcolor3:hover");

    }
    if (work4.classList.contains("active4")) {
        work4.classList.remove("active4");
        work4.classList.add("box");
        work4.classList.add("boxcolor4");
        work4.classList.add("boxcolor4:hover");

    }
}

// Third activew3 Function for work Impact.This makes the box selected

function activew3() {
    var work1 = document.getElementById("w1");
    var work2 = document.getElementById("w2");
    var work3 = document.getElementById("w3");
    var work4 = document.getElementById("w4");

    if (work3.classList.contains("box")) {
        work3.classList.remove("box");
        work3.classList.remove("boxcolor3");
        work3.classList.remove("boxcolor3:hover");
        work3.classList.add("active3");
    }
    else {
        work3.classList.remove("active3");
        work3.classList.add("box");
        work3.classList.add("boxcolor3");
        work3.classList.add("boxcolor3:hover");
    }
    if (work1.classList.contains("active1")) {
        work1.classList.remove("active1");
        work1.classList.add("box");
        work1.classList.add("boxcolor1");
        work1.classList.add("boxcolor1:hover");

    }
    if (work2.classList.contains("active2")) {
        work2.classList.remove("active2");
        work2.classList.add("box");
        work2.classList.add("boxcolor2");
        work2.classList.add("boxcolor2:hover");

    }
    if (work4.classList.contains("active4")) {
        work4.classList.remove("active4");
        work4.classList.add("box");
        work4.classList.add("boxcolor4");
        work4.classList.add("boxcolor4:hover");

    }
}


// Fourth activew4 Function for work Impact, This makes the box selected
function activew4() {
    var work1 = document.getElementById("w1");
    var work2 = document.getElementById("w2");
    var work3 = document.getElementById("w3");
    var work4 = document.getElementById("w4");

    if (work4.classList.contains("box")) {
        work4.classList.remove("box");
        work4.classList.remove("boxcolor4");
        work4.classList.remove("boxcolor4:hover");
        work4.classList.add("active4");
    }
    else {
        work4.classList.remove("active4");
        work4.classList.add("box");
        work4.classList.add("boxcolor4");
        work4.classList.add("boxcolor4:hover");
    }
    if (work1.classList.contains("active1")) {
        work1.classList.remove("active1");
        work1.classList.add("box");
        work1.classList.add("boxcolor1");
        work1.classList.add("boxcolor1:hover");

    }
    if (work2.classList.contains("active2")) {
        work2.classList.remove("active2");
        work2.classList.add("box");
        work2.classList.add("boxcolor2");
        work2.classList.add("boxcolor2:hover");

    }
    if (work3.classList.contains("active3")) {
        work3.classList.remove("active3");
        work3.classList.add("box");
        work3.classList.add("boxcolor3");
        work3.classList.add("boxcolor3:hover");

    }
}

// First activer1 Function for reach. This makes the box selected
function activer1() {
    var reach1 = document.getElementById("r1");
    var reach2 = document.getElementById("r2");
    var reach3 = document.getElementById("r3");
    var reach4 = document.getElementById("r4");

    if (reach1.classList.contains("box")) {
        reach1.classList.remove("box");
        reach1.classList.remove("boxcolor1");
        reach1.classList.remove("boxcolor1:hover");
        reach1.classList.add("active1");
    }
    else {
        reach1.classList.remove("active1");
        reach1.classList.add("box");
        reach1.classList.add("boxcolor1");
        reach1.classList.add("boxcolor1:hover");
    }
    if (reach2.classList.contains("active2")) {
        reach2.classList.remove("active2");
        reach2.classList.add("box");
        reach2.classList.add("boxcolor2");
        reach2.classList.add("boxcolor2:hover");

    }
    if (reach3.classList.contains("active3")) {
        reach3.classList.remove("active3");
        reach3.classList.add("box");
        reach3.classList.add("boxcolor3");
        reach3.classList.add("boxcolor3:hover");

    }
    if (reach4.classList.contains("active4")) {
        reach4.classList.remove("active4");
        reach4.classList.add("box");
        reach4.classList.add("boxcolor4");
        reach4.classList.add("boxcolor4:hover");

    }
}

// Second activer2 Function for reach. This makes the box selected
function activer2() {
    var reach1 = document.getElementById("r1");
    var reach2 = document.getElementById("r2");
    var reach3 = document.getElementById("r3");
    var reach4 = document.getElementById("r4");

    if (reach2.classList.contains("box")) {
        reach2.classList.remove("box");
        reach2.classList.remove("boxcolor2");
        reach2.classList.remove("boxcolor2:hover");
        reach2.classList.add("active2");
    }
    else {
        reach2.classList.remove("active2");
        reach2.classList.add("box");
        reach2.classList.add("boxcolor2");
        reach2.classList.add("boxcolor2:hover");
    }
    if (reach1.classList.contains("active1")) {
        reach1.classList.remove("active1");
        reach1.classList.add("box");
        reach1.classList.add("boxcolor1");
        reach1.classList.add("boxcolor1:hover");

    }
    if (reach3.classList.contains("active3")) {
        reach3.classList.remove("active3");
        reach3.classList.add("box");
        reach3.classList.add("boxcolor3");
        reach3.classList.add("boxcolor3:hover");

    }
    if (reach4.classList.contains("active4")) {
        reach4.classList.remove("active4");
        reach4.classList.add("box");
        reach4.classList.add("boxcolor4");
        reach4.classList.add("boxcolor4:hover");

    }
}

// Third activer3 Function for reach. This makes the box selected

function activer3() {
    var reach1 = document.getElementById("r1");
    var reach2 = document.getElementById("r2");
    var reach3 = document.getElementById("r3");
    var reach4 = document.getElementById("r4");

    if (reach3.classList.contains("box")) {
        reach3.classList.remove("box");
        reach3.classList.remove("boxcolor3");
        reach3.classList.remove("boxcolor3:hover");
        reach3.classList.add("active3");
    }
    else {
        reach3.classList.remove("active3");
        reach3.classList.add("box");
        reach3.classList.add("boxcolor3");
        reach3.classList.add("boxcolor3:hover");
    }
    if (reach1.classList.contains("active1")) {
        reach1.classList.remove("active1");
        reach1.classList.add("box");
        reach1.classList.add("boxcolor1");
        reach1.classList.add("boxcolor1:hover");

    }
    if (reach2.classList.contains("active2")) {
        reach2.classList.remove("active2");
        reach2.classList.add("box");
        reach2.classList.add("boxcolor2");
        reach2.classList.add("boxcolor2:hover");

    }
    if (reach4.classList.contains("active4")) {
        reach4.classList.remove("active4");
        reach4.classList.add("box");
        reach4.classList.add("boxcolor4");
        reach4.classList.add("boxcolor4:hover");

    }
}


// Fourth activer4 Function for reach. This makes the box selected
function activer4() {
    var reach1 = document.getElementById("r1");
    var reach2 = document.getElementById("r2");
    var reach3 = document.getElementById("r3");
    var reach4 = document.getElementById("r4");

    if (reach4.classList.contains("box")) {
        reach4.classList.remove("box");
        reach4.classList.remove("boxcolor4");
        reach4.classList.remove("boxcolor4:hover");
        reach4.classList.add("active4");
    }
    else {
        reach4.classList.remove("active4");
        reach4.classList.add("box");
        reach4.classList.add("boxcolor4");
        reach4.classList.add("boxcolor4:hover");
    }
    if (reach1.classList.contains("active1")) {
        reach1.classList.remove("active1");
        reach1.classList.add("box");
        reach1.classList.add("boxcolor1");
        reach1.classList.add("boxcolor1:hover");

    }
    if (reach2.classList.contains("active2")) {
        reach2.classList.remove("active2");
        reach2.classList.add("box");
        reach2.classList.add("boxcolor2");
        reach2.classList.add("boxcolor2:hover");

    }
    if (reach3.classList.contains("active3")) {
        reach3.classList.remove("active3");
        reach3.classList.add("box");
        reach3.classList.add("boxcolor3");
        reach3.classList.add("boxcolor3:hover");

    }
}

// First actived1 Function for Data Consistency. This makes the box selected
function actived1() {
    var data1 = document.getElementById("d1");
    var data2 = document.getElementById("d2");
    var data3 = document.getElementById("d3");
    var data4 = document.getElementById("d4");

    if (data1.classList.contains("box")) {
        data1.classList.remove("box");
        data1.classList.remove("boxcolor1");
        data1.classList.remove("boxcolor1:hover");
        data1.classList.add("active1");

    }
    else {
        data1.classList.remove("active1");
        data1.classList.add("box");
        data1.classList.add("boxcolor1");
        data1.classList.add("boxcolor1:hover");


    }
    if (data2.classList.contains("active2")) {
        data2.classList.remove("active2");
        data2.classList.add("box");
        data2.classList.add("boxcolor2");
        data2.classList.add("boxcolor2:hover");


    }
    if (data3.classList.contains("active3")) {
        data3.classList.remove("active3");
        data3.classList.add("box");
        data3.classList.add("boxcolor3");
        data3.classList.add("boxcolor3:hover");


    }
    if (data4.classList.contains("active4")) {
        data4.classList.remove("active4");
        data4.classList.add("box");
        data4.classList.add("boxcolor4");
        data4.classList.add("boxcolor4:hover");

    }
}

// Second actived2 Function for Data Consistency. This makes the box selected
function actived2() {
    var data1 = document.getElementById("d1");
    var data2 = document.getElementById("d2");
    var data3 = document.getElementById("d3");
    var data4 = document.getElementById("d4");

    if (data2.classList.contains("box")) {
        data2.classList.remove("box");
        data2.classList.remove("boxcolor2");
        data2.classList.remove("boxcolor2:hover");
        data2.classList.add("active2");


    }
    else {
        data2.classList.remove("active2");
        data2.classList.add("box");
        data2.classList.add("boxcolor2");
        data2.classList.add("boxcolor2:hover");


    }
    if (data1.classList.contains("active1")) {
        data1.classList.remove("active1");
        data1.classList.add("box");
        data1.classList.add("boxcolor1");
        data1.classList.add("boxcolor1:hover");



    }
    if (data3.classList.contains("active3")) {
        data3.classList.remove("active3");
        data3.classList.add("box");
        data3.classList.add("boxcolor3");
        data3.classList.add("boxcolor3:hover");



    }
    if (data4.classList.contains("active4")) {
        data4.classList.remove("active4");
        data4.classList.add("box");
        data4.classList.add("boxcolor4");
        data4.classList.add("boxcolor4:hover");


    }
}

// Third actived3 Function for Data Consistency. This makes the box selected

function actived3() {
    var data1 = document.getElementById("d1");
    var data2 = document.getElementById("d2");
    var data3 = document.getElementById("d3");
    var data4 = document.getElementById("d4");

    if (data3.classList.contains("box")) {
        data3.classList.remove("box");
        data3.classList.remove("boxcolor3");
        data3.classList.remove("boxcolor3:hover");
        data3.classList.add("active3");


    }
    else {
        data3.classList.remove("active3");
        data3.classList.add("box");
        data3.classList.add("boxcolor3");
        data3.classList.add("boxcolor3:hover");


    }
    if (data1.classList.contains("active1")) {
        data1.classList.remove("active1");
        data1.classList.add("box");
        data1.classList.add("boxcolor1");
        data1.classList.add("boxcolor1:hover");



    }
    if (data2.classList.contains("active2")) {
        data2.classList.remove("active2");
        data2.classList.add("box");
        data2.classList.add("boxcolor2");
        data2.classList.add("boxcolor2:hover");



    }
    if (data4.classList.contains("active4")) {
        data4.classList.remove("active4");
        data4.classList.add("box");
        data4.classList.add("boxcolor4");
        data4.classList.add("boxcolor4:hover");



    }
}

// Fourth actived4 Function for Data Consistency. This makes the box selected
function actived4() {
    var data1 = document.getElementById("d1");
    var data2 = document.getElementById("d2");
    var data3 = document.getElementById("d3");
    var data4 = document.getElementById("d4");

    if (data4.classList.contains("box")) {
        data4.classList.remove("box");
        data4.classList.remove("boxcolor4");
        data4.classList.remove("boxcolor4:hover");
        data4.classList.add("active4");


    }
    else {
        data4.classList.remove("active4");
        data4.classList.add("box");
        data4.classList.add("boxcolor4");
        data4.classList.add("boxcolor4:hover");

    }
    if (data1.classList.contains("active1")) {
        data1.classList.remove("active1");
        data1.classList.add("box");
        data1.classList.add("boxcolor1");
        data1.classList.add("boxcolor1:hover");


    }
    if (data2.classList.contains("active2")) {
        data2.classList.remove("active2");
        data2.classList.add("box");
        data2.classList.add("boxcolor2");
        data2.classList.add("boxcolor2:hover");


    }
    if (data3.classList.contains("active3")) {
        data3.classList.remove("active3");
        data3.classList.add("box");
        data3.classList.add("boxcolor3");
        data3.classList.add("boxcolor3:hover");


    }
}





//check() is doing a check to make sure each column has one selection before outputing a severity
function check() {
    var performancep1 = document.getElementById("p1").classList;
    var performancep2 = document.getElementById("p2").classList;
    var performancep3 = document.getElementById("p3").classList;
    var performancep4 = document.getElementById("p4").classList;

    var financialf1 = document.getElementById("f1").classList;
    var financialf2 = document.getElementById("f2").classList;
    var financialf3 = document.getElementById("f3").classList;
    var financialf4 = document.getElementById("f4").classList;

    var workw1 = document.getElementById("w1").classList;
    var workw2 = document.getElementById("w2").classList;
    var workw3 = document.getElementById("w3").classList;
    var workw4 = document.getElementById("w4").classList;

    var reachr1 = document.getElementById("r1").classList;
    var reachr2 = document.getElementById("r2").classList;
    var reachr3 = document.getElementById("r3").classList;
    var reachr4 = document.getElementById("r4").classList;

    var datad1 = document.getElementById("d1").classList;
    var datad2 = document.getElementById("d2").classList;
    var datad3 = document.getElementById("d3").classList;
    var datad4 = document.getElementById("d4").classList;
    var remover = document.getElementById("severityrating");



    if ((performancep1.contains("active1") ||
        performancep2.contains("active2") ||
        performancep3.contains("active3") ||
        performancep4.contains("active4")) &&

        (financialf1.contains("active1") ||
            financialf2.contains("active2") ||
            financialf3.contains("active3") ||
            financialf4.contains("active4")) &&

        (workw1.contains("active1") ||
            workw2.contains("active2") ||
            workw3.contains("active3") ||
            workw4.contains("active4")) &&

        (reachr1.contains("active1") ||
            reachr2.contains("active2") ||
            reachr3.contains("active3") ||
            reachr4.contains("active4")) &&

        (datad1.contains("active1") ||
            datad2.contains("active2") ||
            datad3.contains("active3") ||
            datad4.contains("active4"))) {
        sumTotal();
    }
    else {
//This will remove the bottom severity output if not all columns have at least one selection
        console.log("Please select one box from each column");
        remover.classList.add("seeya");

    }
}

// sumTotal basically finds all of the boxes with active1, active2, active3, and active 4.
// Depending on the location of the box, it will then assign a weighted value.
// Anything without the weighted value gets assigned a 0 value.
// then we sum up ALL boxes to output the total weighted value.
// then there is a check to see where it breaks the thresholds and assigns the appropriate class to the id=severityrating
function sumTotal() {
    var sump1 = document.getElementById("p1");
    var sumf1 = document.getElementById("f1");
    var sumw1 = document.getElementById("w1");
    var sumr1 = document.getElementById("r1");
    var sumd1 = document.getElementById("d1");

    var sump2 = document.getElementById("p2");
    var sumf2 = document.getElementById("f2");
    var sumw2 = document.getElementById("w2");
    var sumr2 = document.getElementById("r2");
    var sumd2 = document.getElementById("d2");

    var sump3 = document.getElementById("p3");
    var sumf3 = document.getElementById("f3");
    var sumw3 = document.getElementById("w3");
    var sumr3 = document.getElementById("r3");
    var sumd3 = document.getElementById("d3");

    var sump4 = document.getElementById("p4");
    var sumf4 = document.getElementById("f4");
    var sumw4 = document.getElementById("w4");
    var sumr4 = document.getElementById("r4");
    var sumd4 = document.getElementById("d4");

    //first row weighted values
    if (sump1.classList.contains("active1")) {
        sump1 = 9;
        Number(sump1);
    }
    else {
        sump1 = 0;
        Number(sump1);
    }
    if (sumf1.classList.contains("active1")) {
        sumf1 = 10;
        Number(sumf1);
    }
    else {
        sumf1 = 0;
        Number(sumf1);
    }
    if (sumw1.classList.contains("active1")) {
        sumw1 = 9;
        Number(sumw1);
    }
    else {
        sumw1 = 0;
        Number(sumw1);
    }
    if (sumr1.classList.contains("active1")) {
        sumr1 = 8;
        Number(sumr1);
    }
    else {
        sumr1 = 0;
        Number(sumr1);
    }
    if (sumd1.classList.contains("active1")) {
        sumd1 = 10;
        Number(sumd1);
    }
    else {
        sumd1 = 0;
        Number(sumd1);
    }
    //second row weighted values
    if (sump2.classList.contains("active2")) {
        sump2 = 6;
        Number(sump2);
    }
    else {
        sump2 = 0;
        Number(sump2);
    }
    if (sumf2.classList.contains("active2")) {
        sumf2 = 7;
        Number(sumf2);
    }
    else {
        sumf2 = 0;
        Number(sumf2);
    }
    if (sumw2.classList.contains("active2")) {
        sumw2 = 5;
        Number(sumw2);
    }
    else {
        sumw2 = 0;
        Number(sumw2);
    }
    if (sumr2.classList.contains("active2")) {
        sumr2 = 5;
        Number(sumr2);
    }
    else {
        sumr2 = 0;
        Number(sumr2);
    }
    if (sumd2.classList.contains("active2")) {
        sumd2 = 6;
        Number(sumd2);
    }
    else {
        sumd2 = 0;
        Number(sumd2);
    }

    //third row weighted values
    if (sump3.classList.contains("active3")) {
        sump3 = 3;
        Number(sump3);
    }
    else {
        sump3 = 0;
        Number(sump3);
    }
    if (sumf3.classList.contains("active3")) {
        sumf3 = 4;
        Number(sumf3);
    }
    else {
        sumf3 = 0;
        Number(sumf3);
    }
    if (sumw3.classList.contains("active3")) {
        sumw3 = 3;
        Number(sumw3);
    }
    else {
        sumw3 = 0;
        Number(sumw3);
    }
    if (sumr3.classList.contains("active3")) {
        sumr3 = 3;
        Number(sumr3);
    }
    else {
        sumr3 = 0;
        Number(sumr3);
    }
    if (sumd3.classList.contains("active3")) {
        sumd3 = 3;
        Number(sumd3);
    }
    else {
        sumd3 = 0;
        Number(sumd3);
    }

    //Fourth Row weighted values
    if (sump4.classList.contains("active4")) {
        sump4 = 0;
        Number(sump4);
    }
    else {
        sump4 = 0;
        Number(sump4);
    }
    if (sumf4.classList.contains("active4")) {
        sumf4 = 0;
        Number(sumf4);
    }
    else {
        sumf4 = 0;
        Number(sumf4);
    }
    if (sumw4.classList.contains("active4")) {
        sumw4 = 0;
        Number(sumw4);
    }
    else {
        sumw4 = 0;
        Number(sumw4);
    }
    if (sumr4.classList.contains("active4")) {
        sumr4 = 0;
        Number(sumr4);
    }
    else {
        sumr4 = 0;
        Number(sumr4);
    }
    if (sumd4.classList.contains("active4")) {
        sumd4 = 0;
        Number(sumd4);
    }
    else {
        sumd4 = 0;
        Number(sumd4);
    }




    //Grand Total
    var countAll = ((sump1 + sumf1 + sumw1 + sumr1 + sumd1 + sump2 + sumf2 + sumw2 + sumr2 + sumd2 + sump3 + sumf3 + sumw3 + sumr3 + sumd3 + sump4 + sumf4 + sumw4 + sumr4 + sumd4));
    var updateRating = document.getElementById("severityrating");
    if (countAll >= 30) {
        console.log(countAll);
        console.log('Severity 1');
        updateRating.classList.add("severityone");
        updateRating.classList.remove("severitytwo");
        updateRating.classList.remove("severitythree");
        updateRating.classList.remove("severityfour");
        updateRating.innerHTML = "Severity 1";
        updateRating.classList.remove("seeya");


    }
    else if (countAll >= 20) {
        console.log(countAll);
        console.log('Severity 2');
        updateRating.classList.add("severitytwo");
        updateRating.classList.remove("severityone");
        updateRating.classList.remove("severitythree");
        updateRating.classList.remove("severityfour");
        updateRating.innerHTML = "Severity 2";
        updateRating.classList.remove("seeya");


    }
    else if (countAll >= 12) {
        console.log(countAll);
        console.log('Severity 3');
        updateRating.classList.add("severitythree");
        updateRating.classList.remove("severitytwo");
        updateRating.classList.remove("severityone");
        updateRating.classList.remove("severityfour");
        updateRating.innerHTML = "Severity 3";
        updateRating.classList.remove("seeya");



    }
    else if (countAll < 12) {
        console.log(countAll);
        console.log('Severity 4');
        updateRating.classList.add("severityfour");
        updateRating.classList.remove("severitytwo");
        updateRating.classList.remove("severitythree");
        updateRating.classList.remove("severityone");
        updateRating.innerHTML = "Severity 4";
        updateRating.classList.remove("seeya");


    }
}
