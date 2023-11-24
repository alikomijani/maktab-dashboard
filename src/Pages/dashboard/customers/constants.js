export const columns = [
  {
    id: 1,
    renderCol: (row) => row.name,
    label: "NAME",
  },
  {
    id: 2,
    renderCol: (row) => row.email,
    label: "EMAIL",
  },
  {
    id: 3,
    renderCol: (row) => row.location,
    label: "LOCATION",
  },
  {
    id: 4,
    renderCol: (row) => row.phone,
    label: "PHONE",
  },
  {
    id: 5,
    renderCol: (row) => row.join_date,
    label: "REGISTRATION DATE",
  },
];
export const data = [
  {
    id: 1,
    name: "Ekaterina Tankova",
    avatar: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    join_date: "12/04/2019",
  },
];
