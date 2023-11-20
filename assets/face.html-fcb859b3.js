import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-f9fea6ff.js";const t={},p=e(`<h2 id="处理脸部" tabindex="-1"><a class="header-anchor" href="#处理脸部" aria-hidden="true">#</a> 处理脸部</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">handleResults</span><span class="token punctuation">(</span><span class="token parameter">faceRes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 可检测到多个人脸，需要设置参数</span>
  <span class="token comment">// score 人脸相似度</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>detections<span class="token punctuation">}</span> <span class="token operator">=</span> faceRes<span class="token punctuation">;</span>
  <span class="token keyword">const</span> hasFace <span class="token operator">=</span> detections<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    v<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">vv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> vv<span class="token punctuation">.</span>score <span class="token operator">&gt;</span> <span class="token number">0.7</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","face.html.vue"]]);export{d as default};