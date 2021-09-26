import React from "react";
import styles from "./Container.module.css";

type PropTypes = {
  children: React.ReactNode;
  background?: "white" | "grey" | "orange" | null;
  fontColor?: "white" | "grey" | "orange" | null;
  center?: boolean | null;
  flex?: boolean | null;
  padding?: "large" | "medium" | "small" | "page" | null;
  borderRadius?:
    | "large"
    | "medium"
    | "small"
    | "bottomSmall"
    | "bottomMedium"
    | "bottomLarge"
    | null;
  border?: "outlined" | "outlinedTop";
  shadow?: "default";
  className?: string;
  margin?: "large" | "medium" | "small" | null;
  marginBottom?: "large" | "medium" | "small" | null;
  marginRight?: "large" | "medium" | "small" | null;
  paddingLeft?: "large" | "medium" | "small" | null;
  paddingBottom?: "large" | "medium" | "small" | null;
  marginLeft?: "large" | "medium" | "small" | null;
  marginTop?: "xlarge" | "large" | "medium" | "small" | null;
  marginRightFirstChild?: "large" | "medium" | "small" | null;
  maxWidth?: "xlarge" | "large" | "medium" | "small" | null;
  width?: "xlarge" | "large" | "medium" | "small" | "width" | null;
  overflow?: "hidden" | null;
  position?: "relative" | null;
  style?: any;
};

const shadowClasses = {
  default: styles.shadow,
};

const backgroundClasses = {
  white: styles.white,
  grey: styles.grey,
  orange: styles.orange,
};

const colorClasses = {
  white: styles.whiteFont,
  grey: styles.greyFont,
  orange: styles.orangeFont,
};

const paddingClasses = {
  page: styles.pagePadding,
  large: styles.largePadding,
  medium: styles.mediumPadding,
  small: styles.smallPadding,
};

const paddingLeftClasses = {
  large: styles.largePaddingLeft,
  medium: styles.mediumPaddingLeft,
  small: styles.smallPaddingLeft,
};

const paddingBottomClasses = {
  large: styles.largePaddingBottom,
  medium: styles.mediumPaddingBottom,
  small: styles.smallPaddingBottom,
};

const borderRadiusClasses = {
  large: styles.largeBorderRadius,
  medium: styles.mediumBorderRadius,
  small: styles.smallBorderRadius,
  bottomSmall: styles.bottomSmallBorderRadius,
  bottomMedium: styles.bottomMediumBorderRadius,
  bottomLarge: styles.bottomLargeBorderRadius,
};

const marginClasses = {
  large: styles.largeMargin,
  medium: styles.mediumMargin,
  small: styles.smallMargin,
};

const marginBottomClasses = {
  large: styles.largeMarginBottom,
  medium: styles.mediumMarginBottom,
  small: styles.smallMarginBottom,
};

const marginRightClasses = {
  large: styles.largeMarginRight,
  medium: styles.mediumMarginRight,
  small: styles.smallMarginRight,
};

const marginLeftClasses = {
  large: styles.largeMarginRight,
  medium: styles.mediumMarginRight,
  small: styles.smallMarginRight,
};

const marginTopClasses = {
  xlarge: styles.xlargeMarginTop,
  large: styles.largeMarginTop,
  medium: styles.mediumMarginTop,
  small: styles.smallMarginTop,
};

const maxWidthClasses = {
  xlarge: styles.xLargeMaxWidth,
  large: styles.largeMaxWidth,
  medium: styles.mediumMaxWidth,
  small: styles.smallMaxWidth,
};

const widthClasses = {
  xlarge: styles.xLargeWidth,
  large: styles.largeWidth,
  medium: styles.mediumWidth,
  small: styles.smallWidth,
  fullWidth: styles.fullWidth,
};

const marginRightFirstChildClasses = {
  small: styles.smallmarginRightFirstChild,
  medium: styles.mediummarginRightFirstChild,
  large: styles.largemarginRightFirstChild,
};

const borderClasses = {
  outlined: styles.outlinedBorder,
  outlinedTop: styles.outlinedBorderTop,
};

const overflowClasses = {
  hidden: styles.overflowHidden,
};

const positionClasses = {
  relative: styles.positionRelative,
};

const Container: React.FC<PropTypes> = ({
  children,
  background,
  fontColor,
  center,
  padding,
  paddingBottom,
  paddingLeft,
  shadow,
  borderRadius,
  border,
  className,
  margin,
  marginBottom,
  marginRight,
  marginLeft,
  marginTop,
  marginRightFirstChild,
  maxWidth,
  width,
  overflow,
  position,
  flex,
  style,
}: PropTypes) => {
  return (
    <div
      className={[
        styles.Container,
        background && backgroundClasses[background],
        fontColor && colorClasses[fontColor],
        center && styles.center,
        padding && paddingClasses[padding],
        paddingLeft && paddingLeftClasses[paddingLeft],
        paddingBottom && paddingBottomClasses[paddingBottom],
        borderRadius && borderRadiusClasses[borderRadius],
        shadow && shadowClasses[shadow],
        margin && marginClasses[margin],
        marginBottom && marginBottomClasses[marginBottom],
        marginRight && marginRightClasses[marginRight],
        marginLeft && marginLeftClasses[marginLeft],
        border && borderClasses[border],
        className ? className : "",
        marginTop && marginTopClasses[marginTop],
        border && borderClasses[border],
        marginRightFirstChild &&
          marginRightFirstChildClasses[marginRightFirstChild],
        maxWidth && maxWidthClasses[maxWidth],
        width && widthClasses[width],
        overflow && overflowClasses[overflow],
        position && positionClasses[position],
        flex && styles.flex
      ].join(" ")}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
