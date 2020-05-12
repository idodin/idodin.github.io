---
layout: page-default
heading: Blog
title: Blog
subheading: A whole bunch of random stuff!
description: This blog covers a whole bunch of different things that I'm interested about - I hope that by reading this you get a bit more insight into who I am!
color: grad-blog
image: /images/icons/logo.png
permalink: /blog
---

{% include colorful-header.html %}

<div class="home-container">
  <div class="home-articles">
    <div class="home-wrapper">
      <div class="gem-box">
        <div class="competitive-programming" onclick="location.href='{{ site.baseurl }}/compete';">
          <img src="/images/icons/competitive-programming.svg" />
          <h4>Competitive Programming</h4>
          <p>Read about my thoughts on Competitive Programming, how you can get started and what its benefits and limitations are!</p>
          {% for post in site.posts %}
            {% if post.categories contains 'software' %}
              {% if post.class contains 'Competitive Programming' %}
                {% capture compete_count%} {{ compete_count | plus: 1 }} {% endcapture %}
              {% endif %}
            {% endif %}
          {% endfor %}
          <p class="no_of_posts">{{ compete_count }} posts</p>
        </div>
        <div class="web-development" onclick="location.href='{{ site.baseurl }}/web-development';">
            <img src="/images/icons/development.svg" />
            <h4>Web Development</h4>
            <p>Learn more about various Web Development and Cloud topics!</p>
            {% for post in site.posts %}
            {% if post.categories contains 'software' %}
              {% if post.class contains 'Web Development' or post.class contains 'Cloud' %}
                {% capture web_development_count %} {{ web_development_count | plus: 1 }} {% endcapture %}
              {% endif %}
            {% endif %}
          {% endfor %}
          <p class="no_of_posts">{{ web_development_count }} posts</p>
        </div>
        <div class="internationalism" onclick="location.href='{{ site.baseurl }}/internationalism';">
            <img src="/images/icons/internationalism.svg" />
            <h4>Internationalism</h4>
            <p>My thoughts about living in a global, diverse society: its struggles and its strengths.</p>
            {% for post in site.posts %}
            {% if post.categories contains 'thoughts' %}
              {% if post.class contains 'Internationalism' or post.class contains 'Identity' or post.class contains 'Culture' %}
                {% capture internationalism_count %} {{ internationalism_count | plus: 1 }} {% endcapture %}
              {% endif %}
            {% endif %}
          {% endfor %}
          <p class="no_of_posts">{{ internationalism_count }} posts</p>
        </div>
        <div class="internships" onclick="location.href='{{ site.baseurl }}/internships';">
          <img src="/images/icons/internships.svg" />
          <h4>Internships</h4>
          <p>My thoughts on my own internships and on the grind to find them!</p>
          {% for post in site.posts %}
            {% if post.categories contains 'software' %}
              {% if post.class contains 'Internships' %}
                {% capture internship_count %} {{ internships_count | plus: 1 }} {% endcapture %}
              {% endif %}
            {% endif %}
          {% endfor %}
          <p class="no_of_posts">{{ internship_count }} posts</p>
        </div>
        <div class="travel" onclick="location.href='{{ site.baseurl }}/travel';">
          <img src="/images/icons/travel.svg" />
          <h4>Travel</h4>
          <p>Fun trips I took!</p>
          {% for post in site.posts %}
            {% if post.categories contains 'travel' %}
                {% capture travel_count %} {{ travel_count | plus: 1 }} {% endcapture %}
            {% endif %}
          {% endfor %}
          <p class="no_of_posts">{{ travel_count }} posts</p>
        </div>
      </div>
    </div>
  </div>
</div>