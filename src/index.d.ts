import { OBS_Schema, Base } from 'obs-parser'

export interface IProps<AllComponents extends Base, Components extends Base> {
  schema: OBS_Schema<Components, AllComponents>,
  components: {
    [key: string]: React.ReactType
  }
}

export interface IState<AllComponents, Components> extends IProps<AllComponents, Components> {

}