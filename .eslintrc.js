module.exports = {
    // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有   "root": true，它就会停止在父级目录中寻找。
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        // 对Babel解析器的包装使其与 ESLint 兼容。
        parser: 'babel-eslint',
        // 代码是 ECMAScript 模块
        sourceType: 'module'
    },
    env: {
        // 预定义的全局变量，这里是浏览器环境
        browser: true,
        node: true,
        es6: true,
    },
    // 扩展风格
    extends: [ 'eslint:recommended'],
    // 规则的细节请到ESLint官方网站查看http://eslint.org/docs/rules/
    rules: {
        // // 强制第一个属性的位置(属性换行)
        // 'vue/first-attribute-linebreak': [2, {
        //     // 单行时，第一属性前不允许使用换行符
        //     singleline: 'beside',
        //     // 多行时，第一属性前必须使用换行符
        //     multiline: 'below',
        // }],
        // // 强制每行的最大属性数
        // 'vue/max-attributes-per-line': [2, {
        //     // 单行时可以接收最大数量
        //     singleline: 10,
        //     // 多行时可以接收最大数量
        //     multiline: {
        //         max: 1,
        //     },
        // }],
        "no-debugger": 2,//禁止使用debugger
        // "no-console": 2,//禁止使用console
        "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
    }
}
