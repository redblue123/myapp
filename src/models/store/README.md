在 Umi 项目中，models/ 目录主要用于存放 dva（Umi 的数据流）的 model 文件。这些 model 文件用于管理全局状态，确保应用中的数据在不同的组件和页面之间保持同步和一致性。

dva 是基于 Redux 和 dva-core 实现的轻量级数据流解决方案，它简化了 Redux 的使用，并提供了更易于理解和使用的 API。在 dva 中，model 是一个核心概念，它定义了数据的结构、初始状态、更新逻辑以及可能存在的副作用（effects）。

具体来说，一个 model 文件通常包含以下几个部分：

namespace：命名空间，用于在全局状态中唯一标识该 model。
state：定义 model 的初始状态。
reducers：定义如何更新 state 的函数。当某个 action 被触发时，对应的 reducer 函数会被调用，根据传入的 payload 更新 state。
effects：处理异步逻辑或副作用的函数。它们可以触发 actions，或者执行其他异步操作，如数据请求。
通过将状态管理逻辑集中在 model 文件中，开发者可以更清晰地了解数据的流动和变化，从而更容易地维护和调试应用。此外，通过使用 dva 和 model，Umi 项目可以更方便地实现跨页面和组件的数据共享和状态同步。

在 Umi 项目中，开发者通常会根据业务需求创建多个 model 文件，每个文件对应一个或多个相关的数据域。这样，通过合理地组织和管理 model 文件，可以有效地控制全局状态，提升应用的性能和可维护性。
store 中的入口文件index.js 的作用是组合modules中所有的子模块, 并导出stroe
reduxjs/toolkit -库的作用是简化代码逻辑
react-redux 中间建 用来连接redux 和 react
models下的index.ts 是一个store入口文件