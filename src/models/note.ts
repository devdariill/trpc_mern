import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose'
@modelOptions({
  schemaOptions: {
    timestamps: true, // cuando fue creado y cuando fue actualizado
  },
})
class Note {
  @prop()
  title: string

  @prop()
  description: string

  @prop()
  done: boolean
}
export default getModelForClass(Note)
