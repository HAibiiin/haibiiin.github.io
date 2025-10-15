(function (){var t=document.body.parentElement,e=[],n=null,i=document.body.classList.contains("typora-export-collapse-outline"),r=function(t,e,n){document.addEventListener(t,function(t){if(!t.defaultPrevented)for(var i=t.target;i&&i!=this;i=i.parentNode)if(i.matches(e)){!1===n.call(i,t)&&(t.preventDefault(),t.stopPropagation());break}},!1)};function o(){return t.scrollTop}r("click",".outline-expander",function(t){var e=this.closest(".outline-item-wrapper").classList;return e.contains("outline-item-open")?e.remove("outline-item-open"):e.add("outline-item-open"),c(),!1}),r("click",".outline-item",function(t){var e=this.querySelector(".outline-label");if(location.hash="#"+e.getAttribute("href"),i){var n=this.closest(".outline-item-wrapper").classList;n.contains("outline-item-open")||n.add("outline-item-open"),l(),n.add("outline-item-active")}});var a,s,u=function(){var t=o();n=null;for(var i=0;i<e.length&&e[i][1]-t<60;i++)n=e[i]},l=function(){document.querySelectorAll(".outline-item-active").forEach(t=>t.classList.remove("outline-item-active")),document.querySelectorAll(".outline-item-single.outline-item-open").forEach(t=>t.classList.remove("outline-item-open"))},c=function(){if(n){l();var t=document.querySelector('.outline-label[href="#'+(CSS.escape?CSS.escape(n[0]):n[0])+'"]');if(t)if(i){var e=t.closest(".outline-item-open>ul>.outline-item-wrapper");if(e)e.classList.add("outline-item-active");else{for(var r=(t=t.closest(".outline-item-wrapper")).parentElement.closest(".outline-item-wrapper");r;)r=(t=r).parentElement.closest(".outline-item-wrapper");t.classList.add("outline-item-active")}}else t.closest(".outline-item-wrapper").classList.add("outline-item-active")}};window.addEventListener("scroll",function(t){a&&clearTimeout(a),a=setTimeout(function(){u(),c()},300)});var f=function(){s=setTimeout(function(){!function(){e=[];var t=o();document.querySelector("#write").querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(n=>{var i=n.getAttribute("id");e.push([i,t+n.getBoundingClientRect().y])})}(),u(),c()},300)};window.addEventListener("resize",function(t){s&&clearTimeout(s),f()}),f()
window.onload = function () {
    var targetLi = document.querySelector('div.outline-content');
    if (targetLi) {
        var homepage = '<div class="outline-item"><div style="display: grid; align-items: center; justify-items: center;"><a class="outline-label" style="text-decoration-line: underline; text-decoration-color: #0ea5e9;" href="https://haibiiin.github.io"><p style="font-size:1.125rem; line-height:1.75rem;">返回首页</p></a></div></div>';
        targetLi.insertAdjacentHTML('afterbegin', homepage)

        var qrcode = '<div class="outline-item"><div style="display: grid; align-items: center; justify-items: center;"><img src="https://haibiiin.github.io/resources/chatwithme.jpg" style="zoom: 50%;" referrerpolicy="no-referrer" alt="chatwithme"><span>你好，我是 <a href="http://haibiiin.github.io">HAibiiin</a>，欢迎与我交流</span><span>第一时间获得文章推送</span><span>一起探索技术之外的更多可能。</span></div></div>';
        targetLi.insertAdjacentHTML('beforeend', qrcode)
    }
};
function checkScreenSize() {
    const myElement = document.getElementById('qrcode');
    if (window.innerWidth >= 768) {
      myElement.style.display = 'none';
    } else {
      myElement.style.display = 'flex';
    }
  }
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
})();