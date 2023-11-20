---
lang: zh-CN
title: 手势识别
---

## 处理手势
```js
handleResults(handsRes) {
  // 可检测到多个手势，需要设置参数
  // categoryName 手势名称
  const {gestures} = handsRes;
  const isPhotoGes = gestures.some((v) =>
    v.some((vv) => vv.categoryName === "Victory") // ✌🏻
  );
  const isVideoGes = gestures.some((v) =>
    v.some((vv) => vv.categoryName === "Thumb_Up") // 👍🏻
  );
}
```