# MessageItem 单个聊天对话对象

## 效果展示

![alt text](assets/1754565980781image.png)

## 代码演示

> 该组件不建议单独使用, 请直接使用 MessageList

```tsx
const Index = () => {
  return (
    <View>
      {__DATA.map((item, index) => (
        <MessageItem
          key={`message-item-${index}`}
          lastMessageContent={item.lastMessageContent}
          nickName={item.nickName}
          showTimeString={item.showTimeString}
          unreadCounter={item.unreadCounter}
          avatarUrl={item.avatarUrl}
        />
      ))}
    </View>
  );
};
```

## Props

|        参数        |   类型   | 默认值 |       说明       |
| :----------------: | :------: | :----: | :--------------: |
|    avatarUrl \*    | `string` |        |     头像链接     |
|      nickName      | `string` |        |    联系人昵称    |
|   showTimeString   | `string` |        |    显示的时间    |
| lastMessageContent | `string` |        | 最后一条信息内容 |
|   unreadCounter    | `string` |        |   未读消息数量   |
