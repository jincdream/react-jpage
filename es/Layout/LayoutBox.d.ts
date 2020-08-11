import { Component } from 'react';
export interface ILayoutProps {
    template: string[][];
    rows: string[];
    columns?: string[];
    gap?: string;
    style?: object;
}
export default class Layout extends Component<ILayoutProps, ILayoutProps> {
    state: {
        template: string[][];
        rows: string[];
        columns: string[];
        gap: string;
        style: object;
    };
    componentWillReceiveProps(props: ILayoutProps): void;
    render(): JSX.Element;
}
