import React from "react";
import { View, StyleSheet, Image, Animated, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: "#e1e4e8",
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e1e4e8",
  },
});

const ProgressImage = (props: any) => {
  const thumbnailAnimated = new Animated.Value(0.3);
  const imageAnimated = new Animated.Value(0.3);
  const { thumbnailSource, source, style } = props;
  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={[styles.container, { ...props.style }]}>
      <Animated.Image
        {...props}
        source={thumbnailSource}
        style={[style, { borderRadius: 10, opacity: thumbnailAnimated }]}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      />
      <Animated.Image
        {...props}
        source={source}
        style={[
          styles.imageOverlay,
          { borderRadius: 10, opacity: imageAnimated },
          style,
        ]}
        onLoad={onImageLoad}
      />
    </View>
  );
};
export default ProgressImage;
