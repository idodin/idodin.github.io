---
layout: page-doc
title: Competitive Programming
subheading: Learn about Competitive Programming
description: Learn about Competitive Programming, how to get started, various topic guides, problem editorials for problems that I found interesting etc.
color: grad-blog
image: /images/icons/competitive-programming.svg
permalink: /compete
---

<div class="home-container">
  <div class="home-articles">
    <div class="home-wrapper">
      <div class="page-holder">
        <ul>
        {% for post in site.posts %}
          {% if post.categories contains 'software' %}
          		{% if post.class contains 'Competitive Programming' %}
		            <li>
                  <a class="post-link" href="{{ site.baseurl }}{{ post.url }}">
                    <div class="page-treasure-wrapper">
                      <div class="page-treasure-image" >
                        <div style="background-image: url('{{ post.image }}')"></div>
                      </div>
                      <div class="page-treasure">
                        <h2>{{ post.title }}</h2>
                        <p>{{ post.description }}</p>
                      </div>
                    </div>
                  </a>
                </li>
            	{% endif %}
            {% endif %}
        {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>