import * as React from 'react';
import { Linkages } from 'obs-parser';
import { Server } from 'jinter';
declare type Props<Names> = {
    linkages: Linkages<Names>;
    getContext: () => object;
    children: React.ReactElement;
    server: Server;
};
export default class LinkageWrap<Names> extends React.Component<Props<Names>> {
    state: any;
    constructor(props: Props<Names>);
    eventId: number;
    init(props: Props<Names>): void;
    componentWillUnmount(): void;
    componentWillMount(): void;
    render(): React.ReactElement<any>;
}
export {};
