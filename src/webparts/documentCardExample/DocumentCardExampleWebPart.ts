import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import game from './components/App';


export default class SnakeWebPart extends BaseClientSideWebPart<{}> {

  public render(): void {
    const element: React.ReactElement<{} > = React.createElement(
      game
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
}
