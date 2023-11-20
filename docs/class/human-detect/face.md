---
lang: zh-CN
title: 人脸识别
---

## 处理脸部
```js
handleResults(faceRes) {
  // 可检测到多个人脸，需要设置参数
  // score 人脸相似度
  const {detections} = faceRes;
  const hasFace = detections.some((v) =>
    v.categories.some((vv) => vv.score > 0.7)
  );
}
```