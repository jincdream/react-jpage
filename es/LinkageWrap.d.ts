import * as React from 'react';
import { Linkages } from 'obs-parser';
import { Server } from 'jinter';
declare type Props<U> = {
    linkages: Linkages<U>;
    getContext: () => object;
    children: React.ReactElement;
    server: Server;
};
export default class LinkageWrap<U> extends React.Component<Props<U>> {
    state: any;
    paths: Array<string>;
    constructor(props: Props<U>);
    eventId: number;
    componentWillUnmount(): void;
    render(): React.ReactElement<any>;
}
export {};
