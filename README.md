# Main Description


## Color palette

- Primary: `e6e6e6`
- Surface and navigation text: `#113344`
- Accent: `#1b88b0`
- Shadow: `#CCCCCC`

## Font type

Arial, Helvetica, sans-serif.

//// ginger template////
your_project/
├── app.py
├── static/
│   ├── base_style.css
│   ├── index_style.css
│   └── home-city.jpg
└── templates/
    ├── base.html
    ├── index.html
    └── story.html

## TO DO
- add questions and answers to faq section on contact page
- add bio and social links to meet the team page and change name from filmmakers to our team
- change trailer video with placeholder in trailer page
- add image gallery/slideshow to bts page

note for readmefile 

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.desktop-nav a {
  position: relative;
  color: #000;
  font-size: 13px;
  text-decoration: none;
  white-space: nowrap;
}

.desktop-nav a:hover,
.desktop-nav a.active { color: #0000ff; }

.desktop-nav a.active::after {
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 20px;
  height: 2px;
  background: #0000ff;
  content: "";
}

/* Trailer/CTA Button */
.trailer-button {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 14px 20px;
  color: #fff;
  background: #113344;
  font-size: 12px;
  text-decoration: none;
  white-space: nowrap;
}

/* Mobile Navigation */
.mobile-menu {
  display: none;
  position: relative;
}

.mobile-menu summary { cursor: pointer; }

.mobile-menu nav {
  position: absolute;
  z-index: 3;
  right: 0;
  top: 35px;
  min-width: 200px;
  padding: 12px;
  background: #113344;
}

.mobile-menu nav a {
  display: block;
  padding: 9px;
  color: #fff;
  text-decoration: none;
}

farhan nav bar

    <!-- <nav id="nav">
            <section class="left">
                <a href="/story">Story</a>
                <a href="/epk">EPK</a>
                <a href="/trailer">Trailer</a>
            </section>
            <section class="center">
                <a href="/" class="logo"><img src="{{url_for('static', filename='A Good Life Logo.png')}}" alt="logo"></a>
            </section>
            <section class="right">
                <a href="/bts">BTS</a>
                <a href="/filmmakers">Our Team</a>
                <a href="/contact">Contact Us</a>
            </section><section class="ham" onclick="ham(this)" id="ham">
                <section class="bar1"></section>
                <section class="bar2"></section>
                <section class="bar3"></section>
            </section>
        </nav> -->