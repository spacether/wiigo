export const createGroup = (group) => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data: {group}
  })
);

export const fetchGroup = (dashname) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${dashname}`
  })
);

export const deleteGroup = (dashname) => (
  $.ajax({
    method: "DELETE",
    url: `api/groups/${dashname}`
  })
);
