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
// $(".green-box").hover(function(){
// $(this).stop().fadeTo(500,0.2);
// },function(){
// $(this).fadeTo(500,1);
// });

// Adding same handler for multiple events
// $("html").on("click keydown", function(){
//   alert("Mouse was clicked");
// });

// A mini challenge was given for same image sliding but with  click
// var images = [
//   'images/laptop-mobile_small.jpg',
//   'images/laptop-on-table_small.jpg',
//   'images/people-office-group-team_small.jpg'
// ];

// var i = 0;
// $(".gallery").find("img").on("click",function(){
//   i = (i+1) % images.length;
//   $(this).fadeOut(function(){
//     $(this).attr("src",images[i]).fadeIn();
//   });
// });

// Declaring function outside
// function logEvent(){
//   console.log("Mouse is pressed ");
// };

// $(".red-box").on("click",logEvent);



// Sliding images with outside function


// var images = [
//   'images/laptop-mobile_small.jpg',
//   'images/laptop-on-table_small.jpg',
//   'images/people-office-group-team_small.jpg'
// ];

// var i = 0;
// galleryImages = $(".gallery").find("img");
// galleryImages.on("click",switchtoImages);

// function switchtoImages(){
//   i = (i+1) % images.length;
//   galleryImages.fadeOut(function(){
//     galleryImages.attr("src",images[i]).fadeIn();
//   });

// };

// $("p").on("click",slide);
// function slide(){$("p").slideUp();
// };
// $("#content").append("<p> This is dynamically added paragraph</p>");

// Delegated events 

// $("#content").append("<p> This is dynamically added paragraph</p>");
// $("#content").on("click", "p", function(){
//   $(this).slideUp();
// })

// $("body").on('mouseenter','li',function(){
//   $(this).css("color","#167")
// })

// Handling keydown and keyup events

// $("html").keydown(function(event){
//   console.log(event.which);
// })

// var ARROW_RIGHT = 39;
// $("html").keydown(function(event){
//   if( event.which == 39)
//   {
//     $(".blue-box").stop().animate({
//       'margin-left': '+=10px'
//     },500);
//   }
// });

// Form

// var inputFields = $("input[type = 'text'], input[type = 'email'], input[type = 'password']");
// inputFields.focus(function(){
// $(this).css("box-shadow", "0 0 5px #666");
// });

// inputFields.blur(function(){
//   $(this).css("box-shadow", "none");

// });

// $("#name").blur(function(){
//   var text = $(this).val();
//   if (text.length < 3){
//     $(this).css("box-shadow", "0 0 5px #811");

//   }
//   else{
//     $(this).css("box-shadow", "0 0 5px #181");

//   }
// });

// $("#checkbox").change(function(){
//  var isChecked = $(this).is(":checked");
//  if (isChecked){
//    $(this).add("label[for = 'cb']").css("box-shadow", "0 0 4px #181");

//  }
//  else{
//   $(this).add("label[for = 'cb']").css("box-shadow", "0 0 4px #811");

//  }
// });


// // To check selected option which one is selected

// $("#selection").change(function(){
//   var selectedOption = $(this).find(":selected").text();
//   alert(selectedOption);

// });


// Handling the Submit form

// $("#form").submit(function(event){
//   var textarea = $("#message");
//   if (textarea.val().trim() == ''){
//     textarea.css('box-shadow',"0 0 4px #811 ");
//     event.preventDefault();
//   }
//   else{
//     // form will be submitted
//   }
// });


// Complete Form Validation

// var form = $("#form");
// // To enable fast feeback of form
//  enableFastFeedback(form);

// form.submit(function(event){
//   var name = $("#name").val();
//   var password = $("#password").val();
//   var email = $("#email").val();
//   var message = $("#message").val();
//   var isChecked = $("#checkbox").is(":checked");

//   validateNameField(name,event);
//   validatePasswordField(password,event);
//   validateMessageField(message,event);
//   validateCheckboxField(isChecked,event);
//   validateEmailField(email,event);
   
// });

