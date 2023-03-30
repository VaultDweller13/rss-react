import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  element: HTMLElement;
};
export default class Modal extends React.Component<Props> {
  render() {
    return ReactDOM.createPortal(<p>Game added!</p>, this.props.element);
  }
}
