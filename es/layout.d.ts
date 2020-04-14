import { Component } from 'react';
export interface ILayoutProps {
    template: string[][];
    rows: string[];
    columns?: string[];
    gap?: string;
    style?: object;
}
export default class Layout extends Component<ILayoutProps, ILayoutProps> {
    state: Readonly<{
        children?: import("react").ReactNode;
    }> & Readonly<ILayoutProps>;
    componentWillReceiveProps(props: ILayoutProps): void;
    render(): JSX.Element;
}
