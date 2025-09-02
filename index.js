// 引入所需模块
const express = require('express');
const app = express();
const port = 3000;

// 模拟员工数据
const employees = [
  {
    id: 1,
    name: '张三',
    position: '前端开发工程师',
    department: '技术部',
    salary: 8000,
    hireDate: '2020-01-15'
  },
  {
    id: 2,
    name: '李四',
    position: '后端开发工程师',
    department: '技术部',
    salary: 9000,
    hireDate: '2019-05-20'
  },
  {
    id: 3,
    name: '王五',
    position: '产品经理',
    department: '产品部',
    salary: 10000,
    hireDate: '2018-08-10'
  },
  {
    id: 4,
    name: '赵六',
    position: 'UI设计师',
    department: '设计部',
    salary: 8500,
    hireDate: '2021-03-05'
  }
];

// 配置JSON解析
app.use(express.json());

// 员工列表接口
app.get('/api/employees', (req, res) => {
  try {
    // 可以根据查询参数添加过滤功能
    const { department, position } = req.query;
    let result = [...employees];

    // 如果有部门筛选条件
    if (department) {
      result = result.filter(emp => emp.department === department);
    }

    // 如果有职位筛选条件
    if (position) {
      result = result.filter(emp => emp.position === position);
    }

    res.status(200).json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '服务器内部错误'
    });
  }
});

// 单个员工详情接口
app.get('/api/employees/:id', (req, res) => {
  try {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));

    if (!employee) {
      return res.status(404).json({
        success: false,
        error: '未找到该员工'
      });
    }

    res.status(200).json({
      success: true,
      data: employee
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '服务器内部错误'
    });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
  console.log(`员工列表接口: http://localhost:${port}/api/employees`);
  console.log(`单个员工接口示例: http://localhost:${port}/api/employees/1`);
  console.log(`按部门筛选示例: http://localhost:${port}/api/employees?department=技术部`);
});
