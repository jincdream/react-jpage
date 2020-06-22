import * as React from 'react';
import { IComponentRenderDO, Base } from 'obs-parser';
import { IProps, IState } from './types';
import { Client, Server } from 'jinter';
export declare const LayoutBox: any;
export declare const LayoutItem: any;
export default class ReactJPage<AllComponents extends Base, ComponentsData extends Base, Context, LinkageContext> extends React.Component<IProps<AllComponents, ComponentsData, Context, LinkageContext>, IState<AllComponents, ComponentsData>> {
    LinkageContext: any;
    ServerID: string;
    Server: Server;
    Client: Client;
    constructor(props: IProps<AllComponents, ComponentsData, Context, LinkageContext>);
    initLinkages(): void;
    PageContext: Readonly<Context | {}>;
    triggers: {
        [key: string]: () => void;
    }[];
    state: {
        schema: import("obs-parser").OBS_Schema<ComponentsData, AllComponents>;
        components: {};
    };
    componentWillReceiveProps(props: IProps<AllComponents, ComponentsData, Context, LinkageContext>): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateSate(keys: (keyof IState<AllComponents, ComponentsData>)[], receiveProps: IProps<AllComponents, ComponentsData, Context, LinkageContext>): IState<AllComponents, ComponentsData>;
    renderComponents(component: IComponentRenderDO<AllComponents, ComponentsData>, index: number): JSX.Element;
    render(): JSX.Element;
}
