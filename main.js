domain = "http://www.rain.hyarc.nagoya-u.ac.jp/~nishii/"
urlDict = {
    "jp":
        {
            "Home": domain + "index.html",
            "Profile": domain + "profile.html",
            "Publications": domain + "publications.html",
            "Tech": domain + "tech/tech_home.html",
        },
    "en":
        {
            "Home": domain + "index_en.html",
            "Profile": domain + "profile_en.html",
            "Publications": domain + "publications_en.html",
        }
}

function header(pageName, lang) {
    function active(pageName, linkName) {
        if (pageName == linkName) { return "active" };
    }

    //日本語ぺージの場合，技術ぺージへのリンクを追加する。
    function check_jp(lang) {
        const linktotech = `<li class="nav-item ${active(pageName, "Tech")} ml-2"><a class="nav-link" href="${domain}tech/tech_home.html">Tech-Page</a></li>`;
        if (lang == "jp") { return linktotech; }else{ return " ";}
    }

    var html = 
    `
    <header>
        <!--<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">-->
        <nav class="navbar navbar-expand-md navbar-light fixed-top" style="background-color: #E0F0E0;">
            <a href="${urlDict[lang]['Home']}" style="font-size:1.2em; font-weight: bold;">NISHII Akira's Page</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ${active(pageName, "Home")} ml-2"><a class="nav-link" href="${urlDict[lang]['Home']}">Home</a></li>
                    <li class="nav-item ${active(pageName, "Profile")} ml-2"><a class="nav-link" href="${urlDict[lang]['Profile']}">Profile</a></li>
                    <li class="nav-item ${active(pageName, "Publications")} ml-2"><a class="nav-link" href="${urlDict[lang]['Publications']}">Publications</a></li>
                    ${check_jp(lang)}
                </ul>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#"　id="dropdown01" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Language
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="${urlDict["jp"][pageName]}">
                            日本語
                        </a>
                        <a class="dropdown-item" href="${urlDict["en"][pageName]}">
                            English
                        </a>
                    </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    `
    document.write(html)
}


function footer() {    
    var html = 
    `
    <footer class="container">
        <p>© 2020-2025 NISHII, Akira. ALL Rights Reserved.</p>
        <p><img src= "${domain}contact.png"> <a href=https://github.com/akinishii><img src="./github-mark.png" alt="My github page" height="30"></a></p>
        <p class="float-end"><a href="/laboratory/member-jp.html">Return to Laboratory Member Page</a></p>
    </footer>
    `
    document.write(html)
}
