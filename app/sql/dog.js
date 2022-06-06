const getAllDogs = () =>
  `select d.id, d.name as "dogName", o.name as "ownerName" from public.dog as d join public.owner as o on d.owner=o.id`

const getAllOwners = () =>
  `select o.id, d.name as "dogName", o.name as "ownerName" from public.owner as o left join public.dog as d on d.owner=o.id`

module.exports = { getAllDogs, getAllOwners }
