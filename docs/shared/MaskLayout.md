# MaskLayout 背景框

## 效果展示

其实就是一个深色的背景框.

![alt text](assets/MaskLayout/image.png)

## 代码演示

```tsx
const Index = () => {
  return (
    <MaskLayout>
      <View className="content-wrapper">
        <View className="content-main">
          <Image src={image} width={340} height={340}></Image>
          <Text
            style={{
              lineHeight: 1.5,
              fontSize: "32rpx",
              margin: "30rpx 0rpx",
            }}
          >
            {context}
          </Text>
          <Button
            shape="round"
            style={{
              backgroundColor: "#FFD77B",
              width: "542rpx",
            }}
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </View>
      </View>
    </MaskLayout>
  );
};
```

## Props

|   参数   |       类型        | 默认值 |   说明   |
| :------: | :---------------: | :----: | :------: |
| children | `React.ReactNode` |        | 内部元素 |
| onClick  |   `() => void`    |        | 点击事件 |
