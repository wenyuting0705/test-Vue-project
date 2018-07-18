// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
  parser: 'babel-eslint'
  },
  env: {
  browser: true,
  },
  extends: [
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  'plugin:vue/essential',
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  'standard'
  ],
  // required to lint *.vue files
  plugins: [
  'vue'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': 'off', //结尾使用额外的逗号
    'quote-props': 'off', //只对非法标识符的属性使用引号
    // 'no-trailing-spaces': 'off' //禁止行尾空格
    'vue/html-self-closing': 'off', //
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'import/no-dynamic-require': 'off',
    'linebreak-style': 'off', //制统一的换行符
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'global-require': 'off', //全局的require
    'no-debugger': process.env.NODE_ENV === 'production'? 2 : 0,
    'no-alert': 'off',
    'no-console': 'off', //暂时先关掉，因为prod也有可能需要输入
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off', //关闭 不建议使用 for-in for-of
    "guard-for-in": 0, //for in循环要用if语句过滤
    'no-bitwise': ["error", { "allow": ["~"] }],
    "no-restricted-properties": [2, {
      "object": "disallowedObjectName",
      "property": "disallowedPropertyName"
    }],
    'consistent-return':'off',
    'no-unused-expressions':'off',// 允许使用三元运算符,
    'no-nested-ternary':'off',
    'no-plusplus':'off',// 允许使用--，++等
    'no-useless-concat':'off',// 允许代码使用+拼接git
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }]
  },
  }