// function enableFastFeedback(formElement){
//    var nameInput = formElement.find("#name");
//    var passwordInput = formElement.find("#password");
//    var messageInput = formElement.find("#message");
//    var checkboxInput = formElement.find("#checkbox");
//   var emailInput = formElement.find("#email");
//    nameInput.blur(function(event){
//      var name = $(this).val();
//      validateNameField(name,event);

//      if(!isValidName(name)){
//        $(this).css({"box-shadow":"0 0 4px #811", "border":"1px solid #600"})
//      }
//      else{
//       $(this).css({"box-shadow":"0 0 4px #181", "border":"1px solid #060"})

//      }

//    });
//    emailInput.blur(function(event){
//     var email = $(this).val();
//     validateEmailField(email,event);

//     if(!isValidEmail(email)){
//       $(this).css({"box-shadow":"0 0 4px #811", "border":"1px solid #600"})
//     }
//     else{
//      $(this).css({"box-shadow":"0 0 4px #181", "border":"1px solid #060"})

//     }

//   });

//    passwordInput.blur(function(event){
//     var password = $(this).val();
//     validatePasswordField(password,event);

//     if(!isValidPassword(password)){
//       $(this).css({"box-shadow":"0 0 4px #811", "border":"1px solid #600"})
//     }
//     else{
//      $(this).css({"box-shadow":"0 0 4px #181", "border":"1px solid #060"})

//     }

//   });

//   messageInput.blur(function(event){
//     var message = $(this).val();
//     validateMessageField(message,event);

//     if(!isValidMessage(message)){
//       $(this).css({"box-shadow":"0 0 4px #811", "border":"1px solid #600"})
//     }
//     else{
//      $(this).css({"box-shadow":"0 0 4px #181", "border":"1px solid #060"})

//     }

//   });
//   checkboxInput.change(function(event){
//     var isChecked = $(this).is(":checked");
//     validateCheckboxField(isChecked,event);

//     if(!isChecked){
//       $(this).add("label [for = 'cb]").css({"box-shadow":"0 0 4px #811", "border":"1px solid #600"})
//     }
//     else{
//      $(this).add("label [for = 'cb]").css({"box-shadow":"0 0 4px #181", "border":"1px solid #060"})

//     }

//   });



//   };

// function validateNameField(name,event){
//   if(!isValidName(name)){
//     $("#name-feedback").text("Please enter at least two characters");
//     event.preventDefault();
//   }
//   else{
//     $("#name-feedback").text("");
//   }
// };

// function validatePasswordField(password,event){
//   if(!isValidPassword(password)){
//     $("#password-feedback").text("Please enter at least six characters and a number");
//     event.preventDefault();

//   }
//   else
//   {
//     $("#password-feedback").text("");


//   }
// };
// function validateEmailField(email,event){
//   if(!isValidEmail(email)){
//     $("#email-feedback").text("Please enter a valid email");
//     event.preventDefault();

//   }
//   else
//   {
//     $("#email-feedback").text("");


//   }
// };

// function validateMessageField(message,event){
//   if(!isValidMessage(message)){
//     $("#message-feedback").text("Please enter something ");
//     event.preventDefault();

//   }
//   else
//   {
//     $("#password-feedback").text("");


//   }
// };

// function validateCheckboxField(isChecked,event){
//   if(!isChecked) {
//   $("#checkbox-feedback").text("Please agree to this");
//   event.preventDefault();

// }
// else
// {
//   $("#checkbox-feedback").text("");


// }

// };


// function isValidName(name){
//   return name.length >= 2;  
// };

// function isValidPassword(password){
//   return password.length >= 6 && /.*[0-9].*/.test(password);  
// };
// function isValidEmail(email){
//   return email.length >= 10 && /.*[@].*/.test(email);  
// };
// function isValidMessage(message){
//   return message.trim() != "";  
// };

// AJAX with jquery

// $.get(), $.post(), $.ajax(), $.getJSON()
// $.load() ===>>> to load page
// $("#code").load("js/script.js");
$("#code").load("base/js/script.js", function(response,status){
    if (status == "error"){
        alert("Could not find the page");
    }
    console.log(response);
});
});