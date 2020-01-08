$(function() {
//   // jQuery goes here...

//   // Uncomment this line to fade out the red box on page load
//   // $(".blue-box").fadeOut(1000);
//   // $(".blue-box").fadeTo(1000,0.5);
//   // $(".blue-box").hide();
//   // $(".blue-box").slideToggle(1000);
//   // $(".green-box").slideDown(5000);
//   // $("p").hide();
//   // $("p").slideDown(1000);
//   // $(".blue-box").animate({
//   //   "margin-left":"+=200px"
//   // },1000,"swing")
//   // $(".blue-box").animate({
//   //   "margin-left":"200px",
//   //   "opacity":"0",
//   //   "height":"50px",
//   //   "width":"50px",
//   //   "margin-top": "50px"
//   // },1000)

//   // $("p").animate({
//   //    opacity : 0,
//   //   fontSize : "40px"

//   // },1000)

//   // Chaining the fading pattern,red first, blue second and green third...
//   // $(".red-box").fadeTo(1000,0.2);
//   // $(".green-box").delay(1000).fadeTo(1000,0.5);
//   // $(".blue-box").delay(1000).fadeTo(1000,0.8).fadeOut().delay(1000).fadeIn();
//   // // This chaining is done using delay function



//   // Timing animations using callback functions

//   // $(".red-box").fadeTo(1000,0,function(){
//   //   alert("This is alert to callback animation")
//   // });

//   // $(".green-box").fadeTo(1000,0,function(){
//   //   $(".blue-box").fadeTo(1000,0);
//   // })


//   // Lightbox
//   // $(".lightbox").fadeIn(1000);

//   // selecting css elements


// // $("p:first").css("background-color","rgba(180,180,30,0.8)");
// // $("#list").find("li").css("background-color","rgba(180,180,30,0.8)");
// // $("#list").children("li").css("background-color","rgba(180,180,30,0.8)");
// // $("#list").parents("body").css("background-color","rgba(180,180,30,0.8)");
// // $("#list").siblings(":header").css("background-color","rgba(180,180,30,0.8)");
// // $("#list").siblings(":header").css("background-color","rgba(180,180,30,0.8)");
// // $("#list").next().css("background-color","rgba(180,180,30,0.8)");
// // $("#list").prev().css("background-color","rgba(180,180,30,0.8)");
// // $("#list").next().prev().css("background-color","rgba(180,180,30,0.8)");

// // jquery methods for filtering

// // $("#list").find("li").filter(":even").css("background-color","rgba(180,180,30,0.8)");
// // $("li").filter(function(index){
// //   return index % 3 ===0;
// // }).css("background-color","rgba(180,180,30,0.8)");
// // $("li").eq(-3).css("background-color","rgba(180,180,30,0.8)");
// // $("li").not(":first").css("background-color","rgba(180,180,30,0.8)");
// // $("ul").append("<li> Hey myan </li>");
// // $("<li> This is aother item.</li>").appendTo($("ul :first"))
// $("<li> This is aother item.</li>").prependTo($("ul:first "))
// $(".red-box").after("<div class='red-box'> Red again </div>")
// // $(".blue-box").before("<div class='blue-box'> Blue  before </div>")

// // $(".blue-box").before(function(){
// //   return "<div class='blue-box'> Blue  before </div>";
// // })

// // $(".red-box").after($(".blue-box"));

// // $("p").after($(".list"));
// $("li").replaceWith("<li>replaced</li>");

// // $(".red-box, .blue-box").replaceWith($(".green-box"));
// $(".red-box").replaceAll($(".blue-box , .green-box"));
// $("li").remove();
// // $("form").children().not("input:text").remove();
// // $("p:first").empty();
// $(".red-box, .blue-box, .green-box").empty();

// // Manipulating attributes and properties of elements
// var anc = $("#anc");
// console.log(anc.attr("href"));
// console.log(anc.attr("title"));

// anc.attr("href","https://www.google.com")

// var checkbox = $("input:checkbox");
// console.log(checkbox.prop("checked"));

// var text = $("input:text");
// console.log(text.val());

// var rangeInput = $("input[type = 'range']");
// rangeInput.val(9)

// console.log(rangeInput.val());




// // Sliding image code

// var  galleryImage = $(".gallery").find("img").first();
 
// var images = [
//   'images/laptop-mobile_small.jpg',
//   'images/laptop-on-table_small.jpg',
//   'images/people-office-group-team_small.jpg'
// ];

// var i = 0;
// setInterval(function(){
//   i = (i+1) % images.length;
//   galleryImage.fadeOut(function(){
//     $(this).attr("src",images[i]);
//     $(this).fadeIn();
//   });
// },2000);
//   console.log(galleryImage.attr("src"));


// Changing CSS properties of elements
// $(".gallery").css("display","none");
// $(".gallery").hide();
// var redBox = $(".red-box");
// console.log(redBox.css("width"));
// console.log(redBox.width());
// redBox.css ("background-color","#AA7700");
// $("p").css("fontSize",30);
// redBox.css('width',"+=20px");
// properties = $("p").css(["fontSize","color"]);
// console.log(properties);
// console.log(properties["color"]);

// redBox.css("user-select","none");

// // Changing the data od an element
// var  galleryImage = $(".gallery").find("img").first();
 
// var images = [
//   'images/laptop-mobile_small.jpg',
//   'images/laptop-on-table_small.jpg',
//   'images/people-office-group-team_small.jpg'
// ];
// galleryImage.data('availableImages',images);
// galleryImage.data("name","The awesome gallery");
// console.log(galleryImage.data());
// galleryImage.removeData("name");
// console.log(galleryImage.data());
// console.log(galleryImage.data("name"));

// Retrieving and Changing the content of an element
// var firstPar = $("p:first");
// console.log(firstPar.text());
// console.log(firstPar.html());
// // firstPar.text("<strong>Hello World</strong>");

// firstPar.html("<strong>Hello World</strong>");
// // To append string on existing paragraph
// firstPar.html(firstPar.html() + "This is appended sentences")

// Event handlers

// Click Handlers
// $("#btn-click").click(function(event){
//   console.log(event);
//   alert("Button was clicked!!!");
// });

// $(".red-box").click(function()
// {
//   $(this).fadeTo(1000,0.5);

// });

// Hover handlers

// $("#btn-hover").hover(function(){
//  alert("This is it"); 
// });

// $(".green-box").hover(function(){
//   $(this).text("I am hovered");
// });

// var blueBox = $(".blue-box");
// blueBox.mouseenter(function(){
//   $(this).stop().fadeTo(500,0.7);
// });

// blueBox.mouseleave(function(){
//   $(this).stop().fadeTo(500,1);
// });

// hover(handlerIn, handlerOut)
$(".green-box").hover(function(){
$(this).stop().fadeTo(500,0.2);
},function(){
$(this).fadeTo(500,1);
});



});