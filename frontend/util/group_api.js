export const createGroup = (group) => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data: {group}
  })
);
