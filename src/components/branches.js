import $ from 'jquery';

let outcolss2 = [];
let options2 = [];
$.ajax({
    type: "GET",
  
        url: "http://localhost:4000/loadBranchDescription",
        contentType: "application/json",
        beforeSend: function () {
        },
  
        success: function (data) {
  
  
  
            //console.log(data);
  
                  $.each(data, function (index, value) {
  
                    outcolss2 = [];
                    options2= [];
  
                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                        outcolss2.push(value.metaData[o]);
                      }
  
                      for (var i in value.rows) {
                        options2.push(value.rows[i]);
                      }
                      console.log(options2);
                  })
      },
  
      error: function (jqXHR, exception) {
  
      }
  
  });

  export default options2;