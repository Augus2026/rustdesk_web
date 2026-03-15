# RustDesk Web Client

RustDesk Web 的 TypeScript 模块化客户端实现。

## 项目结构

```
v2/
├── js/
│   ├── modules/           # 主要的模块化代码
│   │   ├── client/       # 客户端逻辑
│   │   ├── config/       # 配置管理
│   │   ├── input/        # 输入处理
│   │   ├── network/      # 网络连接
│   │   ├── protobuf/     # Protobuf 消息定义
│   │   ├── ui/           # UI 组件
│   │   ├── utils/        # 工具函数
│   │   └── video/        # 视频处理
│   ├── protobuf/         # 原始 Protobuf 定义
│   └── dist/             # 编译输出目录
├── index.html            # 主 HTML 文件
├── package.json          # npm 配置
├── tsconfig.json         # TypeScript 配置
└── README.md            # 本文档
```

## 安装依赖

```bash
npm install
```

## 开发

### 编译 TypeScript

```bash
npm run build
```

### 监听模式编译

```bash
npm run build:watch
# 或
npm run dev
```

## 主要模块

### 客户端模块

- **[client/rustdesk-client.ts](js/modules/client/rustdesk-client.ts)**: RustDesk 客户端主类
- **[client/state-manager.ts](js/modules/client/state-manager.ts)**: 状态管理

### 网络模块

- **[network/websocket.ts](js/modules/network/websocket.ts)**: WebSocket 连接管理
- **[network/connection.ts](js/modules/network/connection.ts)**: 连接状态管理

### 视频模块

- **[video/yuv-decoder.ts](js/modules/video/yuv-decoder.ts)**: YUV 视频解码
- **[video/video-processor.ts](js/modules/video/video-processor.ts)**: 视频处理
- **[video/canvas-renderer.ts](js/modules/video/canvas-renderer.ts)**: Canvas 渲染

### 输入模块

- **[input/keyboard.ts](js/modules/input/keyboard.ts)**: 键盘输入处理
- **[input/input-mapper.ts](js/modules/input/input-mapper.ts)**: 输入映射

### 配置模块

- **[config/settings.ts](js/modules/config/settings.ts)**: 应用设置
- **[config/storage.ts](js/modules/config/storage.ts)**: 本地存储管理

### Protobuf 模块

- **[protobuf/message.ts](js/modules/protobuf/message.ts)**: 主消息协议
- **[protobuf/rendezvous.ts](js/modules/protobuf/rendezvous.ts)**: 连接协议
- **[protobuf/video-formats.ts](js/modules/protobuf/video-formats.ts)**: 视频格式定义

## 使用示例

```typescript
import { RustDeskClient, Settings } from './js/modules';

// 初始化客户端
const client = new RustDeskClient({
  canvas: document.getElementById('remote-screen') as HTMLCanvasElement,
});

// 连接到远程主机
client.connect('peer-id-here', 'password-here');
```

## 技术栈

- **TypeScript**: 类型安全的 JavaScript
- **Protobuf**: 高效的二进制序列化
- **WebSocket**: 实时网络通信
- **Canvas API**: 视频渲染

## 许可证

MIT
