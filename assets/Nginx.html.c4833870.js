import{_ as d,o as c,c as o,b as s,d as a,w as i,a as l,e as n,r}from"./app.392b6d9d.js";const t={},u=l(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><h3 id="docker-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a> docker \u90E8\u7F72</h3><p>1\u3001\u4E0B\u8F7D <code>Nginx1.22</code> \u7684docker\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx:1.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u5148\u8FD0\u884C\u4E00\u6B21\u5BB9\u5668\uFF08\u4E3A\u4E86\u62F7\u8D1D\u914D\u7F6E\u6587\u4EF6\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">80</span>:80 --name nginx <span class="token punctuation">\\</span>
-v /home/docker/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
-v /home/docker/nginx/logs:/var/log/nginx  <span class="token punctuation">\\</span>
-v /home/docker/nginx/conf:/etc/nginx <span class="token punctuation">\\</span>
-d nginx:1.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u5C06\u5BB9\u5668\u5185\u7684\u914D\u7F6E\u6587\u4EF6\u62F7\u8D1D\u5230\u6307\u5B9A\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token function">cp</span> nginx:/etc/nginx /home/docker/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4\u3001\u4FEE\u6539\u6587\u4EF6\u540D\u79F0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> nginx conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5\u3001\u505C\u6B62\u5E76\u5220\u9664\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> stop nginx
<span class="token function">docker</span> <span class="token function">rm</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u518D\u6B21\u6267\u884C\u547D\u4EE4\u542F\u52A8docker\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">80</span>:80 --name nginx <span class="token punctuation">\\</span>
-v /home/docker/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
-v /home/docker/nginx/logs:/var/log/nginx  <span class="token punctuation">\\</span>
-v /home/docker/nginx/conf:/etc/nginx <span class="token punctuation">\\</span>
-d nginx:1.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u90E8\u7F72" aria-hidden="true">#</a> docker-compose \u90E8\u7F72</h3><p>1\u3001\u4E0B\u8F7D <code>Nginx1.22</code> \u7684docker\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx:1.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u4E0A\u4F20 <code>conf</code> \u6587\u4EF6\u5230 <code>/home/docker/nginx/conf/</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/docker/nginx/conf
<span class="token function">cp</span> nginx.conf /home/docker/nginx/conf/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u6267\u884Cdocker-compose-env.yml\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>
services:
  nginx:
    image: nginx:1.22
    container_name: nginx
    restart: always
    volumes:
      - /home/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token comment">#\u914D\u7F6E\u6587\u4EF6\u6302\u8F7D</span>
      - /home/docker/nginx/html:/usr/share/nginx/html <span class="token comment">#\u9759\u6001\u8D44\u6E90\u6839\u76EE\u5F55\u6302\u8F7D</span>
      - /home/docker/nginx/log:/var/log/nginx <span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u6302\u8F7D</span>
    ports:
      - <span class="token number">80</span>:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>1\u3001\u8FDB\u5165\u5230\u5BB9\u5668\u5185\u90E8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it  /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> <span class="token punctuation">\\</span> -name <span class="token string">&quot;*.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3\u3001\u6839\u636E\u67E5\u627E\u7ED3\u679C\uFF1A</p><p>/etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf</p><h4 id="\u914D\u7F6E\u6587\u4EF6\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u4F8B\u5B50" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u4F8B\u5B50</h4>`,30),p=n("1\u3001"),v=n("nginx\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4F8B\u5B50-nginx.conf"),m=n("2\u3001"),h=n("nginx\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4F8B\u5B50-default.conf");function g(b,x){const e=r("RouterLink");return c(),o("div",null,[u,s("p",null,[p,a(e,{to:"/handbook/assets/nginx.conf.html"},{default:i(()=>[v]),_:1})]),s("p",null,[m,a(e,{to:"/handbook/assets/default.conf.html"},{default:i(()=>[h]),_:1})])])}var f=d(t,[["render",g],["__file","Nginx.html.vue"]]);export{f as default};
