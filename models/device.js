'use strict'

module.exports = (t) => {
  return t.createModel('device', {
    name: t.type.string().required(),
    moduleKey: t.type.string().required(),
    brand: t.type.string().optional(),
    model: t.type.string().optional(),
    type: t.type.string().required(),
    uid: t.type.string().required(),
    icon: t.type.string().optional(),
    meta: t.type.object().optional().allowExtra(true),
    createdAt: t.type.date().default(t.r.now()),
    hubId: t.type.string(),
    roomId: t.type.string()
  })
}
