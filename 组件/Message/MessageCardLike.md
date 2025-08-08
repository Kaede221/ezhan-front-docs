# MessageCardLike 收到的点赞的卡片

## 效果展示

![alt text](assets/1754632849682-image.png)

## 代码演示

```tsx
const Index = () => {
  return __DIANZAN_DATA.map((item, index) => (
    <MessageCardLike
      key={`dianzan-card-${index}`}
      avatar={item.avatar}
      nickName={item.nickName}
      time={item.time}
      topic={item.topic}
      comment={item.comment}
      image={item.image}
    ></MessageCardLike>
  ));
};
```

## Props

|    参数    |     类型     | 默认值 |      说明      |
| :--------: | :----------: | :----: | :------------: |
|   avatar   |   `string`   |        |    用户头像    |
|  nickName  |   `string`   |        |     用户名     |
|    time    |   `string`   |        |      时间      |
| onClick \* | `() => void` |        | 点击卡片的事件 |
|  image \*  |   `string`   |        |    图片链接    |
|   topic    |   `string`   |        |  赞的文章内容  |
|  comment   |   `string`   |        |    评论内容    |
