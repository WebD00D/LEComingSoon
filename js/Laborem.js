$(function(){

// and the LE-Robot Says "EEE-nitilize the Parse!"
Parse.initialize("yIHXb3Um6tiVf6e8NZGoQZqZLBH5eIfEHBora4fb", "oxPjuyuWdSTlsfhBpDlvoMefGEU4Y6BRdmOBb0lt");



//Parse.Cloud.run('hello', {}, {
//  success: function(result) {
//    alert(result);
//  },
//  error: function(error) {
//  }
//});

//Parse.Cloud.run('testfunction', { barz: 'bar' }, {
//  success: function(result) {
//    alert('retrieved ' + result.length + ' values. Here they are:');
//    for (var i = 0; i < result.length; i ++){
//      var returnedvalue = result[i];
//      alert(returnedvalue.get('someVal'));
//    }
//  },
//  error: function(error) {
//  }
//});
})


$("#SubmitMe").click(function(e){
  e.preventDefault();
  var Goal = $(".selectbox option:selected").text();
  var Email = $("#_email").val();

  if ($("#_email").val().length === 0){
    swal({   title: "Uh oh!",   text: "Looks like an email is missing." ,   type: "error",   confirmButtonText: "Okay got it.",confirmButtonColor: "#34495e"});
    return;
  }

  //Create new subclass of Parse.Object
  var Inquiry = Parse.Object.extend("Inquiry");
  //Create new instance of that class
  var inquiry = new Inquiry();

  inquiry.set("Goal",Goal);
  inquiry.set("Email",Email)
  inquiry.save(null,{
    success:function(){
      //execute any logic that should take place once the object is saved.
    //  $("#SubmitMe").removeClass("LESubmit");
    //  $("#SubmitMe").addClass("LESubmit2");
    //  $(".btnText").text("THANKS! WE'LL BE IN TOUCH SOON.");
      var message = "Inquiry sent from: " + Email + ". The goal is to " + Goal + "."
      sendItOut(message);
    }
  });
}) //end submitMe click

function sendItOut(textToSend){
  Parse.Cloud.run('sendMail', { msg: textToSend }, {
    success: function(result) {
          swal({   title: "Message Sent!",   text: "We'll be in touch with you soon!" ,   type: "success", confirmButtonText:"Okay",confirmButtonColor: "#34495e"});

    },
    error: function(error) {
      swal({   title: "Failed to Send!",   text: "Hmm something's not right. How about giving us a call at (804) 201 3219" ,   type: "error",   confirmButtonText: "OK",confirmButtonColor: "#34495e" });
    }
  });

}
