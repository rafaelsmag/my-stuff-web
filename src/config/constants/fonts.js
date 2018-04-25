const type = {
  light: {
    // fontFamily: 'sans-serif-light'
  },
  regular: {
    // fontFamily: 'sans-serif'
  },
  medium: {
    // fontFamily: 'sans-serif-medium'
  }
}

const size = {
  h1: '42px',
  h2: '36px',
  h3: '28px',
  h4: '22px',
  h5: '20px',
  h6: '19px',
  input: '15px',
  regular: '17px',
  button: '14px',
  secondaryButton: '12px',
  medium: '15px',
  small: '13px',
  tiny: '11px',
  xs: '8px'
}

const lineHeight = {
  boost: '24px',
  regular: '20px',
  small: '16px'
}

const style = {
  navbarTitle: {
    ...type.medium,
    fontSize: size.h5
  },
  h1: {
    fontSize: size.h1
  },
  h2: {
    fontSize: size.h2
  },
  h3: {
    ...type.light,
    fontSize: size.h3
  },
  h4: {
    ...type.light,
    fontSize: size.h4
  },
  h5: {
    fontSize: size.h5
  },
  h6: {
    ...type.regular,
    fontSize: size.h6
  },
  formTitle: {
    ...type.regular,
    fontSize: size.h4
  },
  medium: {
    ...type.medium,
    fontSize: size.button
  },
  secondaryButton: {
    ...type.medium,
    fontSize: size.secondaryButton
  },
  heavyNormal: {
    ...type.medium,
    fontSize: size.regular
  },
  normal: {
    ...type.regular,
    fontSize: size.regular,
    lineHeight: lineHeight.regular
  },
  description: {
    ...type.regular,
    fontSize: size.medium,
    lineHeight: lineHeight.regular
  },
  heavyDescription: {
    ...type.medium,
    fontSize: size.medium
  },
  input: {
    ...type.regular,
    fontSize: size.input
  },
  footnote: {
    ...type.regular,
    fontSize: size.small
  },
  footnoteHeavy: {
    ...type.medium,
    fontSize: size.small
  },
  detail: {
    ...type.regular,
    fontSize: size.tiny
  },
  detailHeavy: {
    ...type.medium,
    fontSize: size.tiny
  }
}

export const Fonts = {
  lineHeight,
  size,
  style,
  type
}
