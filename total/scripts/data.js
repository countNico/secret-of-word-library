//onclick and hold variant
var TimeoutFunction;
var isHolding = false;
const holdDuration1 = 400;
var isClickingOperation1 = true;

var isComputer = true;

var plan_url = [
    { url: "url(./total/img/11.png)" },
    { url: "url(./total/img/22.png)" },
    { url: "url(./total/img/33.png)" },
    { url: "url(./total/img/44.png)" },
];

var match_number = 1;
var selected_value = 0;

var table_plan_pos =  [
    { plan: 0, rotate: 0 },
    { plan: 0, rotate: 0 },
    { plan: 0, rotate: 0 },
    { plan: 0, rotate: 0 }
];

var used_plan =  [
    false,
    false,
    false,
    false,
];

var smples =  [
    { path: "url(./total/img/smples1.jpg)", name: "سبز" },
    { path: "url(./total/img/smples2.jpg)", name: "بها" },
    { path: "url(./total/img/smples3.jpg)", name: "بهتر" },
    { path: "url(./total/img/smples4.jpg)", name: "مایک" },
    { path: "url(./total/img/smples5.jpg)", name: "سستی" },
    { path: "url(./total/img/smples6.jpg)", name: "مسیح" },
    { path: "url(./total/img/smples7.jpg)", name: "ایکس" },
    { path: "url(./total/img/smples8.jpg)", name: "شستی" },
    { path: "url(./total/img/smples9.jpg)", name: "اسکی" },
    { path: "url(./total/img/smples10.jpg)", name: "ملوانی" },
    { path: "url(./total/img/smples11.jpg)", name: "پرابهت" },
    { path: "url(./total/img/smples12.jpg)", name: "سرحساب" }
];

var validation_patterns =  [
    { plan1: 2, rotate1: 0, plan2: 3, rotate2: 2, plan3: 1, rotate3: 0, plan4: 4, rotate4: 1 },
    { plan1: 3, rotate1: 1, plan2: 2, rotate2: 1, plan3: 1, rotate3: 0, plan4: 4, rotate4: 1 },
    { plan1: 3, rotate1: 1, plan2: 4, rotate2: 3, plan3: 1, rotate3: 0, plan4: 2, rotate4: 1 },
    { plan1: 1, rotate1: 0, plan2: 2, rotate2: 1, plan3: 3, rotate3: 3, plan4: 4, rotate4: 1 },
    { plan1: 2, rotate1: 0, plan2: 4, rotate2: 3, plan3: 1, rotate3: 1, plan4: 3, rotate4: 0 },
    { plan1: 3, rotate1: 2, plan2: 1, rotate2: 1, plan3: 2, rotate3: 0, plan4: 4, rotate4: 1 },
    { plan1: 1, rotate1: 0, plan2: 2, rotate2: 1, plan3: 3, rotate3: 1, plan4: 4, rotate4: 1 },
    { plan1: 2, rotate1: 1, plan2: 4, rotate2: 3, plan3: 1, rotate3: 1, plan4: 3, rotate4: 0 },
    { plan1: 1, rotate1: 0, plan2: 2, rotate2: 1, plan3: 3, rotate3: 1, plan4: 4, rotate4: 1 },
    { plan1: 3, rotate1: 2, plan2: 2, rotate2: 1, plan3: 4, rotate3: 0, plan4: 1, rotate4: 3 },
    { plan1: 1, rotate1: 1, plan2: 4, rotate2: 1, plan3: 3, rotate3: 2, plan4: 2, rotate4: 1 },
    { plan1: 4, rotate1: 0, plan2: 1, rotate2: 1, plan3: 3, rotate3: 2, plan4: 2, rotate4: 1 },
];
// second answer:
var validation_patterns2 =  [
    { plan1: 2, rotate1: 2, plan2: 3, rotate2: 2, plan3: 1, rotate3: 0, plan4: 4, rotate4: 1 },
    { plan1: 3, rotate1: 1, plan2: 2, rotate2: 3, plan3: 1, rotate3: 0, plan4: 4, rotate4: 1 },
    { plan1: 3, rotate1: 1, plan2: 4, rotate2: 3, plan3: 1, rotate3: 0, plan4: 2, rotate4: 3 },
    { plan1: 1, rotate1: 0, plan2: 2, rotate2: 3, plan3: 3, rotate3: 3, plan4: 4, rotate4: 1 },
    { plan1: 2, rotate1: 2, plan2: 4, rotate2: 3, plan3: 1, rotate3: 1, plan4: 3, rotate4: 0 },
    { plan1: 3, rotate1: 2, plan2: 1, rotate2: 1, plan3: 2, rotate3: 2, plan4: 4, rotate4: 1 },
    { plan1: 1, rotate1: 0, plan2: 2, rotate2: 3, plan3: 3, rotate3: 1, plan4: 4, rotate4: 1 },
    { plan1: 2, rotate1: 3, plan2: 4, rotate2: 3, plan3: 1, rotate3: 1, plan4: 3, rotate4: 0 },
    { plan1: 1, rotate1: 0, plan2: 2, rotate2: 3, plan3: 3, rotate3: 1, plan4: 4, rotate4: 1 },
    { plan1: 3, rotate1: 2, plan2: 2, rotate2: 3, plan3: 4, rotate3: 0, plan4: 1, rotate4: 3 },
    { plan1: 1, rotate1: 1, plan2: 4, rotate2: 1, plan3: 3, rotate3: 2, plan4: 2, rotate4: 3 },
    { plan1: 4, rotate1: 0, plan2: 1, rotate2: 1, plan3: 3, rotate3: 2, plan4: 2, rotate4: 3 },
];


