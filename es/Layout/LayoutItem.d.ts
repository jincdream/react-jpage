import * as React from 'react';
export default class LayoutItem extends React.Component<{
    nid: string;
    name: string;
    index: number;
    children: React.ReactElement;
    layout: string;
}> {
    render(): React.ReactElement<any>;
}
