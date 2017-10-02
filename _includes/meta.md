<h1 id='page-title'>{{page.title}}</h1>
<div class="meta_wrapper">
    <a class='author'> {{page.author}} </a>
    <a class='blog-date'> {{page.date | date: "%B %e, %Y"}}</a>
    <ul class="tag-list">
    {% for tag in page.tags %}
        <li style="display: inline;">
            <a class="tag" href="/tag/{{ tag }}">{{ tag }}</a>
        </li>
    {% endfor %}
    </ul>
    
    <hr style="margin: 0;">
    
</div>