---
layout: coffee-default
heading: Coffee
title: Coffee
subheading: my love for coffee
description: Read about how I fuel my caffeine dependence here. Coffee doesn't need to be pretentious, just made with love!
color: grad-music
permalink: /coffee
---

<div class="coffee-top-container">
  <div class="coffee-intro-wrapper">
    <p><b>Coffee</b></p>
    <p>If you find yourself here, you either (A) also love coffee (read: have a caffeine problem) or (B) are curious as to why I have a page dedicated to coffee on my personal site. Here, I talk about different roasts I've tried and what recipes I followed to get a taste that I enjoyed out of them. Please note that people's taste differs and so something that's bitter for me might not be bitter for you, something that's sour for your might not be so for me etc. I try to explain why I do some of the various steps I take so that you can learn along the way! (N.b. I am also an amateur and can't compete with your local baristas)!</p>
  </div>
</div>

<div class="home-container coffee-containing-wrapper">
  <div class="home-articles">
    <div class="home-wrapper coffee-wrapper">
        <div class="coffee-box">
          <div class="coffee-video-container">
              {% for post in site.coffee %}
              <!--BOX START -->
              <a href="{{ site.baseurl }}{{ post.url }}" target="_blank"><img src="{{ post.image }}" /><span>NEW</span></a>
              {% endfor %}
          </div>
          <div class="highlight-box">
            <p>I get a lot of questions about what type of gear I have, as a student - here's my caffeine lab:</p>
            <ul>
              <li><a href="https://cafemyriade.com/collections/equipment/products/copy-of-hario-v60-02-white" target="_blank">Hario V60 - Ceramic Coffee Dripper</a></li>
              <li><a href="https://cafemyriade.com/collections/equipment/products/hario-mini-slim-plus-grinder" target="_blank">Hario Mini-Slim - Grinder</a></li>
              <li><a href="https://cafemyriade.com/collections/equipment/products/copy-of-hario-v60-02-kasuya-black-ceramic-dripper-1" target="_blank">Aeropress</a></li>
            </ul>
            <p>Help local businesses like <a href="https://cafemyriade.com/" target="_blank"> Cafe Myriade </a> by purchasing from them!</p>
          </div>
        </div>
    </div>
  </div>
</div>