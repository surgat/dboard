module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Основные правила ESLint (http://eslint.org/docs/rules/)

    // Скобки вокруг аргумента
    'arrow-parens': 'off',
    'class-methods-use-this: off': 'off',
    // Запятые в конце перечислений (объектов и массивов)
    // 'comma-dangle': 'off',
    // Указание значения при return
    'consistent-return': 'off',
    // Использование require только в глобальном scope
    'global-require': 'off',
    // Минимальная длина имен (по-умолчанию от 2 символов)
    'id-length': ['error', { exceptions: ['_', 'x', 'y', 'i', 'a', 'b'] }],
    // Отступы
    'indent': ['error', 2, { SwitchCase: 1 }],
    // Максимальная длина строки кода
    'max-len': ['warn', 150],
    // Писать с большой буквы только имена классов (конструкторов)
    'new-cap': ['error', { capIsNewExceptions: ['SortableContainer', 'SortableElement', 'List', 'Map', 'Set'] }],
    // Запрет использолвания alert
    'no-alert': 'error',
    // Запрет использования console
    'no-console': 'off',
    // Запрет использования debugger
    'no-debugger': 'warn',
    // Запрет использования нескольких операторов в строке без использования скобок
    'no-mixed-operators': 'off',
    // Запрет использования оператора ++
    'no-plusplus': 'off',
    // Запрет использвания присвоения внутри return, разрешено со скобками
    'no-return-assign': ['warn', 'except-parens'],
    // Запрет подчеркиваний по краям имен
    'no-underscore-dangle': 'off',
    // Запрет пустых блоков
    'no-empty': ['warn', { 'allowEmptyCatch': true }],
    // Отступы от фигурных скобок объектов
    'object-curly-spacing': ['error', 'always'],
    // Кавычки вокруг ключей объектов
    'quote-props': ['error', 'consistent'], // единообразно с остальными ключами объекта
    // Отступы от фигурных скобок шаблонных строк
    'template-curly-spacing': ['error', 'always'],
    // Использование темплейтов предпочтительно
    'prefer-template': 'off',
    // This rule enforces consistent line breaks inside parentheses of function parameters or arguments
    // (отключено из-за комментов в prop-types)
    // 'function-paren-newline': 'off',
    // camelcase
    'camelcase': 'off',

    // import (https://github.com/benmosher/eslint-plugin-import#rules)

    // Обязательное использование расширений при импорте файлов
    // 'import/extensions': ['error', { 'js': 'never' }, { 'ts': 'never' }],

    // Запрет использования зависимостей, не объявленных в package.json (отключить если используются алиасы)
    // 'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/webpack.*.js'] }],

    // Запрет использования зависимостей, которые не могут быть разрешены через nodeJS
    'import/no-unresolved': 'off',
    // Использовать export default в модулях с одним export
    'import/prefer-default-export': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/ban-ts-ignore": "off",

    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    // Отступы от фигурных скобок jsx-свойств
    'react/jsx-curly-spacing': ['error', { 'when': 'always', 'children': true }],
    'react/jsx-props-no-spreading': 'off',
    // Строгий порядок методов компонента (очень сильно мешает в разработке)
    'react/sort-comp': 'off',
    // Избегать использования индекса массива в качестве key (для правильной перерисовки при изменении массива)
    'react/no-array-index-key': 'off',
    // Избегать использования findDOMNode
    'react/no-find-dom-node': 'warn',
    // Избегать определине нескольких компонентов в одном файле
    'react/no-multi-comp': ['warn', { ignoreStateless: true }],

    'max-classes-per-file': 'off',
    'lines-between-class-members': 'off',
    'react/static-property-placement': 'off',

    // jsx-a11y (https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules)
    // (Устаревшее правило, скорее всего надо будет убрать при следующем апдейте)
    'jsx-a11y/href-no-hash': 'off',
    // Обязательное указания for для label
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    // Запрет использования автофокуса
    'jsx-a11y/no-autofocus': 'off',
    // Запрет интерактивных событий на статических элементах (div, span)
    'jsx-a11y/no-static-element-interactions': 'off',
    // Запрет интерактивных событий на неинтерактивных элементах
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    // Запрет положительных значений tabindex (для соответствия порядка верстки и расположения элементов)
    'jsx-a11y/tabindex-no-positive': 'warn',
    // Запрет на исользование медиа без заголовков
    'jsx-a11y/media-has-caption': 'off',
    // Обязательный эвент для клавиатуры для людей с ограниченными возможностями
    'jsx-a11y/click-events-have-key-events': 'off',
    // Проверяет href на ссылке
    'jsx-a11y/anchor-is-valid': 'off',
  }
};