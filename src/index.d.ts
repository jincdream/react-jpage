import { OBS_Schema, Base } from 'obs-parser'

export interface IProps<AllComponents extends Base, Components extends Base, Context> {
  schema: OBS_Schema<Components, AllComponents>,
  components: {
    [key: string]: React.ReactType
  },
  PageContext?: Context
}

export interface IState<AllComponents, Components> extends IProps<AllComponents, Components> {

}