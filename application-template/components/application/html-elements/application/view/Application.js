/**
 * Copyright (c) 2022 Thiago Cabrera All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
import { NavigationBar } from '../../navigation-bar/view/NavigationBar.js';
import { TopBar } from '../../top-bar/view/TopBar.js';
import { Header } from '../../header/view/Header.js';
import { Footer } from '../../footer/view/Footer.js';
import { ApplicationController } from '../controller/ApplicationController.js';
class Application extends HTMLElement {
  constructor() {
    super();

    this.controller = new ApplicationController(this);

    this.navBar = new NavigationBar();
    this.navBar.appendItem("One", "#");
    this.navBar.appendItem("Two", "#");
    this.navBar.appendItem("Three", "#");
    this.itemList = this.navBar.appendItemList();
    this.itemList.appendItem("Sub-One", "#");
    this.itemList.appendItem("Sub-Two", "#");
    this.itemList.appendItem("Sub-Three", "#");
    this.topBar = new TopBar();
    this.header = new Header();
    this.footer = new Footer();
    this.applicationBody = document.createElement("div");
    this.applicationBody.classList.add("w3-main");
    this.applicationBody.style.marginLeft = "250px";
    this.content1 = document.createElement("div");
    this.content1.innerHTML = `<h2>What is W3.CSS?</h2>

        <p>W3.CSS is a modern CSS framework with built-in responsiveness:</p>
        
        <ul class="w3-leftbar w3-theme-border" style="list-style:none">
         <li>Smaller and faster than other CSS frameworks.</li>
         <li>Easier to learn, and easier to use than other CSS frameworks.</li>
         <li>Uses standard CSS only (No jQuery or JavaScript library).</li>
         <li>Speeds up mobile Hdiv class="w3-container" style="padding:32px">
        
        <TML apps.</li>
         <li>Provides CSS equality for all devices. PC, laptop, tablet, and mobile:</li>
        </ul>
        <br>
        <img src="W3.CSS_archivos/img_responsive.png" style="width:100%" alt="Responsive">
        
        <hr>
        <h2>W3.CSS is Free</h2>
        <p>W3.CSS is free to use. No license is necessary.</p>
        
        <hr>
        <h2>Easy to Use</h2>
        <div class="w3-container w3-sand w3-leftbar">
        <p><i>Make it as simple as possible, but not simpler.</i><br>
        Albert Einstein</p>
        </div>
        
        <hr>
        <h2>W3.CSS Web Site Templates</h2>
        
        <p>We have created some responsive W3CSS templates for you to use.</p>
        <p>You are free to modify, save, share, use or do whatever you want with them:</p>
        
        
        <div class="w3-panel w3-light-grey w3-padding-16 w3-card">
        <h3 class="w3-center">Band Template</h3>
        <div class="w3-content" style="max-width:800px">
        <a href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm" target="_blank" title="Band Demo"><img src="W3.CSS_archivos/img_temp_band.jpg" style="width:98%;margin:20px 0" alt="Band Template"></a><br>
        <div class="w3-row">
          <div class="w3-col m6">
            <a href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm" target="_blank" class="w3-button w3-padding-large w3-dark-grey" style="width:98.5%">Demo</a>
          </div>
          <div class="w3-col m6">
            <a href="https://www.w3schools.com/w3css/w3css_templates.asp" class="w3-button w3-padding-large w3-dark-grey" style="width:98.5%">More Templates �</a>
          </div>
        </div>
        </div>
        </div>
        
        <div class="w3-container w3-padding-16 w3-card" style="background-color:#eee">
        <h3 class="w3-center">Blog Template</h3>
        <div class="w3-content" style="max-width:800px">
        <img src="W3.CSS_archivos/img_temp_blog.jpg" style="width:98%;margin:20px 0" alt="Blog Template"><br>
        <div class="w3-row">
          <div class="w3-col m6">
            <a href="https://www.w3schools.com/w3css/tryw3css_templates_blog.htm" target="_blank" class="w3-button w3-padding-large w3-dark-grey" style="width:98.5%">Demo</a>
          </div>
          <div class="w3-col m6">
            <a href="https://www.w3schools.com/w3css/w3css_templates.asp" class="w3-button w3-padding-large w3-dark-grey" style="width:98.5%">More Templates �</a>
          </div>
        </div>
        </div>
        </div>`;

    this.applicationBody.appendChild(this.topBar);
    this.applicationBody.appendChild(this.header);
    this.applicationBody.appendChild(this.content1);
    this.applicationBody.appendChild(this.footer);
  }

  connectedCallback() {
    window.onscroll = () => this.controller.onWindowScroll();

    this.appendChild(this.navBar);
    this.appendChild(this.applicationBody);
  }
  showNavigationBar() {
    this.navBar.controller.openNavigationBar();
  }
}
customElements.define('x-application', Application);
export { Application };