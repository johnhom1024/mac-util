/*
 * @Date: 2022-03-07 16:58:06
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */

module.exports = {
    // 符合angular的校验规则
    extends: ["@commitlint/config-conventional"],
    
    rules: {
      "type-enum": [
        2,
        "always",
        [
          "feat",
          "fix",
          "build",
          "refactor",
          "style",
          "docs",
          "chore",
          "ci",
          "perf",
          "test",
        ],
      ],
      "type-case": [0],
      "type-empty": [0],
      "scope-empty": [0],
      "scope-case": [0],
      "subject-full-stop": [0, "never"],
      "subject-case": [0, "never"],
      "header-max-length": [0, "always", 72],
    },
    prompt: {
      messages: {
        skip: "回车跳过",
        max: "upper %d chars",
        min: "%d chars at least",
        emptyWarning: "内容不能为空",
        upperLimitWarning: "over limit",
        lowerLimitWarning: "below limit",
      },
      questions: {
        type: {
          description: "选择一个commit提交类型",
          enum: {
            feature: {
              description: "新增了什么功能",
              title: "Features",
              emoji: "✨",
            },
            fix: {
              description: "修补某功能的bug",
              title: "Bug Fixes",
              emoji: "🐛",
            },
            docs: {
              description: "仅文档新增/改动",
              title: "Documentation",
              emoji: "📚",
            },
            style: {
              description: "样式修改",
              title: "Styles",
              emoji: "💎",
            },
            refactor: {
              description: "重构某个功能",
              title: "Code Refactoring",
              emoji: "📦",
            },
            perf: {
              description: "性能, 体验优化",
              title: "Performance Improvements",
              emoji: "🚀",
            },
            test: {
              description: "测试某功能、新增测试用例、更新现有测试",
              title: "Tests",
              emoji: "🚨",
            },
            build: {
              description: "修改项目构建系统(例如 webpack，cli 的配置等)的提交",
              title: "Builds",
              emoji: "🛠",
            },
            ci: {
              description: "主要目的是修改项目继续集成流程",
              title: "Continuous Integrations",
              emoji: "⚙️",
            },
            chore: {
              description: "构建过程或辅助工具的变动",
              title: "Chores",
              emoji: "♻️",
            },
          },
        },
        scope: {
          description: "填写改动范围（修改了哪些组件、文件名）",
        },
        subject: {
          description: "大概描述改动内容",
        },
        body: {
          description: "可提供更详细的说明",
        },
        isBreaking: {
          description: "是否为破坏性修改？如接口删除、逻辑迁移、接口参数减少等",
        },
        isIssueAffected: {
          description: "改动修复了哪个问题？",
        },
      },
    },
  };
  