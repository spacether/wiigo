export const createGroup = (group) => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data: {group}
  })
);

export const searchGroups = (options) => {
  let {topic, query, location} = options;
  return $.ajax({
    method: "GET",
    url: `api/groups?topic=${topic}&location=${location}&query=${query}`
  });
};

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
