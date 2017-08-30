 var main_tag = document.getElementsByTagName("main")[0];
            var html = document.createElement("html");
            main_tag.appendChild(html);
            var head = document.createElement("head");
            html.appendChild(head);
            var css = document.createElement("style");
            head.appendChild(css);
            var body = document.createElement("body");
            html.appendChild(body);
            var body_tag = main_tag.getElementsByTagName("body")[0];
            var main_style = main_tag.getElementsByTagName("style")[0];
            main_style.setAttribute("type","text/css");
            var js = document.createElement("script");
            body_tag.appendChild(js);
            
            
        
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
            if(document.getElementById("js").value.search(/\?\p\h\p(\s|\?\>)/)>=0) { 
                document.write("Error");
            }
            else {
    main_tag.getElementsByTagName("script")[0].innerHTML = document.getElementById("javascript").value;
            }

        }
        
        



