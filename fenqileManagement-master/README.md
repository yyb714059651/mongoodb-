# TaskManagement
基于express和mongodb的任务管理系统

> 使用nodejs和mongodb做的一个小项目，tasks.js路由文件包含了对mongodb的curl操作。

# 目录结构

| 路径          | HTTP方法 | 说明       |
| ----------- | ------ | -------- |
| /tasks      | GET    | 显示任务列表   |
| /tasks/new  | GET    | 显示新增任务表单 |
| /tasks/edit | GET    | 显示修改任务表单 |
| /tasks      | POST   | 新增任务     |
| /tasks      | PUT    | 修改任务     |
| /tasks      | DELETE | 删除任务     |


# 启动项目

```
SET DEBUG=blog:* & npm start
```

# 具体说明

http://blog.csdn.net/koastal/article/details/53665849