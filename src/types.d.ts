import { OBS_Schema, Base } from 'obs-parser'

export interface LinkageContextBase<T> extends object {
  [K in T]: K[T]
}
export interface IProps<AllComponents extends Base, Components extends Base, Context, LinkageContext> {
  schema: OBS_Schema<Components, AllComponents>,
  components: {
    [key: string]: React.ReactType
  },
  PageContext?: Context,
  LinkageContext?: LinkageContextBase<LinkageContext>
}

export interface IState<AllComponents, Components> extends IProps<AllComponents, Components> {

}