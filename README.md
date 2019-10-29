# Ant Design

This repo is forked from [Ant Design repo](https://github.com/ant-design/ant-design) ver 3.24.0

## 📃 Documentation

You can use [the original documentation](https://ant.design/docs/react/introduce).

## ⌨️ Development

Aftter cloning this repo use the following commands to install and start:

```bash
yarn install
yarn start
```

Open your browser and visit http://127.0.0.1:8001 , see more at [Development](https://github.com/ant-design/ant-design/wiki/Development).

## 📦 Install

```bash
yarn add git@gitlab.eventinc.de:eventinc/ant-design.git
```

## 🔨 Usage

```jsx
import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, mountNode);
```

And import each component's style like:

```less
@import 'antd/lib/alert/style/index.less';
```

## 🤝 Contributing

After merging your dev branch into `master`:

- run the following command to compile:
  ```bash
  yarn compile
  ```
- Set new version in `package.json`
- Commit compiled files and `package.json`
- Create tag for the new version
- Push everthing
- Don't forget to update your project's dependency to use the new version
