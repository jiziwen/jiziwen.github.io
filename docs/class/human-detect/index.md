---
lang: zh-CN
title: 环境准备
---

## 识别库准备
[库链接](https://mediapipe-studio.webapps.google.com/studio/demo/face_detector)
```bash
yarn add @mediapipe/tasks-vision
```
::: warning 注意
@mediapipe/tasks-vision需要高版本node，最好16+
:::
引入
```js
import {
  FilesetResolver, // 文件加载器
  GestureRecognizer, // 手势处理构造器
  FaceDetector, // 人脸处理构造器
} from "@mediapipe/tasks-vision";
// 初始化模型加载
async createGestureRecognizer() {
  // 针对视觉任务加载WASM模块
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
  );
  // 初始化手势识别器
  this.gestureRecognizer = await GestureRecognizer.createFromOptions(
    vision,
    {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-tasks/gesture_recognizer/gesture_recognizer.task", // 模型资源路径
        delegate: "GPU", // 执行环境
      },
      runningMode: "VIDEO", // 输入源视频流
    }
  );
  // 初始化人脸识别器
  this.faceRecognizer = await FaceDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
      delegate: "GPU",
    },
    runningMode: "VIDEO",
  });
},
// 获取视频流
fnOpen() {
  if (typeof window.stream === "object") return;
  clearTimeout(device);
  device = setTimeout(() => {
    clearTimeout(device);
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then(this.fnSuccess)
      .catch(this.fnError);
  }, 500);
},
async fnSuccess(stream) {
  window.stream = stream;
  this.videoEl.srcObject = stream;
  this.videoEl.play();
  // 监听到视频准备完毕执行检测
  this.videoEl.addEventListener("loadeddata", this.main);
},
fnError(error) {
  console.log(error);
  alert("视频媒体流获取错误" + error);
},
async main() {
  let nowInMs = Date.now();
  const gestureRecognizer = this.gestureRecognizer.recognizeForVideo(
    this.videoEl,
    nowInMs
  );
  const faceRecognizer = this.faceRecognizer.detectForVideo(
    this.videoEl,
    nowInMs
  );
  const [results1, results2] = await Promise.all([gestureRecognizer, faceRecognizer])
  // 拿到处理结果渲染页面
  console.log(this.handleResults(results1, results2););
  this.rafID = requestAnimationFrame(this.main);
},
// 关闭录像
fnClose() {
  this.videoEl.pause();
  this.rafID && cancelAnimationFrame(this.rafID);
  if (typeof window.stream === "object") {
    this.videoEl.srcObject = null;
    window.stream.getTracks().forEach((track) => track.stop());
    window.stream = "";
    this.videoEl.srcObject = null;
  }
},
```