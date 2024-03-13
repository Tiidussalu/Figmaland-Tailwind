        function loadContent() {
            var width = window.innerWidth;
            var contentDiv = document.getElementById('content');

            if (width >= 768) {
                contentDiv.innerHTML = '';
                contentDiv.innerHTML = '<object type="text/html" data="index.html" style="width:100%; height:100vh;"></object>';
            } 
            else {
                contentDiv.innerHTML = '';
                contentDiv.innerHTML = '<object type="text/html" data="mobile.html" style="width:100%; height:100vh;"></object>';
            }
        }

        loadContent();

        window.addEventListener('resize', loadContent);