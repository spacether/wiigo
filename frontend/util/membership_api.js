export const joinGroup = (group, user) => (
  $.ajax({
    method: "POST",
    url: "api/memberships",
    data: {membership: {group_id: group.id, user_id: user.id}}
  })
);

export const leaveGroup = (item) => (
  $.ajax({
    method: "DELETE",
    url: `api/memberships/${item.membership_id}`
  })
);
