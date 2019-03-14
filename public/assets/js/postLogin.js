import { query } from "express-validator/check";

// 1 login with user creds
$(document).ready(function(){
    $("#login").on("click", function(evt){
      evt.preventDefault();    
      $.ajax({
        method: "POST",
        url: "/api/login",
        data:{
          username: $("#email").val().trim(),
          password: $("#password").val().trim()
        },
        dataType: "json"
      }).then(function(data) {
          if (data.auth) {
            var username = data.username;
            
            
            
            // make the call to the user database
            $.ajax({
                method: "GET",
                url: `/api/user/username/${data.username}`
            }).then(function(userData) {
                // make call to the back end for the department info from userData.department
                $.ajax({
                    method: "GET",
                    url: `/api/cidata/${userData.department}`
                }).then(function(cidata) {
                    // find the mismatched stuff and render it all out
                    var mismatchedArray = [];
                    // make sure you get "data" from somewhere
                    cidata.forEach(function(entry) {
                        if (entry.department !== entry.owned_by_department) {
                            mismatchedArray.push(entry)
                        }
                    });

                    // do something with mismatchedArray
                    renderMismatchedDataToPage(mismatchedArray);
                })

            })

          }
      });
  
    const userQueryURL = function () {
    
      // queryURL is the url we'll use to query the API
      let queryURL = 'api/user';

      .done(function( response ) {
        if(response.auth){
          //Where you want to go after auth
          // window.location= "/dashboard";
          window.location += response.redirect;
        }else{
          alert("Invalid username or password")
        }
      })
      .fail(function(err,response){
          console.log(err);
          if (err.status == 422){
            $("#errMsg").text("The username entered is invalid. Please try again.");
            $("#errMsg").attr("class","alert alert-warning");
          }else{
            $("#errMsg").text("Your username and/or password is incorrect. Try again.");
            $("#errMsg").attr("class","alert alert-danger");
          }
          $("#errMsg").show();
        
        
      })
  
    });
  
    
  })  

// 3 with THAT retrieved department info, make ANOTHER call to the CI TABLE, asking for entries where the department === retrieved user department value
// at point, you have filtered CI data, all from backend logic.
// 4 further filter resulting CI data, ONLY returning mismatched entries
// 5 send resulting mismatched entries to the front end


// 6 render the mismatched entries to a table


function userDepartmentCiEntries(entry) {
    // pretend the "user" value is global
    return user.department === entry.department;
  }

  function somethingThatGetsDataAndCallsSendToNewArray() {
    // ALL data is available as "ciData"
    var filteredArrayUserDepartment = ciData.filter(userDepartmentCiEntries);

    sendToNewArray(filteredArrayUserDepartment);

  }

  // sudo coded stuff
  function sendToNewArray(ciData) {

    var mismatchedArray = [];
    // make sure you get "data" from somewhere
    ciData.forEach(function(entry) {
      if (entry.department !== entry.owned_by_department) {
        mismatchedArray.push(entry)
      }
    });

    // do something with mismatchedArray
    renderMismatchedDataToPage(mismatchedArray);
  }