# Auth Inbox 中英文界面（2026-11-15）

范围：登录/首次设置、收件箱及详情、API密钥、用户与权限、分类/角色标签、常见操作和错误提示。保留Auth Inbox、API/MCP工具名、邮件原文/主题/提取结果/验证码/账号/邮箱/密钥。语言按钮位于登录卡片及已登录页顶部；首次跟随浏览器语言，localStorage authinbox.language记住选择；存储不可用仍可当次切换。document.lang同步。切换不重新登录、不重载、不中断表单/当前页面/选中邮件。

现有fork仍为旧结构，线上实际新版React前端源码从原部署工作区的干净web目录提取，先构建得到与线上相同的index-DiTaeILV.js和index-C6fobaTE.css，再加入i18n。没有同步任何上游后端、数据库迁移或依赖升级。web/package.json为现有前端依赖，新增语言层不引入第三方依赖。

发布：仅替换Worker ASSETS，沿用当前线上完整index.js，SHA256始终为16af9a5f7d8db4f33280f0014e44bd29ad757a7cfdf0ca20e9eb51d1108c6260。不使用根目录旧deploy或任何数据库迁移。原绑定、密钥、兼容日期、模型、Bark、fetch/email/rpcEmail及权限均保留。资源包保留上一版JS/CSS供缓存页面使用。

候选版本5604e5d9-c9da-4f08-94e2-8b535788b3e6，回滚版本e85a44f1-cb7f-4cdd-a052-31a4c6b38244。资产配置API新增返回默认raw_run_worker_first=false；serve_directly=true/base_path=/相同，其余运行配置和全部绑定一致。该false是默认值显式化，不改变路由顺序。

验证：tsc --noEmit及Vite构建通过；React/JSDOM隔离fixture覆盖登录、普通用户、管理员切换，两种语言、默认/记忆语言、输入与选中邮件保留、原始主题/验证码保留、普通用户看不到管理入口、切换不新增请求。所有页面getJson/postJson/deleteJson调用和参数逐一对比未变，api.ts逐字相同，DOMPurify/iframe沙箱保留。未用真实账号创建/删除用户、密钥、授权，未改业务数据。

复现构建：在web目录安装package.json中的现有依赖后运行npm run build；不要运行根目录旧deploy。根目录自动部署工作流仍指向旧后端，本次源码提交与合并提交使用[skip ci]，避免前端提交触发旧后端重建。
