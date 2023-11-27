import classNames from 'classnames';
import React, { forwardRef } from 'react';

const TextInput = forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>((props, ref) => (
  <input
    {...props}
    ref={ref}
    className={classNames(
      'border-tremor-border focus:outline-none focus:border-tremor-brand border rounded-tremor-default py-2 text-tremor-default shadow-tremor-input',
      props.className,
    )}
  />
));

export default TextInput;
