import classNames from 'classnames';
import React, { forwardRef } from 'react';

const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
>((props, ref) => (
  <textarea
    {...props}
    ref={ref}
    className={classNames(
      'border-tremor-border focus:outline-none focus:border-tremor-brand border rounded-tremor-default py-2 text-tremor-default shadow-tremor-input h-48',
      props.className,
    )}
  />
));

export default TextArea;
