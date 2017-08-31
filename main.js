            var main = document.createElement("main");
            document.body.appendChild(main);
            var main_tag =  document.getElementsByTagName("main")[0];
            
            var html = document.createElement("html");
            main_tag.appendChild(html);
            var html_tag = main_tag.getElementsByTagName("html")[0];

            var head = document.createElement("head");
            html_tag.appendChild(head);
            var head_tag = main_tag.getElementsByTagName("head")[0];
            
            var style = document.createElement("style");
            head_tag.appendChild(style);
            style.setAttribute("type","text/css");
            var style_tag = head_tag.getElementsByTagName("style")[0];

            var body = document.createElement("body");
            html_tag.appendChild(body);
            var body_tag = html_tag.getElementsByTagName("body")[0];

            var script = document.createElement("script");
            body_tag.appendChild(script);
            var script_tag = body_tag.getElementsByTagName("script")[0];

            var html_input = document.getElementById("html").value;
            var css_input = document.getElementById("css").value;
            var js_input = document.getElementById("javascript").value;
            
            
        
       function html_output() {
           if(document.getElementById("html").value.search(/\?\p\h\p(\s|\?\>)/)>=0) {
                document.write("Error");
           }
        else {
           main_tag.getElementsByTagName("body")[0].innerHTML = document.getElementById("html").value;
        }
           
       }
        
        function css_output() {
            if(document.getElementById("css").value.search(/\?\p\h\p(\s|\?\>)/)>=0) {
                document.write("Error");
            }else {
           main_tag.getElementsByTagName("style")[0].innerHTML = document.getElementById("css").value;
            }
           
       }

        function js_output() {
            if(document.getElementById("javascript").value.search(/\?\p\h\p(\s|\?\>)/)>=0) {
                document.write("Error");
            }else {
                main_tag.getElementsByTagName("script")[0].innerHTML = eval(document.getElementById("javascript").value);
            }
        }
        



