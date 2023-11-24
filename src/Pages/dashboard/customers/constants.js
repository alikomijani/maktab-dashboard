export const columns = [
  {
    id: 1,
    renderCol: (row) => row.name,
    label: "NAME",
  },
  {
    id: 2,
    renderCol: (row) => row.username,
    label: "username",
  },
  {
    id: 10,
    renderCol: (row) => row.email,
    label: "EMAIL",
  },
  {
    id: 3,
    renderCol: (row) => row.address?.city,
    label: "LOCATION",
  },
  {
    id: 4,
    renderCol: (row) => row.phone,
    label: "PHONE",
  },
  {
    id: 5,
    renderCol: (row) => row.website,
    label: "website",
  },
];
