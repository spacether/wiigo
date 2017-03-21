export const createGroup = (group) => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data: {group}
  })
);

export const fetchGroup = (dashName) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${dashName}`
  })
);

export const deleteGroup = (dashName) => (
  $.ajax({
    method: "DELETE",
    url: `api/groups/${dashName}`
  })
);
