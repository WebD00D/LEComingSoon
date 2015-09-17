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

Parse.Cloud.run('testfunction', { barz: 'bar' }, {
  success: function(result) {
    alert('retrieved ' + result.length + ' values. Here they are:');
    for (var i = 0; i < result.length; i ++){
      var returnedvalue = result[i];
      alert(returnedvalue.get('someVal'));
    }
  },
  error: function(error) {
  }
});


})
