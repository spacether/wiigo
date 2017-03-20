export const createGroup = (group) => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data: {group}
  })
);

export const updateMembers = (dashname, memberIds) => (
  $.ajax({
    method: "PATCH",
    url: `api/groups/${dashname}`,
    data: {group: {member_ids: memberIds}}
  })
);


export const fetchGroup = (dashname) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${dashname}`
  })
);
