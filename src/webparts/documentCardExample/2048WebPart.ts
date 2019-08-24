import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Snake from './components/App';


export default class SnakeWebPart extends BaseClientSideWebPart<{}> {

  public render(): void {
    const element: React.ReactElement<{} > = React.createElement(
      Snake
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
}
