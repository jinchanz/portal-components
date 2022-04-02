
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulButtonMeta: ComponentMetadata = {
  "componentName": "ColorfulButton",
  "title": "ColorfulButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  category: "自定义",
  group: "精选组件",
  "npm": {
    "package": "@ablula/portal-components",
    "version": "0.1.0",
    "exportName": "ColorfulButton",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "ColorSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content",
            "zh-CN": "content"
          }
        },
        "name": "content",
        defaultValue: "this is a content",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "ColorfulButton",
    "screenshot": "",
    "schema": {
      "componentName": "ColorfulButton",
      "props": {
        content: "this is a content 123"
      }
    }
  }
];

export default {
  ...ColorfulButtonMeta,
  snippets
};
