function add_number(){
            var first_number = parseInt(document.getElementsById("Text1").value);
            var second_number = parseInt(document.getElementsById("Text2").value);
            var result = first_number + second_number;
            document.getElementById("txtresult").innerHTML = result;    
            }